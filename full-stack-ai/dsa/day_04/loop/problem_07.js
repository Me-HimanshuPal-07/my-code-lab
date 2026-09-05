// Problem : Print the sum of all even and odd numbers in range separately.

function sumOddEven (a, b){
    if(a>b){
        [a,b] = [b, a];
    }
    let even = 0;
    let odd = 0;
    for(let i = a; i <=b; i++){
        if(i%2==0)even += i;
        else odd +=i;
    }
    return `
    Sum OF Even = ${even}
    Sum of Odd = ${odd}`;
}

console.log(sumOddEven(10, 0));