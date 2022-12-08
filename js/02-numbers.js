const PI = 3.14;
console.log(PI);

let wallet = 0;
console.log(wallet);

wallet = 5;
console.log(wallet);

wallet = 15;
console.log(wallet);

const negative = -888;
console.log(negative);

const max = Infinity;
const min = -Infinity;

console.log(max, min);
console.log(0, 1, 2, 3.14);

console.log(NaN);

console.log('-----------');

const vienas = 1;
const antrasskaicius = 2;
const PVM = 21;

const a = 5;
const b = 7;

const suma = a + b;

console.log(a, b, suma);

const skirtumas = a - b;
console.log(a, b, skirtumas);

const dalmuoAB = a / b;
const dalmuoBA = b / a;
console.log(a, b, dalmuoAB);
console.log(a, b, dalmuoBA);

const sandauga = a * b;
console.log(a, b, sandauga);

const liekanaAB = a % b;
const liekanaBA = b % a;
console.log(a, b, liekanaAB);
console.log(a, b, liekanaBA);

const laipsnisAB = a ** b;
const laipsnisBA = b ** a;
console.log(a, b, laipsnisAB);
console.log(a, b, laipsnisBA);

console.log('-----------');

const p1 = 10;
const p2 = 2;
const p3 = 8;
const p4 = 4;

let pazymiusuma = 0;
console.log('pazymiu suma', pazymiusuma);

pazymiusuma = pazymiusuma + p1;
console.log('pazymiu suma', pazymiusuma);

pazymiusuma = pazymiusuma + p2;
console.log('pazymiu suma', pazymiusuma);

pazymiusuma = pazymiusuma + p3;
console.log('pazymiu suma', pazymiusuma);

pazymiusuma = pazymiusuma + p4;
console.log('pazymiu suma', pazymiusuma);

console.log('---------------');

const islaida1 = 10;
const islaida2 = 20;
const islaida3 = 25;
const islaida4 = 35;

let saskaita = 100;

saskaita -= islaida1;
console.log('isleidau:', islaida1, '; saskaitoje liko:', saskaita);

saskaita -= islaida2;
console.log('isleidau:', islaida2, '; saskaitoje liko:', saskaita);

saskaita -= islaida3;
console.log('isleidau:', islaida3, '; saskaitoje liko:', saskaita);

saskaita -= islaida4;
console.log('isleidau:', islaida4, '; saskaitoje liko:', saskaita);

console.log('---------------');

let index = 0;
console.log('index:', index++);
console.log('index:', index++);
console.log('index:', index++);
console.log('index:', index++);
console.log('index:', index++);
console.log('index:', index++);

let index2 = 0;
console.log('index2:', --index2);
console.log('index2:', --index2);
console.log('index2:', --index2);
console.log('index2:', --index2);
console.log('index2:', --index2);
console.log('index2:', --index2);