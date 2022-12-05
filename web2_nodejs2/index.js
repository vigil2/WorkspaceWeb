const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors()) // 모든 요청에 다 응답을 하겠다.


app.get('/', function (req, res) {
    console.log("mainpage");
    res.send("hi")
    
})

app.get('/sound/:name', function (req, res) {
    const { name } = req.params;
    if (name == "dog") {
        res.json({'sound' : '멍멍'})
    } else if (name == "cat") {
        res.json({'sound' : '야옹'})
    } else {
        res.json({'sound'  : '알수없음'})
    }
    
    console.log(name);
})

// app.get('/user/:id', function (req, res) {
//     // const p = req.params
//     // console.log(p.id)
//     // res.json({ 'userid': p.id})
//     const q = req.query
//     console.log(q)
//     res.json({ 'userid': q })
// })

app.listen(3000)