//  1 REQUISITO
// const compareTrue =(name1, name2) => {
//     if(name1 === 'girafa' && name2 === 'elefante'){
//         return true
//     }
//     else if(name1 === 'macaco' && name2 === 'elefante'){
//         return false
//     }
// }
// console.log(compareTrue('girafa', 'elefante'));

// 2 REQUISITO-------------------------------------------------

// const splitSentence = (name) => name.split(' ');
    
// console.log(splitSentence(''));

// 3 REQUISITO--------------------------------------------------

// const concatName = (array) => `${array.pop()},${array.shift()}`;
// console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// 4 REQUISITO--------------------------------------------------

// const footballPoints = (wins, ties) =>`${wins*3 + ties} pontos`;
// console.log(footballPoints(14, 8));

// 5 REQUISITO--------------------------------------------------

// function highestCount (array) {
//     let counter = 0;
//     let biggestNumber = 0;
//     for (let index = 0; index < array.length; index += 1 ) {
//         if(biggestNumber < array[index]){
//             biggestNumber = array[index];
//         }
//     }
//     for (let index = 0; index < array.length; index += 1 ) {
//         if (biggestNumber === array[index]) {
//             counter += 1;
//         }
//     }
//     return counter;
// }
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7, 9, 8, 7, 9]));
// -----------------------------BUG------------------------------
// const highestCount = (array) => {
//     let counter = 0;
//     const biggestNumber = Math.max(...array);
//     for (let index = 0; index < array.length; index += 1 ) {
//         if (biggestNumber === array[index]) {
//             counter += 1;
//         }
//     }
//     return counter;
// }
// console.log(highestCount([9, 1, 2, 3, 9, 9, 7, 9, 8, 7, 9]));

// 6 REQUISITO---------------------------------------------------

// const calcTriangleArea = (base, height) => (base * height) / 2;
// const calcRectangleArea = (base, height) => base * height;
// const calcAllAreas = (base, height, form) => {
//     if (form === 'triângulo'){
//         return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
//     }
//     else if(form === 'retângulo') {
//         return `O valor de área do retângulo é de: ${calcRectangleArea(base, height)}`;
//     }
//     else {
//         return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida.'
//     }
// }
// console.log(calcAllAreas(10, 50, 'triângulo'));

// 7 REQUISITO---------------------------------------------------

// Math.abs = realiza a operação e retorna o valor sem sinal(valor absoluto).

// const catAndMouse = (mouse, cat1, cat2) => {
//     const gato1 = Math.abs(cat1 - mouse);
//     const gato2 = Math.abs(cat2 - mouse);
    
//     if(gato1 < gato2) {
//         return 'cat1';
//     }
//     else if(gato1 === gato2) {
//         return 'os gatos trombam e o rato foge';
//     }
//     else {
//         return 'cat2';
//     }
// }
// console.log(catAndMouse(5, 7, 8));

// 8 REQUISITO---------------------------------------------------


// const fizzBuzz = (array) => {
//     let arrayString = [];
//     for (let index = 0; index < array.length; index += 1) {
//         if(array[index] % 3 === 0 && array[index] % 5 === 0) {
//             arrayString.push('fizzBuzz');
//         }
//         else if(array[index] % 5 === 0) {
//             arrayString.push('buzz');
//         }
//         else if(array[index] % 3 === 0) {
//             arrayString.push('fizz');
//         }
//         else {
//             arrayString.push('bug!');
//         }
//     }
// return arrayString;
// }
// console.log(fizzBuzz([9, 25]));

// 9 REQUISITO---------------------------------------------------

