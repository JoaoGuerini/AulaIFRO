import pool from "./conexao.js";

export async function retornaMedicos() {
    const conexao = await pool.getConnection()
    const query = "SELECT m.id, m.nome, m.telefone, m.email, e.especialidade FROM medicos AS m JOIN especialidades AS e ON m.especialidade = e.id ORDER BY m.nome"
    const res = executaQuery(conexao, query)
    conexao.release()

    return res
}

export async function retornaMedicosNome(nome) {
    const conexao = await pool.getConnection()
    const query = `SELECT m.id, m.nome, m.telefone, m.email, e.especialidade FROM medicos AS m JOIN especialidades AS e ON m.especialidade = e.id AND m.nome LIKE '%${nome}%'`
    const res = executaQuery(conexao, query)
    conexao.release()

    return res
}

export async function retornaMedicosEspecialidade(especialidade) {
    const conexao = await pool.getConnection()
    const query = `SELECT m.id, m.nome, m.telefone, m.email, e.especialidade FROM medicos AS M INNER JOIN especialidades AS e ON m.especialidade = e.id WHERE e.especialidade LIKE '${especialidade}%' ORDER BY e.especialidade`
    const res = executaQuery(conexao, query)
    conexao.release()

    return res
}


export async function executaQuery(conexao, query){
    const resultado_query = await conexao.query(query)
    const resposta = resultado_query[0]
    return resposta
}