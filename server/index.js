const express = require('express')

const app = express()

app.set('secret','fsadjklkjlfafdss')

// 跨域a
app.use(require('cors')())
// 解析 body
app.use(express.json())
app.use('/uploads',express.static(__dirname+'/uploads'))

require('./plugins/db')(app)
require('./routes/admin/index.js')(app)
require('./routes/web')(app)

app.listen(3000,()=>{
    console.log('http://localhost:3000')
})