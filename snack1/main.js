'use strict';

const bicycles = [
    {
        nome: 'bicicletta da corsa',
        peso: 10,
    },
    {
        nome: 'Mountain bike',
        peso: 30,
    },
    {
        nome: 'BMX',
        peso: 35,
    },
    {
        nome: 'tandem',
        peso: 50,
    },
    {
        nome: 'bicicletta da citta',
        peso: 15,
    }
    
];
const bicyclesWeigh = []
console.log(bicycles)

bicycles.forEach(element=> bicyclesWeigh.push(element.peso))
