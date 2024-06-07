// STRINGS

// firstVariable = "hello world";
// firstVariable = 1;
// let secondVariable = firstVariable;

// secondVariable = "any string";

// console.log(firstVariable); //1

// const yourName = "Ariel";
// let hello = `Hello, my name is ${yourName}`
// console.log(hello);

//BOOLEANS

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16; // -10, 5 = true, but 0 - false
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' == 'Name');

//FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false === false)
// console.log(e == 'Kevin');
// console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a == a || d); // note: the answer is a simple arithmetic equation, not something "weird" console.log(48 __ '48');

//the Farm
let animal = "cow";

const moo = (a) => {
  return a.toLowerCase === "cow" ? "mooooo" : "hey, that's not a cow";
};

// console.log(moo(animal));
//Driver's Ed

const personAge = 20;

const personAgeMessage =
  personAge <= 16 ? "Sorry, you're too young." : "Here are the keys!";

// console.log("personAgeMessage", personAgeMessage);

//LOOPS

//The Basics

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 10; i <= 400; i++) {
//   console.log(i);
// }

// for (let i = 12; i <= 4000; i = i + 3) {
//   console.log(i);
// }

//Get Even

// for (let i = 1; i <= 100; i++) {
//   console.log(i % 2 == 0 ? i + " <-- is an even number" : i);
// }

//Give Me 5

// for (let i = 0; i <= 100; i++) {
//   console.log(i % 5 == 0 ? `I found a ${i} High five!` : `I found a ${i}`);
// }

//Savings Account

// let bank_account = 0;

// for (let i = 1; i <= 100; i++) {
//   bank_account = bank_account + i * 2;
// }

// console.log(bank_account);

//ARRAYS & CONTROL FLOW

const arr = ["", "", ""];

const randomThings = [1, 10, "Hello", true];

randomThings[0];

randomThings[2] = "World";

//D. Change values



//OBJECTS

// let longest = array.reduce( (firstEl, secondEl) => {
//         //if the first el is greater than the second el return firstEl
//         return firstEl.length > secondEl.length ? firstEl : secondEl;
//     }
// );

// console.log(longest)
