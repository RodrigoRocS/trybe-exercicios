// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3,
//     },
// };

// console.log('A jogadora ' + player.name + ' tem ' + player.age + ' anos de idade.');


// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// console.log('A jogadora ' + player.name + ' foi eleita a melhor do mundo por ' + player['bestInTheWorld'].length + ' vezes.');

// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');


// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };


//   for(let index in names) {
//     console.log('Olá ' + names[index]);
//   }

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };

//   for(let index in car) {
//     console.log(index, car[index]);
//   }

function adicao (a, b) {
    return a+b;
}
console.log(adicao())
function subtracao (a, b) {
    return a-b;
}
console.log(subtracao());
function multiplicacao (a, b) {
    return a*b;
}
console.log(multiplicacao());
function divisao (a, b) {
    return a/b;
}
console.log(divisao());
function modulo (a, b) {
    return a%b;
}
console.log(modulo());
function maiorDeDois (a, b) {
    if(a > b){
        return a + ' é maior que ' + b;
    }
    else if(a === b) {
        return a + ' é igual a ' + b;
    }
    else {
        return b + ' é maior que ' + a;
    }
}
console.log(maiorDeDois());
function maiorDeTres (a, b, c) {
    if(a > b && a > c) {
        return a + ' é maior que ' + b + ' e ' + c;
    }
    else if(b > a && b > c) {
        return b + ' é maior que ' + a + ' e ' + c;
    }
    else if(c > a && c > b) {
        return c + ' é maior que ' + a + ' e ' + b;
    }
    else {
        return'valores iguais';
    }
}
console.log(maiorDeTres());
function positivoNegativo (a) {
    if(a > 0){
        return 'positive';
    }
    else if(a === 0){
        return 'zero';
    }
    else{
        return 'negative';
    }
}
console.log(positivoNegativo());
function triangle (a, b, c) {
    if(a+b+c === 180 && a > 0 && b > 0 && c > 0){
        return true;
    }
    else if(a+b+c !== 180 && a > 0 && b > 0 && c > 0) {
        return false;
    }
    else{
        return 'error valor invalido'
    }
}
console.log(triangle());