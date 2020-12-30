const mysql = require('mysql')
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql',
    user: 'root',
    password: 'wodud2614!',
    database:'react_fullstack_app'

})

exports.pool = pool;