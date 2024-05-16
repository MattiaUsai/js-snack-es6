'use strict';
//CREO UN ARRAY DI OGGETTI OGNI OGGETTO HA UN NOME E UN PESO
const bicycles = [
    {
        nome: 'bicicletta da corsa',//NOME DELL'OGGETTO
        peso: 20,//PESO DELL'OGGETTO
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
const bicyclesWeigh =[];//CREO UN ARRAY VUOTO DOVE VADO A PUSHARE I PESI DELLE BICICLETTE

bicycles.forEach(element=> bicyclesWeigh.push(element.peso))//PUSHO I PESI DELLE BICICLETTE NELL'ARRAY

const bicyclesWeighlight= (arrayMin(bicyclesWeigh));//TROVO IL NUMERO PIU PICCOLO TRA I NUMERI CHE CI SONO NELL'ARRAY BICYCLESWEIGH

const bicycleslightindex = bicyclesWeigh.indexOf(bicyclesWeighlight);//TROVO L'INDICE DELL'NUMERO PIU PICCOLO

const bicycleslight = bicycles[bicycleslightindex].nome;//RICAVO IN BASE ALL'INDICE DELL'NUMERO PIU PICCOLO IL NOME DELLA BICICLETTA







console.log (`La bicicletta piu leggera e la ${bicycleslight} con un peso di ${bicyclesWeighlight} `)//SCRIVO IN CONSOLE QUALE è LA BICICLETTA PIU LEGGERA



function arrayMin(arr) {//FUNZIONE PER TROVARE IL NUMERO PIU PICCOLO ALL'INTERNO DI UN ARRAY
    return Math.min.apply(null, arr);
  }





