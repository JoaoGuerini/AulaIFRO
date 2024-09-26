const express = require('express')
const colecaoTimes = require('./dados/dados')

const app = express()

app.get('/times', (req, res) => {
    const times = colecaoTimes.colecaoTIMES
    res.json(times)
})

app.get('/times/:idtimes', (req, res) => {
    const idTIME = parseInt(req.params.idtimes)
    let msgErro = ''
    let colecao;

    if(!(isNaN(idTIME))) {
        colecao =  colecaoTimes.colecaoTIMES.find(id => id.id === idTIME)
        if(!colecao) {
            msgErro = 'UF não encontrada'
        }

        else{
            msgErro = 'Requisição Inválida'
        }
    }

    if (colecao) {
        res.json(colecao)

    } else{
        res.status(404).json({"erro": mensagemErro})
    }
})

app.listen(8080, () => {
    console.log('Servidor inicialidado na máquina em'+ new Date())
})