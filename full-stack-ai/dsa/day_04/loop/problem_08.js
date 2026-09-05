// Problem : Print All Factors Of a Number.

// function factors (n){
//     let result ="";
//     for(let i =1; i<=n; i++){
//         if(n%i==0) {result += i;}
//     }
//     return result;
// }

// console.log(factors(9));

function factors (n){
    let result ="";
    for(let i =1; i<=n/2; i++){
        if(n%i==0) {result += i+" ";}
    }
    return result+n;
}

console.log(factors(9));