const http=require('http');
const express=require('express');
const app=express();


app.use(express.static('public'));
app.get('/',function(req,res){
    res.sendFile('index.html');
})
app.listen(1000,()=>{
    console.log('server is running on : http://localhost:1000');
})