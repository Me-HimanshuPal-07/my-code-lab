// 1. Create object for a student.
const student = {
    fullName : "Himanshu Pal",
    course : "B.C.A",
    college : "srgc",
    Cgpa : 7.7
};

// 2. Access properties using dot notation.
console.log(student.fullName);
console.log(student.course);
console.log(student.college);
console.log(student.Cgpa);

// 3. Access properties using bracket notation.

console.log(student["course"]);

// 4. Add new property dynamically.
student.section = "A";
console.log(student);

// 5. Update existing property.
student.Cgpa = "8";
console.log(student);

// 6. Delete a property.
delete student.section;
console.log(student);

// 7. Create object method.
const rohit = {
    maths : 40,
    science : 50,
    computer : 90,
    physics : 38,
    totalMarks (){
        return Object.values(this).filter( val => typeof val === "number").reduce((sum, current) => sum + current, 0);
    },
    totalSubject (){
        return Object.keys(this).length;
    }

};

console.log(rohit.totalMarks());

// 8. Use `this` keyword inside method.

rohit.percentage = function () {
    return this.totalMarks() / this.totalSubject();
};

console.log(rohit.percentage());

// 9. Create nested object.

const months = {
    month1 : "January",
    month2 : "Feburary",
    month3 : "March",
    quater2 : {
        month4 : "April",
        month5 : "May"
    }
};

// 10. Access deeply nested property.
console.log(months.quater2.month4);

// 11. Destructure object properties.
let {month1, month2, month3, quater2 : { month4, month5}} = months;
console.log(month1, month4);

// 12. Rename variables while destructuring.
let {month1 : day01, month2 : day02, quater2 : {month4 : day04} } = months;
console.log(day01, day02, day04);

// 13. Add default values during destructuring.
let { country = "India"} = months;
console.log(country);

// 14. Copy object using spread operator.
const studentProfile = {
    sName : "Himanshu Pal",
    sAge : 20,
};

const copy = {... studentProfile};
console.log(copy);



// 15. Merge two objects.

const sProfession = {
    role : "software engineer"
};

const completeProfile = {... studentProfile, ... sProfession };
console.log(completeProfile);