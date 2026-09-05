// Problem print n to 1 natural number .

function naturalNumbers(n) {
  // @loop approach.

//   for (let i = n; i>=1; i--){
//       process.stdout.write(i + " ");
//   }

  // @recursion approach.

  if (n === 1) {
    process.stdout.write("1 ");
    return;
  }
  process.stdout.write(n + " ");
naturalNumbers(n - 1);
}

naturalNumbers(10);