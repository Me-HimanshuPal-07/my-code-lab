// Problem : Prime Number

// function checkPrime (n){
//     if(n<=1) return "Not Prime";
//     for(let i=2; i<n/2; i++){
//         if(n%i==0)return "Not Prime";
//     }
//     return "Prime";
// }

// console.log(checkPrime(7));
// console.log(checkPrime(9));
// console.log(checkPrime(19));
// console.log(checkPrime(0));
// console.log(checkPrime(1));
// console.log(checkPrime(-19));

// Efficient way to find a number is prime or not

function checkPrime(n) {
  let isPrime = true;
  if (n <= 1) isPrime = false;
  else if (n === 2) isPrime = true;
  else if (n % 2 === 0) isPrime = false;
  else {
    for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
      if (n % i == 0) {
        isPrime = false;
        break;
      }
    }
  }
  return isPrime ? "Prime" : "Not Prime";
}

console.log(checkPrime(7));
console.log(checkPrime(9));
console.log(checkPrime(19));
console.log(checkPrime(0));
console.log(checkPrime(1));
console.log(checkPrime(-19));
