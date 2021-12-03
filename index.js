const { clear } = require('console');
const express = require('express');
const path = require('path');
const app = express();

/*const connection = require('./public/scripting/dbconnection.js');*/
app.use(express.static('./public'))


app.get('/navbar',(req,res)=>{
    res.sendFile(path.join(__dirname, './public/navbar.html'));
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './public/index.html'));
})

app.get('/inseriralunos', function(req, res) {
    res.sendFile(path.join(__dirname, './public/inseriralunos.html'));
})

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, './public/login.html'));
})

app.get('/consultaalunos', function(req, res) {
    res.sendFile(path.join(__dirname, './public/consultaalunos.html'));
})
/*
app.get('/:nome', function(req, res) {
    res.send('Hello ' + req.params.nome);
})*/



const port = 3000;

app.listen(port, () => {
    console.log(`Listenning on port ${port}`);
})