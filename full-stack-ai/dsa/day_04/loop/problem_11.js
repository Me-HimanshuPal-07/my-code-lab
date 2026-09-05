function isStrongNumber(n) {
    if(n>=1){
        let original = n;
    let result = 0;
    for (let temp = n; (n !== 0); n = Math.floor(n / 10)) {
        let digit = n % 10;
        let factorial = 1;
        if (digit > 1) {
            for (let j = 1; j <= digit; j++) {
                factorial *= j;
            }
        }

        result += factorial;
    }
    return result === original ? "Yes" : "No";
    }
    return "Invalid Input !!";
}

console.log(isStrongNumber(145));
console.log(isStrongNumber(-145));
console.log(isStrongNumber(123));