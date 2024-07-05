const { log } = require('console')
const express=require('express')
const app=express()
const path=require('path')


app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'index.html'))
})
app.get('/about',(req,res)=>{
    let a=req.query;
    if(a.age===23){
        res.send('you are big')
    }else{
        res.send('you are sam')
    }
})
app.listen(3000,()=>{
    console.log('it is running');
})

