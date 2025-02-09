import express from 'express'
import cors from 'cors';
import { retornaMedicos, retornaMedicosEspecialidade, retornaMedicosNome } from './servicos/retornaMedicos_servico.js'

const app = express()

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type',
  };
  
  app.use(cors(corsOptions));

app.get('/medicos', async(req, res) =>{
    const nome = req.query.nome
    const especialidade = req.query.especialidade

    let medicos = ""
    if (typeof nome === 'undefined' && typeof especialidade === 'undefined'){
        medicos = await retornaMedicos()
    }

    else if (typeof nome !== 'undefined'){
        medicos = await retornaMedicosNome(nome)
    }

    else{
        medicos = await retornaMedicosEspecialidade(especialidade)
    }

    medicos.length > 0 ? res.json(medicos) : res.status(404).json({Mensagem: "Nenhum médico encontrado para a pesquisa."})
})

app.listen(7777, () => {
    const data = new Date()
    console.log(`Servidor iniciado em ${data}`)
})