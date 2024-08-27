const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    let mensagem = ({mensagem: "Hello World, I'm Guerini", numero: "20"})
    res.json(mensagem)
});

app.listen(8080, () => {
    let data = new Date();
    console.log("Servidor node inicializado em: "+data)
})