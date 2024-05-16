'use strict';

const teams = [//CREO UN ARRAY CON LÈ SQUADRE DI CALCIO
    {
        name:'Juventus',
        score:0,
        fouls:0,
    },
    {
        name:'Milan',
        score:0,
        fouls:0,
    },
    {
        name:'Cagliari',
        score:0,
        fouls:0,
    },
    {
        name:'Napoli',
        score:0,
        fouls:0,
    },
    {
        name:'Brescia',
        score:0,
        fouls:0,
    },
    {
        name:'Roma',
        score:0,
        fouls:0,
    },
    {
        name:'Lazio',
        score:0,
        fouls:0,
    },
    
]

function randomNumber(min, max) {//FUNZIONE PER GENERARE UN NUMERO INTERO RANDOMICO DOPO CHE GLI VIENE ASSEGNATO UN MINIMO È UN MASSIMO
    return Math.floor(Math.random() * (max - min) ) + min;
  }



teams.forEach(element => element.score= randomNumber(0,50));//ASSEGNO UN VALORE RANDOMICO TRA 0 E 50 ALLA PROPRIETA SCORE
teams.forEach(element => element.fouls= randomNumber(0,20));//ASSEGNO UN VALORE RANDOMICO TRA 0 E 20 ALLA PROPRIETA FOULS
console.log(teams)