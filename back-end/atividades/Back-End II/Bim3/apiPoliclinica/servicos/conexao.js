import mysql from 'mysql2/promise'

const pool = mysql.createPool(
    {
        host: 'localhost',
        user: 'userEscola',
        password: 'userescola123',
        database: 'clinica'
    }
)

export default pool;
