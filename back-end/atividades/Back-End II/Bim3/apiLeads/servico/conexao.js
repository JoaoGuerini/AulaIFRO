import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'Joaopedro1221.',
    database : 'leads'
});

export default pool;