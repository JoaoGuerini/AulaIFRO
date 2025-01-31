import mysql from 'mysql2/promise'

const pool = mysql.createPool(
    {
        host: 'localhost',
        user: 'libertadores',
        password: 'liberta1234',
        database: 'libertadores'
    }
)

export default pool;
