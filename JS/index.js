
// MAIN CONT
const contMain = document.getElementById('cont-main')
contMain.classList.add('container')

// HTML
function agregarLibros(){
    
    // DIV QUE CONTIENE LAS CARDS
const contCards = document.createElement('div')
contCards.classList.add('container-products')
// UN FOREACH PARA CREAR CARDS POR CADA LIBRO
libros.forEach(libro => {
// LA CARD EN CONCRETO
    const card = document.createElement('div')
    card.classList.add('card-product')
    card.dataset.productId = libro.ID

// DIV  PARA LA IMAGEN DE PORTADA
    const contImg = document.createElement('div')
    contImg.classList.add('container-img')
    const imgPortada = document.createElement('img')
    imgPortada.src = libro.PORTADA
    contImg.appendChild(imgPortada)
    card.appendChild(contImg)

//  DIV PARA LA INFORMACION (TITULO AUTOR GENERO)
    const contInfo = document.createElement('div')
    contInfo.classList.add('content-card-product')
    const titulo = document.createElement('h3')
    titulo.textContent = libro.TITULO
    const info = document.createElement('p')
    info.innerHTML = `  <strong>AUTOR: </strong> ${libro.AUTOR} <br/>
                        <strong>GENERO: </strong> ${libro.GENERO}`
    contInfo.appendChild(titulo)
    contInfo.appendChild(info)
    card.appendChild(contInfo)

    // EL FOOTER DE LA CARD
    const contFooter = document.createElement('div')
    contFooter.classList.add('footer-card-product')

    // CONTENEDOR DE LOS BOTONES
    const contBtn = document.createElement('div') 
    contBtn.classList.add('container-buttons-card')
    
    // PRIMER BOTON FAV
    const favoritosBtn = document.createElement('button')
    favoritosBtn.classList.add('btn-favorito')
    const iconFavDef = document.createElement('i')
    iconFavDef.classList.add('fa-regular', 'fa-heart')
    iconFavDef.id = 'favorito-regular'
    favoritosBtn.appendChild(iconFavDef)

    //  ESTE BOTON DE FAV SOLIDO NO LO AGREGO
    const iconFavAct = document.createElement('i')
    iconFavAct.classList.add('fa-solid', 'fa-heart')
    iconFavAct.id = 'added-favorito'


    contBtn.append(favoritosBtn)
    contFooter.appendChild(contBtn)
    contInfo.appendChild(contFooter)
    contCards.appendChild(card)
})

    contMain.appendChild(contCards)

}
agregarLibros()


