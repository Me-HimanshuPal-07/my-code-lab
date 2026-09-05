const college = {
    founder : "Dr. Mangal",
    director : "Mr. Jindal",
    principal : "Mrs. Rekha Gupta",
    department : {
        department01 : "Bachelors in Computer Application",
        department02 : "Bachelors in Computer Computer Science",
        department03 : "Bachelors in Fine Arts",
        department05 : "Bachelors in Commerce",
    }
}
// 1. Use `Object.keys()` on object.
console.log(Object.keys(college));
console.log(Object.keys(college.department));

// 2. Use `Object.values()`.
console.log(Object.values(college));
console.log(Object.values(college.department));

// 3. Use `Object.entries()`.
console.log(Object.entries(college));

// 4. Loop through object using `for...in`.
for (let key in college){
    console.log(key, ":", college[key]);
}

// 5. Freeze an object and test modification.
// Object.freeze(college)
// college.founder = "Dr. Mingle";

// console.log(college.founder);


// 6. Seal an object and test modification.
Object.seal(college);
college.principal = "Himanshu";
console.log(college.principal);

// 7. Create array of objects for users.
const users = [
    {id : 1, uName : "Abhi", uAge : 16, uGender : "Male" },
    {id : 2, uName : "Rohit", uAge : 20, uGender : "Male" },
    {id : 3, uName : "Raj", uAge : 18, uGender : "Male" },
    {id : 4, uName : "Dhruv", uAge : 23, uGender : "Male" },
    {id : 5, uName : "Ritik", uAge : 16, uGender : "Male" },
    {id : 6, uName : "Rohan", uAge : 19, uGender : "Male" },
];

// 8. Find user with highest age.
console.log((users.reduce((maxUser, currentUser) => {return maxUser.uAge > currentUser.uAge ? maxUser : currentUser;}, users[0])).uName);

// 9. Build a mini TODO app using arrays + objects.


// 10. Build a shopping cart system with:
// - add item
// - remove item
// - calculate total
// - quantity update