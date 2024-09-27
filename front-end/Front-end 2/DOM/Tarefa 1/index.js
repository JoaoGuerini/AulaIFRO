/* Crie um menu de navegação responsivo, que seja populado dinamicamente a partir de
um array de itens:*/

const itensMenu = [
    {nome: 'Inicio', url: 'index.html'},
    {nome: 'Sobre', url: 'sobre.html'},
    {nome: 'Contato', url: 'contato.html'},
]

const body = document.querySelector('body')

const getList = () => {
    const itemLi = document.createElement('li')    
    itensMenu.forEach(menu => {
        const a = document.createElement('a')
        a.setAttribute("href", menu.url)
        a.style.color = 'red'

        a.textContent = menu.nome
        itemLi.appendChild(a)

        console.log(itemLi)
        

    })
    return itemLi
}

const makeEstructor = () => {
    const header = document.createElement('header')
    const nav = document.createElement('nav')
    const ul = document.createElement('ul')    
    const li = getList()
    console.log(li)
    ul.appendChild(li)
    nav.appendChild(ul)
    header.appendChild(nav)
    body.appendChild(header)

    li.style.color = 'black'

    header.style.background= "#071D41"
    header.style.fontFamily = 'Arial'
    ul.style.height = '40px'

    ul.style.display = 'flex'
    ul.style.flexDirection = 'row'
    ul.style.alignItems = 'center'
    ul.style.justifyContent = 'center'
    ul.style.gap = '20px'

    li.style.textDecoration = 'none'
}

makeEstructor()