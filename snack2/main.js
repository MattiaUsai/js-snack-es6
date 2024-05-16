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

const teamsFouls= []//ARRAY VUOTO DOVE PUSHO IL NOME DELLE SQUADRE E I FALLI SUBITI

teams.forEach(element => element.score= randomNumber(0,50));//ASSEGNO UN VALORE RANDOMICO TRA 0 E 50 ALLA PROPRIETA SCORE
teams.forEach(element => element.fouls= randomNumber(0,20));//ASSEGNO UN VALORE RANDOMICO TRA 0 E 20 ALLA PROPRIETA FOULS


teams.forEach(element => {
    teamsFouls.push(//PUSHO IL NOME E I FALLI NEL NUOVO ARRAY
        {
           name: element.name,
           fouls:element.fouls,
        }
    )


})
console.log(teams)

console.log(teamsFouls)
teamsFouls.forEach(element=> console.log(`La squadra ${element.name} ha subito ${element.fouls} falli`))//STAMPO IN CONSOLE LA SQUADRA È I FALLI CHE HA SUBITO