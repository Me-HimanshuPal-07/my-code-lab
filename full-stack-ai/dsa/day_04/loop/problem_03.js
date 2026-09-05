// Problem : factorial of n

function factorial(n) {
  //Recursion approach
  // if (n === 0) {
  //         return 1;
  //     }
  // return n * factorial(n - 1);

  //Loop Approach
  let result = 1;
  for(let i= 1; i<=n; i++){
    result*= i;
  }
  return result;
}

console.log(factorial(5));
