const http=require('http');
const express=require('express');
const app=express();
const db=require('../LoginSystem/config/mongoose');
const mongoose = require('mongoose');
const user=require('../LoginSystem/models/user');
//using express.urlencoded make password field to read without making it undefined.
app.use(express.urlencoded({
    extended: true
  }));
app.use(express.static('public'));

app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'));
app.listen(1000,()=>{
    console.log('server is running on : http://localhost:1000');
})