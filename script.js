'use strict';

// const currentYear = 2021;

// function calcAge(birthYear) {
//   const currentAge = currentYear - birthYear;
//   function printAge() {
//     let output = `${firstName}. You are ${currentAge}, born in ${birthYear}.`;
//     console.log(output);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const firstName = 'Hannah';
//       const str = `Oh, and you're a millenial too, ${firstName}. 🤦‍♂️`;
//       console.log(str);
//       var millenial = true;
//       //function block scoped
//       function add(a, b) {
//         return a + b;
//       }
//       console.log(add(3, 5));
//       output = `Inner Output.`;
//     }
//     console.log(add(3, 5));

//     // outside of block scope
//     //console.log(str);
//     console.log(millenial);
//     console.log(output);
//   }
//   printAge();
//   return currentAge;
// }

// const firstName = 'Steve';
// calcAge(1991);

// //can't be referenced in this scope
// console.log(currentAge);
// printAge();

// //variable hoisting
// console.log(i);
// // console.log(profession);
// // console.log(age);

// var i = `Steve`;
// let profession = `IT Tech`;
// const age = 30;

// // functions

// console.log(addDeclaration(4, 6));

// //cannot access before initialization
// //onsole.log(addExpression(4, 2));

// //undefined
// //console.log(addArrow(3, 6));

// function addDeclaration(x, y) {
//   return x + y;
// }

// const addExpression = function (x, y) {
//   return x + y;
// };

// var addArrow = (x, y) => x + y;

// // example of bad hoisting

// if (!numberProd) deleteCart();

// var numberProd = 10;

// function deleteCart() {
//   console.log(`All items deleted.`);
// }

// //let/const doesn't create property in window object
// //type window in browswer console

// var x = 1;
// let y = 3;
// const z = 12;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2021 - birthYear);
//   console.log(this);
// };
// calcAge(1989);

// const calcAgeArrow = birthYear => {
//   console.log(2021 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1987);

// const steve = {
//   year: 1991,
//   firstName: `Steve`,
//   calcAge: function () {
//     console.log(this);
//     console.log(2021 - this.year);
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// steve.calcAge();

// const matilda = {
//   year: 2002,
// };

// //method borrowing
// matilda.calcAge = steve.calcAge;
// matilda.calcAge();

// //taking function from object
// //can't call this.year because this will be undefined
// const f = steve.calcAge;
// f();

// var firstName = `Matilda`;

// const steve = {
//   // object literal is not codeblock
//   year: 1991,
//   firstName: `Steve`,
//   calcAge: function () {
//     console.log(this);
//     console.log(2021 - this.year);

//     ////Old Solution
//     // const self = this; // self or that
//     // const isGenZ = function () {
//     //   console.log(self.year >= 1997 && self.year <= 2012);
//     // };
//     // const isMillenial = function () {
//     //   console.log(this.year >= 1981 && this.year <= 1996);
//     // };
//     // isGenZ();
//     // // regular function call so this is undefined
//     // isMillenial();

//     //Arrow Solution
//     const isMillenial = () => {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     //arrow function inherits scope of parent function
//     isMillenial();
//   },
//   //belongs to window objeect
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
//   greeting: function () {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// steve.greet();
// console.log(this.firstName);

// steve.calcAge();
// steve.greeting();

// //arguments keyword
// const addExpression = function (x, y) {
//   console.log(arguments);
//   return x + y;
// };

// addExpression(3, 5);
// //more arguments than defined
// addExpression(2, 5, 3, 4);

// //arguments keyword doesn't work in arrow function
// var addArrow = (x, y) => {
//   console.log(arguments);
//   return x + y;
// };

// addArrow(3, 5, 2);

// let age = 30;
// let oldBoy = age;
// age = 31;

// console.log(age);
// console.log(oldBoy);

// const me = {
//   name: `Steve`,
//   age: 24,
// };

// const sam = me;

// sam.age = 26;

// console.log(me.age);
// console.log(sam.age);

// console.log(`Friend: `, sam);
// console.log(`Me `, me);

let lastName = `Williams`;
let oldLastNAme = lastName;
lastName = `Johnson`;
console.log(lastName, oldLastNAme);

const tara = {
  firstName: `Tara`,
  lastName: `LeShaun`,
  age: 23,
};

const marriedTara = tara;
marriedTara.lastName = `Tony`;
console.log(`Before Marriage:`, tara);
console.log(`After Marriage:`, marriedTara);

// //cannot change constant to new object
// marriedTara = {};

const larry = {
  firstName: `Larry`,
  lastName: `LeShaun`,
  age: 23,
  family: [`Tanesha`, `Hannah`],
};

//copies object into another
//only works on first level (objects inside objects)
const mark = Object.assign({}, larry);
mark.firstName = `Mark`;

// family object is not cloned, points to same object

mark.family.push(`Tom`);
mark.family.push(`Yao`);

console.log(`Larry`, larry);
console.log(`Mark`, mark);
