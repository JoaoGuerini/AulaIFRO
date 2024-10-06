const express = require('express')
const colecaoTimes = require('./dados/dados')

const app = express()


const times = colecaoTimes.colecaoTIMES
let msgErro = ''

app.get('/times', (req, res) => {
    res.json(times)
})

app.get('/times/:id', (req, res) => {
    const idInput = parseInt(req.params.id)
    
    let colecao =  times.find(id => id.id === idInput)

    verificarInput(idInput ,colecao, res, msgErro, 'id')
})

app.get('/times/libertadores/:libertadores', (req, res) => { 
    const libertadores = parseInt(req.params.libertadores);
    const listTimes = []

    times.forEach(liberta => {
        if(libertadores === liberta.libertadores){
            listTimes.push(liberta)
        }
    })

    verificarInput(libertadores, listTimes, res, msgErro, 'libertadores')

})

app.get('/times/mundial/:mundiais', (req, res) => {
    const mundiaisInput = parseInt(req.params.mundiais);
    const listTimes = [];

    times.forEach(mundiais => {
        if(mundiais.mundiais === mundiaisInput){
            listTimes.push(mundiais)
        }
    })
    verificarInput(mundiaisInput, listTimes, res, msgErro, 'mundiais')
})

app.listen(8080, () => {
    console.log('Servidor inicialidado na máquina em '+ new Date())
})








const verificarInput = (input, colecao, res, mensagemErro, tipoErro) => {

    const verificarTipoErro = (tipoErro) => {
        if(tipoErro === 'id'){
            return mensagemErro = 'Id não encontrado'
        }
        else if (tipoErro ===  'libertadores') {
            return mensagemErro = 'Número de libertadores Inválidas'
        }
        else if(tipoErro === 'mundiais'){
            return mensagemErro = 'Número de mundiais Inválidos'
        }
    }   


    if(!(isNaN(input))) {
        if(!colecao) {
            verificarTipoErro(tipoErro)
        }

        else{
            verificarTipoErro(tipoErro)
        }
    }
    if (colecao && colecao.length !== 0) {
        return res.json(colecao);
    } else {
        return res.status(404).json({ "erro": mensagemErro });
    }
}