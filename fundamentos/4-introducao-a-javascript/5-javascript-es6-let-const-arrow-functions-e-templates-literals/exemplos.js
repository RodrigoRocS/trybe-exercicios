
// let a = 10

// if ( a < 10) {
//   console.log("Quase lá...");
// } else if ( a > 10) {
//   console.log("Incrível!");
// } else {
//   console.log("Você é 10");
// }


function factorial (n){
  let fator = n;
  for (let index = n - 1; index >= 1; index -= 1){
      fator *= index;
  }
  return fator;
}
  

console.log(factorial(4));

