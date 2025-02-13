import mysql from 'mysql2/promise'

const pool = mysql.createPool(
    {
        host: 'clinica',
        user: 'userEscola',
        password: 'liberta1234',
        database: 'libertadores'
    }
)

export default pool;
