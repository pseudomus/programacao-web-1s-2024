const express = require("express");
const app = express()

app.get('/util/matematica',function(req,res)){
    
}

const PORT = 8080;
app.listen(PORT,function()){
    console.log('app rodando na porta ' + PORT);
}