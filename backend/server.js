const express = require('express');
const bodyParser = require('body-parser')

const db = require('./db')

const app = express()

// json형태로 오는 요청의 본문을 해석할 수 있게 등록
app.use(bodyParser.json())

// DB 테이블 생성
db.pool.query(`CREATE TABLE lists (
    id INTEGER AUTO_INCREMENT,
    value TEXT,
    PRIMARY KEY (id)
)`, (err, results, fields)=>{
    console.log('results', results)
})

// DB lists에 있는 모든 데이터를 프론트 서버에 보내주기
app.get('/api/values', (req, res)=>{
    // DB에서 모든 정보 가져오기
    db.pool.query('SELECT * FROM lists;',
    
    (err, results, fields) => {
        if(err)
            return res.status(500).send(err)
        else
            return res.json(results)
    })
})

// client에서 입력한 값을 데이터베이스에 넣어주기
app.post('/api/value', (req, res, next)=>{
    // DB에 값 넣어주기
    db.pool.query(`INSERT INTO lists (value) VALUES("${req.body.value}")`,
    (err, results, fields)=>{
        if(err)
            return res.status(500).send(err)
        else 
            return res.json({success: true, value: req.body.value})
    })
})


app.listen(5000, ()=>{
    console.log('앱이 5000번 포트에서 작동 시작...')
})