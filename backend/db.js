const mysql = require('mysql')
const pool = mysql.createPool({
    // docker-compose파일에서 지정한 환경변수를 .env로 가져옴
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT

})

exports.pool = pool;