import express from 'express'
import { retornaCampeonatos, retornaCampeonatosAno, retornaCampeonatosID, retornaCampeonatosTime } from './servico/retornaCampeonatos_servico.js'
import pool from './servico/conexao.js'

const app = express()

// app.listen(9000, async() => {
//     const data = new Date()
//     console.log(`Servidor node iniciado em ${data}`)

//     const conexao = await pool.getConnection()
//     console.log(conexao.threadId)

//     conexao.release()
// })

app.get('/campeonatos', async(req, res) => {
 
    const ano = req.query.ano
    const time = req.query.time

    if(typeof ano === 'undefined' && typeof time === 'undefined'){
        campeonatos = await retornaCampeonatos()
    }
    else if(typeof ano !== 'undefined'){
        campeonatos = await retornaCampeonatosAno(ano)
    }
    else if (typeof time !== 'undefined'){
        campeonatos = await retornaCampeonatosTime(time)
    }

    if (campeonatos.length > 0){
        res.json(campeonatos)
    }
    else{
        res.status(404).json({mensagem: "Nenhum campeonato encontrado"})
    }
})

app.get('/campeonatos/:id', async(req, res) => {
    const id = parseInt(req.params.id)
    if (id <= 0 ){
        console.log('caiu')
        res.status(404).json({mensagem: "Erro"})
        return
    }

    const campeonato = await retornaCampeonatosID(id)
    
    if(campeonato.length > 0){
        res.json(campeonato)
    }
    else{
        res.status(404).json({mensagem: "Nenhum campeonato foi encontrado"})
    }
})


app.listen(9000, () => {
    const data = new Date()
    console.log(`Servidor iniciado em ${data}`)
})