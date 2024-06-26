const express = require('express');
const calculadora = require('./util/calculadora');
const app = express()


app.get('/somar/:a/:b', (req,res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.somar(a,b);
    res.send(resultado.toString());
});

app.get('/subtrair/:a/:b', (req,res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.subtrair(a,b);
    res.send(resultado.toString());
});

app.get('/multiplicar/:a/:b',  (req,res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.multiplicar(a,b);
    res.send(resultado.toString());
});

app.get('/dividir/:a/:b', (req,res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);
    const resultado = calculadora.dividir(a,b);
    if (resultado == 'Erro: divisão por zero') {
        res.status(400).send(resultado);
    }else {
        res.send(resultado.toString());
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('server is running on port ${PORT}');
});