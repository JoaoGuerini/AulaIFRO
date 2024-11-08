import { returnAll, returnYears } from "./servicos/servicos.js";
import express from "express";

const app = express()

app.get('/historicoIPCA', (req, res) =>{
    const dados = returnAll()
    const inputYear = parseInt(req.query.ano)

    const dadosAno = returnYears(inputYear)
    res.json(dadosAno)
    res.json(dados)
})


app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080 em' + new Date())
})

