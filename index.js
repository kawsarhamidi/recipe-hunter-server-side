const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chef = require('./data/chefFoods.json');
app.use(cors());

app.get('/', (req, res)=> {
    res.send('welcome')
});
app.get('/chefdetails', (req, res)=> {
    res.send(chef)
});

app.get('/chefdetails/:id', (req, res)=> {
    const id = req.params.id;
    const selectedChef = chef.find(chef => chef.id === id);
    request.send(selectedChef); 
})

app.listen(port, () =>{
    console.log(`listed port${port}`);
})
