const botonesFavoritos = document.querySelectorAll('.btn-favorito')
const librosCard = document.querySelectorAll('.card-product')
const  spanFav = document.getElementById('spanFav')
const  botonFavoritos = document.querySelector('#botonFavorito')
const mainFav = document.getElementById('cont-fav')




let misFavoritos = []

function actualizarLocal() {
    localStorage.setItem('data', JSON.stringify(misFavoritos))
}

function cargarLocal() {
    const localFavoritos = localStorage.getItem('data')
    if (localFavoritos) {
        misFavoritos = JSON.parse(localFavoritos)

    }
}
cargarLocal()
contadorFav()
function guardarLocal(infoLibro) {
    const index = misFavoritos.findIndex(element => element.id === infoLibro.id)  
    if (index > -1) {
        misFavoritos.splice(index, 1)
        actualizarLocal()
        contadorFav()
    } else{
        misFavoritos.push(infoLibro)
        actualizarLocal()
        contadorFav()
    }
    console.log(index)
}
function contadorFav() {
    spanFav.textContent = misFavoritos.length
}


botonesFavoritos.forEach(button => {
    button.addEventListener('click', (e) => {
        const infoCard = e.target.closest('.card-product')

        const infoLibro = {

            id: infoCard.dataset.productId ,
            titulo: infoCard.querySelector('h3').textContent ,
            portada: infoCard.querySelector('img').src
        }

        guardarLocal(infoLibro)
    })
})


function mostrarFavoritos(){
    botonFavoritos.disabled = true
    //DIC QUE CONTIENE LAS CARDS FAV
    const cardFavs = document.createElement('div')
    cardFavs.classList.add('cont-main-fav')
    cardFavs.id = 'cont-main-fav'
    //if 
    if(misFavoritos.length == 0){
        //LA CARD EN CONCRETO
        const cardFavIf = document.createElement('div')
        cardFavIf.classList.add('card-fav')
        //DIV TITULO FAV
        const infoFavIf = document.createElement('div')
        infoFavIf.classList.add('titulo-fav')
        const tituloFavIf = document.createElement('p')
        tituloFavIf.textContent = 'NO HAY LIBROS GUARDADOS'
        infoFavIf.appendChild(tituloFavIf)
        cardFavIf.appendChild(infoFavIf)
        cardFavs.appendChild(cardFavIf)
        
        
    } 
    // else
    else {
        misFavoritos.forEach(favorito => {
        //LA CARD EN CONCRETO
        const cardFavElse = document.createElement('div')
        cardFavElse.classList.add('card-fav')
        //DIV IMG FAV
        const imgFavElse = document.createElement('div')
        const portadaFavElse = document.createElement('img')
        portadaFavElse.src =  favorito.portada
        imgFavElse.appendChild(portadaFavElse)
        cardFavElse.appendChild(imgFavElse)
        //DIV TITULO FAV
        const infoFavElse = document.createElement('div')
        infoFavElse.classList.add('titulo-fav')
        const tituloFavElse = document.createElement('p')
        tituloFavElse.textContent = favorito.titulo
        infoFavElse.appendChild(tituloFavElse)
        cardFavElse.appendChild(infoFavElse)
        cardFavs.appendChild(cardFavElse)
        

        })
    }
    const divBtnFav = document.createElement('div')
    divBtnFav.classList.add('btn-cerrar-fav')

    const botonCerrar = document.createElement('button')
    botonCerrar.classList.add('fa-solid', 'fa-xmark')
    botonCerrar.id = 'cerrar-favoritos'
    divBtnFav.appendChild(botonCerrar)
    cardFavs.appendChild(divBtnFav)

    mainFav.appendChild(cardFavs)
}


// eliminar el div de lista favoritos
mainFav.addEventListener('click',function (e){
    if(e.target.classList.contains('fa-xmark')) {
        e.target.closest('.cont-main-fav').remove()
        actualizarLocal()
        botonFavoritos.disabled = false

    }


}, false)

