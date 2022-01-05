"use strict";

// 1) return a suit
// You get any card as an argument. Your task is to return a suit of this card.

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'
// -----------------------------------------------------------

/*
const whichSuit = function (card) {
  const s = {
    "♣": "clubs",
    "♦": "diamonds",
    "♥": "hearts",
    "♠": "spades",
  };

  // return s[card.charAt(card.length -1)]
  // return s[card[card.length -1]]
  return s[card.slice(1)]
};
*/

/*
const whichSuit2 = function(card) {
  return {
    "♣": "clubs",
    "♦": "diamonds",
    "♥": "hearts",
    "♠": "spades",
  }[card.slice(1)]
}
*/

/*
const whichSuit3 = function (card) {
  if (card.includes("♣")) return "clubs";
  if (card.includes("♦")) return "diamonds";
  if (card.includes("♥")) return "hearts";
  if (card.includes("♠")) return "spades";
}
*/

/*
const whichSuit4 = (c) => 
({
  "♣": "clubs",
  "♦": "diamonds",
  "♥": "hearts",
  "♠": "spades",
}[c.slice(1)])


console.log(
  whichSuit4('3♣')
);
*/

// ###############################################################################################

// 2)
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
// -----------------------------------------------------------

/*
const feast = function (dish, name) {
  return (
    dish.slice(0, 1) === name.slice(0, 1) && dish.slice(-1) === name.slice(-1)
  );
};
*/

// const feast2 = (dish, name) => dish.slice(0, 1) === name.slice(0, 1) && dish.slice(-1) === name.slice(-1);

/*
const feast3 = (dish, name) => dish[0] === name[0] && dish[dish.length -1] === name[name.length -1];

console.log(feast3("great blue heron", "garlic naan"));
*/

// ###############################################################################################

// 3)
// Your goal is to return multiplication table for number that is always an integer from 1 to 10.
// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// -----------------------------------------------------------

/*
const multiTable = function (number) {
  let table = "";
  for (let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number} \n`;
  }
  return table;
};

console.log(multiTable(7));
*/

// ###############################################################################################
// 4)

// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.
// -----------------------------------------------------------

// const upperCase = (word) => word[0].toUpperCase() + word.slice(1);

// const upperCase2 = (word) =>
//   word.replace(word.charAt(0), word.charAt(0).toUpperCase());

// const upperCase3 = (word) => word.replace(word[0], word[0].toUpperCase());

// console.log(upperCase3("hallo"));

// ###############################################################################################
// 5)

// It is given a name like: John Hammod
// Your code will show the full name o and a truncated version of the name as an array.
//  Take the first letter of the first name and the first latter of the second name and the result must be like this:
//  ['John Hammod', JH]
// -----------------------------------------------------------

/*
const name = 'John Hammod';

const truncName = function (name) {
  let result = [];
  const splittedName = name.split(" ");
  const truncedName = splittedName[0][0].toUpperCase() + splittedName[1][0].toUpperCase();
  result.push(name, truncedName);
  return result;
}

console.log(
  truncName('John Hammod')
);
*/

// ###############################################################################################
// 7)

// Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

// To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().
// -----------------------------------------------------------

const compare = (number, string) => number == string;
const compare2 = (number, string) => number === string;


console.log(compare(5, "5"));
console.log(compare2(5, "5"));

