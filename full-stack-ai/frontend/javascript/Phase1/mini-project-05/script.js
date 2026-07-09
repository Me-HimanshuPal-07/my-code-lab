let str = prompt("Enter word : ").toLocaleLowerCase();
let vovels = "aeiou";
let count = 0;
for(let countVovel of str){
    if (vovels.includes(countVovel)) count++;
}
console.log(`Number of vovels in ${str} : ${count}`);
