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

// const encode = (param) => {
//   const arraySplit = param.split("");
//   let arrayCod = "";
//   for (let index = 0; index < arraySplit.length; index += 1) {
//     if (arraySplit[index] === "a") {
//       arrayCod += "1";
//     } else if (arraySplit[index] === "e") {
//       arrayCod += "2";
//     } else if (arraySplit[index] === "i") {
//       arrayCod += "3";
//     } else if (arraySplit[index] === "o") {
//       arrayCod += "4";
//     } else if (arraySplit[index] === "u") {
//       arrayCod += "5";
//     } else {
//       arrayCod += arraySplit[index];
//     }
//   }
//   return arrayCod;
// };
// console.log(encode("how are you today?"));

// ------------------------BUG-----------------------------------
// Segunda parte do requisito:

// const decode = (param) => {
//     return param.replaceAll('1', 'a').replaceAll('2', 'e').replaceAll('3', 'i').replaceAll('4', 'o').replaceAll('5', 'u');
// }
// console.log(decode('h4w 1r2 y45 t4d1y?'));

// 10 REQUISITO--------------------------------------------------

// const techList = (tech, personName) => {
//     const techSort = tech.sort();
//     const techObj = [];
//     if(tech.length === 0) {
//         return [];
//     }
//     for(let index = 0; index < tech.length; index += 1) {
//         techObj.push({tech: techSort[index], name: personName})

//     }
//     // return techObj || []; -----> substitui o if.
//     return techObj;
// }
// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// 11 REQUISITO-BONUS---------------------------------------------

// const generatePhoneNumber = (param) => {
//   if (param.length !== 11) {
//     return "Array com tamanho incorreto";
//   }

//   for (let index = 0; index < param.length; index += 1) {
//     if (param[index] < 0 || param[index] > 9) {
//       return "não é possível gerar um número de telefone com esses valores";
//     }
//   }
//   let counter = 0;
//   for (let index = 0; index < param.length; index += 1) {
//     for (let index2 = index + 1; index2 < param.length; index2 += 1) {
//       if (param[index] === param[index2]) {
//         counter += 1;
//       }
//     }
//     if (counter >= 3) {
//       return "não é possível gerar um número de telefone com esses valores";
//     }
//   }
//   return `(${param[0]}${param[1]}) ${param[2]}${param[3]}${param[4]}${param[5]}${param[6]}-${param[7]}${param[8]}${param[9]}${param[10]}.`;
// };
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
