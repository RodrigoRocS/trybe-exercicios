//exercise.js
// let fruits = [3, 4, 1, 1, 1];
// let sum = 0;

// for(index = 0; index < fruits.length; index += 1) {
//     sum += fruits[index];
// }

// if(sum > 15) {
//     console.log(sum);
// }
// else {
//     console.log('valor menor que 16');
// }


// const n = 100;

// let resultado = 0;
// for (let index = 1; index <= n; index += 1) {
//   resultado += index
// };
// console.log(resultado)


// let resultado = 0;
// for(index = 100; index > 0; index -= 5) {
//  resultado += 1
//  console.log(index);
// }

// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é: X
// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
// 3 - Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 
// 4 - Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
// Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
// Bônus: Crie a condição utilizando operador ternário.
// 5 - Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

// let sum = 0;

// for(index = 1; index <= 50; index += 1){
//     sum += index;
// }
// console.log(sum);


// let divisornumber = [];

// for(index = 2; index <= 150 ; index += 1){
//     if(index % 3 === 0){
//         divisornumber.push(index);
//     }
// }
// console.log(divisornumber);

// let n = 5;
// let aster = '*';
// let linha = '';

// for(index = 0; index < n; index += 1){
//   linha = linha + aster;
 
// }
// for(index = 0; index < n; index += 1){
//     console.log(linha);
// }

// ----------------------------------------------------------

// let array = [10, 5, 80, 2, 35, 7, 99, 135246];
// let number = 2;


// for(index = 0; index < array.length; index += 1){
//     if(array[index] === number)
// }
// console.log();

// ------------------------------------------------------------

// let oddnumbers = [];

// for(index = 1; index <= 50; index += 1){
//     if(index % 2 === 1){
//     oddnumbers.push(index);
// }
// }
// console.log(oddnumbers);

// -------------------------------------------------------------

let valorInicial = 30;
let valorFinal = 354546;
let counter = 0;

for(index = valorInicial; index <= valorFinal; index += 1){
    (if index % 3 === 0){
        counter += 1;
    }
}
if(counter > 50){
    console.log('Há ' + counter + ' ou mais números divisíveis por 3');
}
else{
    console.log('sequência muito pequena.')
}
    