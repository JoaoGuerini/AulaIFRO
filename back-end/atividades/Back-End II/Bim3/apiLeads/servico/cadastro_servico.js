import pool from "./conexao.js";

export async function CadastroUsuarios(nome, email, telefone){
    const conexao = await pool.getConnection();
    const query = `INSERT INTO leads SET nome='${nome}', email='${email}', telefone=${telefone}`
    const res = conexao.execute(query)
    conexao.release();
    
    return res;
}