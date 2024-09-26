const URL = 'https://dummyjson.com/products/search?q=phone'

async function Guerini() {
    fetch(URL)
    .then(res => res.json())
    .then(console.log)
    
}

Guerini()