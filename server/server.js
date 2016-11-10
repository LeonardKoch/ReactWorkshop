const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('public'))

const images = fs.readdirSync('./public/images');
let animals = images.map((image) => {
    return {
        image: image,
        url: '/images/' + image,
        votes: 0
    }
});

app.post('/vote/:winner', (req, res) => {
    const params = req.params;

    animals = animals.map((animal) => {
        if(animal.image === params.winner) {
            animal.votes++;
        }
        return animal;
    });

    res.end(JSON.stringify({status: 'ok'}));
});

const getRandomAnimal = () => animals[Math.floor(Math.random()*animals.length)];

app.get('/animalpair', (req, res) => {
    const animal1 = getRandomAnimal();
    let animal2 = getRandomAnimal();
    while(animal1.image === animal2.image) {
        animal2 = getRandomAnimal();
    }
    const response = {
        animal1: animal1,
        animal2: animal2
    };
    res.end(JSON.stringify(response));
});

app.get('/animals', (req, res) => {
    const response = {
        animals: animals
    };

    res.end(JSON.stringify(response));
});

app.listen(3500, function () {
  console.log('Service listening on port 3500');
});
