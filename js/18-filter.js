console.clear();
/*
FILTER - palieka tik norimas reiksmes
*/

const numbers = [-1, 5, -7, 3.5, 10];
const negativeNumbers = [];

for (const number of numbers) {
    if (number < 0) {
        negativeNumbers.push(number);
    }
}

console.log(numbers);
console.log(negativeNumbers);

const positiveNumbers = numbers.filter(n => n > 0);
console.log(positiveNumbers);

const students = [
    { name: 'Petras', age: 99, isMarried: true },
    { name: 'Maryte', age: 88, isMarried: false },
    { name: 'Jonas', age: 77, isMarried: false },
    { name: 'Ona', age: 66, isMarried: true },
    { name: 'Simon', age: 7, isMarried: false },
    { name: 'Itoleta', age: 17, isMarried: true },
    { name: 'Alas', age: 47, isMarried: true },
    { name: 'Eliza', age: 2, isMarried: false },
];

const pilnameciai = students.filter(s => s.age >= 18);
console.log(pilnameciai);

function isMarriedAndAdult(student) {
    if (student.age < 18) {
        return false;
    }
    if (!student.isMarried) {
        return false;
    }
    return true;
}

function isMarriedAndAdult2(student) {
    if (student.age < 18 || !student.isMarried) {
        return false;
    }
    return true;
}

function isMarriedAndAdult3(student) {
    if (student.age >= 18 && student.isMarried) {
        return true;
    }
    return false;
}

function isMarriedAndAdult4(student) {
    return student.age >= 18 && student.isMarried;
}

const isMarriedAndAdult5 = s => s.age >= 18 && s.isMarried;

const vedePilnameciai = students.filter(isMarriedAndAdult);
console.log(vedePilnameciai);

const vedePilnameciai2 = students.filter(isMarriedAndAdult2);
console.log(vedePilnameciai2);

const vedePilnameciai3 = students.filter(isMarriedAndAdult3);
console.log(vedePilnameciai3);

const vedePilnameciai4 = students.filter(isMarriedAndAdult4);
console.log(vedePilnameciai4);

const vedePilnameciai5 = students.filter(isMarriedAndAdult5);
console.log(vedePilnameciai5);

const onlyNamesOfMarried = students
    .filter(s => s.isMarried)
    .filter(s => s.age >= 18)
    .map(s => s.name);
console.log(onlyNamesOfMarried);

const onlyMarriedCount = students.filter(s => s.isMarried).length;
console.log(onlyMarriedCount);

const onlyFans = [];
for (const student of students) {
    if (student.isMarried && student.age >= 18) {
        onlyFans.push(student.name);
    }
}

console.log(onlyFans);