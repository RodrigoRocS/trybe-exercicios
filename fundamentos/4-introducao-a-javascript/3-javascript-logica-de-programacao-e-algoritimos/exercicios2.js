
// let fatorial10 = 1;

// for(index = 10; index > 0; index -= 1){
//     fatorial10 *= index;
// }
// console.log(fatorial10);

// --------------------------------------------------------

// let word = 'cachorro';
// let reverseword ='';

// for(index = word.length-1; index >= 0; index -= 1){
//     reverseword += word[index];
// }
// console.log(reverseword);

// --------------------------------------------------------

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let palavra = array[0];

// for(let index = 0; index < array.length; index += 1){
//   if(array[index].length < palavra.length){
//     palavra = array[index];
//   }
// }
// console.log(palavra);


let array = ['java', 'javascript', 'python', 'html', 'css'];
let palavra = array[0];

for(index = 0; index < array.length; index += 1){
    if(palavra.length < array[index].length){
    palavra = array[index];
    }
}
console.log(palavra);