const express = require('express');
//const database = require('./db');
 
const app = express();

app.listen(3000);

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.sendFile('./index.html',{root:__dirname});
});

