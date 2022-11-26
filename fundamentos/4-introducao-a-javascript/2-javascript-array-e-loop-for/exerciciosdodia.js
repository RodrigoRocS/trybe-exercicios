

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for(let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }

// let somaarray = 0;
// for(let index = 0; index < numbers.length; index += 1) {
//     somaarray = somaarray + numbers[index];
// }
// console.log(somaarray);

// let somaarray = 0;
// for(let index = 0; index < numbers.length; index += 1) {
//     somaarray += numbers[index]
// }
// console.log(somaarray / numbers.length);
// let mediaArit = somaarray / numbers.length;

// if (mediaArit > 20) {
//     console.log("valor maior que 20");
// }
// else {
//     console.log("valor menor ou igual a 20");
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let higher = numbers[0];


// for(let index = 0; index < numbers.length; index += 1){
//     if(higher < numbers[index]){
//         higher = numbers[index];
//     }
// }
// console.log(higher);

// let numbers = [10, 4, 30, 190, 70, 8, 100, 2, 350, 270];
//     let oddEvenNumbers = 0;
//     for(let index = 0; index < numbers.length; index += 1){
//         if(numbers[index] % 2 !== 0){
//             oddEvenNumbers += 1;
//         }
//     }
//         if(oddEvenNumbers > 0){
//             console.log(oddEvenNumbers);
//         }
//         else{
//     console.log('nenhum valor ímpar encontrado');
// }

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let lower = numbers[0];
// for(let index = 1; index < numbers.length; index += 1){
//     if(lower > numbers[index]){
//     lower = numbers[index];
//     }
// }
// console.log(lower);

let number = [];

for(index = 1; index <= 25; index += 1){
    number.push(index); 
}
for(index2 = 0; index2 < number.length; index2 += 1) {
    console.log(number[index2] / 2);
}
// console.log(number);