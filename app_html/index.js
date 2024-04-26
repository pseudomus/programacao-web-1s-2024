const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('Views', __dirname + '/Views');

app.get('/',function(req,res){
    let nome = 'Pedro';
    res.render('index.html', {nome});
});

// app.get('/contato',function(req,res){
//     let nome = 'Pedro';
//     res.render('contato.html', {nome});
// });

const PORT = 8080;

app.listen(PORT, function(){
    console.log('app rondando na porta '+ PORT);
});