const fs = require("fs");
fs.writeFile('note.txt', 'Hello this is my node file.', (err) => {
    if(err){
        console.log("Error Aaya : ", err);
    }
    else{
        console.log("Node file successfully created.");
    }
});

console.log('Ye pehle print hoga ya baad mein?');