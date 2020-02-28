
const express = require('express');

const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('home page')
})

app.get('/pictures?', (req, res) => {
    res.send('pictures');
});

app.get('/cats?(fancy)?', (req, res) => {
    res.send('cats be fancy');
});

app.get('/dog*', (req, res) => {
    res.send('doggo');
});

// app.get('/contact', (req, res) => {
//     let userName = req.param('name');
//     res.send(`contact: ${userName}`);
// });

app.get('/contact/:name', (req, res) => {
    let name = req.param('name')
    res.send(`your name is: ${name}`)
});

app.get('/add', (req, res) => {
    let number1 = req.param('num1')
    let number2 = req.param('num2')
    let addition = Number(number1) + Number(number2)

    res.send(`<h1 style='color: blue;'>${number1} + ${number2} = ${addition}</h1>`);
});

app.get('/pics', (req, res) => {

    let imgVar = req.param('img');

    res.send(`<img src='${imgVar}';/>`)
});

app.listen(8000, () => {
    console.log("Running on 8000");
});