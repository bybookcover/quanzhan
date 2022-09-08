const express = require('express')

const app = express()

// 跨域
app.use(require('cors')())
// 解析 body
app.use(express.json())


require('./plugins/db')(app)
require('./routes/admin/index.js')(app)

app.listen(3000,()=>{
    console.log('http://localhost:3000')
})