const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const chef = require('./data/chefdata.json');

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.get('/chef/', (req, res) =>{
    res.send(chef)
})

app.listen(port, ()=>{
    console.log(`Hello World: ${port}`);
})
