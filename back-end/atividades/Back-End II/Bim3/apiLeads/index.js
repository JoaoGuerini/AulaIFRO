import express from 'express'
import cors from 'cors'
import { CadastroUsuarios } from './servico/cadastro_servico.js'

const app = express()
app.use(cors())
app.use(express.json())

app.post('/usuarios', async(req, res) => {
    const{nome, email, telefone} = req.body

    if(nome != null, email != null, telefone != null){
        const resp = await CadastroUsuarios(nome, email, telefone)

        if(resp.affectedRows > 0){
            res.status(202).send("Enviado com sucesso!!")
        }
        else{
            res.status(404).send("Erro interno.")
        }

    }
    
})

app.listen(3000, () => {
    const data = new Date()
    console.log(`Servidor iniciado em ${data}`)
})