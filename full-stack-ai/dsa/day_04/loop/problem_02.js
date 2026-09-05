// Problem print 1 to n natural number .

function naturalNumbers(n) {
  // @loop approach.

  // for (let i = 1; i<=n; i++){
  //     process.stdout.write(i + " ");
  // }

  // @recursion approach.

  if (n === 1) {
    process.stdout.write("1 ");
    return;
  }
  naturalNumbers(n - 1);
  process.stdout.write(n + " ");
}

naturalNumbers(5);
