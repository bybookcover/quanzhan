module.exports = app =>{
    const express = require('express')
    const jwt = require('jsonwebtoken')
    const assert = require('assert')
    const AdminUser = require('../../models/AdminUser')
    const router = express.Router({
        mergeParams:true
    })

    router.post('/', async(req,res)=>{
        const model = await req.Model.create(req.body)
        res.send(model)
    })    
    router.put('/:id', async(req,res)=>{
        const model = await req.Model.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })    
    router.delete('/:id', async(req,res)=>{
        const model = await req.Model.findByIdAndDelete(req.params.id,req.body)
        res.send({
            success: true
        })
    })  
    router.get('/', async(req,res,next)=>{
        const token = String(req.headers.authorization || '').split(' ').pop()
        const { id } = jwt.verify(token, app.get('secret'))
        req.user = await AdminUser.findById(id)
        await next ()
    },async(req,res)=>{
        const queryOptions = {}
        if(req.Model.modelName === 'Category'){
            queryOptions.populate = 'parent'
        }
        const items = await req.Model.find().setOptions(queryOptions).limit(10)
        res.send(items)
    })    
    router.get('/:id', async(req,res)=>{
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })    

    app.use('/admin/api/rest/:resource', async(req,res,next)=>{
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../../models/${modelName}`)
        next()
    }, router)

    const multer = require('multer')
    const upload = multer({dest:__dirname+'/../../uploads'})
    app.post('/admin/api/upload',upload.single('file'),async(req,res)=>{
        const file = req.file
        file.url= `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })

    app.post('/admin/api/login',async(req,res) =>{
        const{username,password} = req.body
        const user = await AdminUser.findOne({username}).select('+password')
        if(!user){
            return res.status(422).send({
                message:'用户不存在'
            })
        }
        const isValid = require('bcrypt').compareSync(password,user.password)
        if(!isValid){
            return res.status(422).send({
                message:'密码错误'
            })
        }

        
        token = jwt.sign({id: user._id},app.get('secret'))
        res.send({token})
    })
}