'use strict';
//CREO UN ARRAY DI OGGETTI OGNI OGGETTO HA UN NOME E UN PESO
const bicycles = [
    {
        nome: 'bicicletta da corsa',//NOME DELL'OGGETTO
        peso: 10,//PESO DELL'OGGETTO
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


const bicyclesWeigh =[];

console.log(bicycles)

bicycles.forEach(element=> bicyclesWeigh.push(element.peso))







function arrayMin(arr) {
    return Math.min.apply(null, arr);
  }