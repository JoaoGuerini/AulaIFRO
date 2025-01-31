import mysql from 'mysql2/promise'

const pool = mysql.createPool(
    {
        host: 'localhost',
        user: 'libertadores',
        password: 'libertadores1234',
        database: 'libertadores'
    }
)

export default pool;
