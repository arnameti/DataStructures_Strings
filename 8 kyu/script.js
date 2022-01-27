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

/*
const compare = (number, string) => number == string;
const compare2 = (number, string) => number === string;


console.log(compare(5, "5"));
console.log(compare2(5, "5"));

*/

// ###############################################################################################
// 8)
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
// -----------------------------------------------------------

/*
const ideas = ["good", "bad", "good", "bad"];


const checkIdea = function (arr) {
  let goodIdeas = [];
  for (let good of arr) {
    if (good === 'good') {
      goodIdeas.push(good);
    }
  }
  if (goodIdeas.length === 0) {
    return "Fail!";
  } else if (goodIdeas.length > 2) {
    return "I smell a series!";
  } else {
    return "Publish!";
  }
};

console.log(checkIdea(ideas));
*/

// ###############################################################################################
// 9)
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.
// -----------------------------------------------------------

/*
const arr = [5, "6", 3, "2", 7, "9"];
let sum = 0;

const sumArr = function (arr) {
  for (let i of arr) {
    sum += parseInt(i);
  }
  return sum;
};

console.log(sumArr(arr));
*/

// ###############################################################################################
// 10)
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// -----------------------------------------------------------

/*
let stringOfDigits = "912837465";
const replaceDigits = function (stringOfDigits) {
  return stringOfDigits.split("").map((i) => (i < 5 ? 0 : 1)).join("");
};

*/

// ###############################################################################################
// 11)
<<<<<<< HEAD
// Create a function called shortcut to remove all the lowercase vowels in a given string.

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// -----------------------------------------------------------

/*
const shortcut4 = (str) =>
  str
    .split("")
    .filter((e) => ["a", "e", "i", "o", "u"].indexOf(e) === -1)
    .join("");

console.log(shortcut4("hello"));
*/

// ###############################################################################################
// 13)
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// -----------------------------------------------------------

/*
const convertName2 = (name) =>
  name
    .split(" ")
    .map((e) => e[0].toUpperCase())
    .join(".");
console.log(convertName2("Arnor Ameti"));
*/

// ###############################################################################################
// 14)
// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
// -----------------------------------------------------------

/*
const reverseString = function (string) {
  let arr = [];
  for (let i = string.length - 1; i >= 0; i--) {
    arr.push(string[i]);
  }
  return arr.join('');
};
console.log(reverseString("hallo"));
// --------------------

const reverseString2 = function (string) {
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
};
console.log(reverseString2("hallo"));
// --------------------

const reverseString3 = function (string) {
  return string.split("").reverse().join("");
};
console.log(reverseString3("hallo"));
// --------------------

const reverseString4 = (str) => str.split("").reverse().join("");
console.log(reverseString4("hallo"));
// --------------------

const reverseString5 = function(str) {
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString5("hallo"));
// --------------------

const reverseString6 = function(str) {
  return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString6("hallo"));
// --------------------
*/
=======
// -----------------------------------------------------------

// Create a function called shortcut to remove all the lowercase vowels in a given string.

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
>>>>>>> 782beebe319fce4b3a1adbd7bc265db95c1c0d44

// ###############################################################################################
// 15)
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
// -----------------------------------------------------------

/*
const removeChar = function (string) {
  return string.slice(1, -1);
};
console.log(removeChar('hallo'));

const removeChar2 = str => str.slice(1, -1);
console.log(removeChar2('hallo'));
*/

<<<<<<< HEAD
// ###############################################################################################
// 16)
// You are given a string containing a sequence of character sequences separated by commas.
// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

/*
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"

""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
*/
// -----------------------------------------------------------

/*
const string = "a,b,c,d";

const changeString = function (string) {
  const noSpaces = string
    .split(",")
    .filter((e) => e !== "")
    .join(",");
  if (noSpaces.length <= 4 || undefined) {
    return "NULL";
  } else {
    return noSpaces.slice(1, -1).split(",").join(" ");
  }
};

console.log(changeString(string));
*/
// ###############################################################################################
// 17)
// Write a function that returns a string in which firstname is swapped with last name.
// nameShuffler('John McClane'); => "McClane John"
// -----------------------------------------------------------

/*
const swapName = function (name) {
  return [name.split(' ')[1], name.split(' ')[0]].join(' ');
}
console.log(swapName('Arnor Ameti'));
// --------------------

const swapName2 = function (name) {
  const splittedName = name.split(" ");
  return `${splittedName[1]} ${splittedName[0]}`;
};
console.log(swapName2("Arnor Ameti"));
// --------------------

const swapName3 = (name) => name.split(" ").reverse().join(" ");
console.log(swapName2("Arnor Ameti"));
*/
// ###############################################################################################
// 18)
// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
// the string should start with a 1.
// a string with size 6 should return :'101010'.
// with size 4 should return : '1010'.
// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.
// -----------------------------------------------------------

/*
const printBinary = function (number) {
  let binary = "";
  for (let i = 1; i <= number; i++) {
    if (i % 2 !== 0) {
      binary += 1;
    } else {
      binary += 0;
    }
  }
  return binary;
};
// --------------------
console.log(printBinary(6));

const printBinary2 = function (number) {
  let binary = "";
  for (let i = 1; i <= number; i++) i % 2 !== 0 ? (binary += 1) : (binary += 0);
  return binary;
};
// --------------------
console.log(printBinary2(6));

const printBinary3 = (x) => "".padStart(x, "10");
console.log(printBinary2(6));
*/

// ###############################################################################################
// 19)
// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
// -----------------------------------------------------------

/*
const uefaEuro20162 = function (arr1, arr2) {
  let string = '';
  if (arr2[0] === arr2[1]) {
    return string = `At match ${arr1[0]} - ${arr1[1]}, teams played draw`;
  } else if (arr2[0] > arr2[1] ) {
    return string = `At match ${arr1[0]} - ${arr1[1]}, ${arr1[0]} won`;
  } else {
    return `At match ${arr1[0]} - ${arr1[1]}, ${arr1[1]} won`;
  }
}
console.log(uefaEuro20162(["Germany", "Ukraine"], [2, 0]));
console.log(uefaEuro20162(["Belgium", "Italy"], [0, 2]));
console.log(uefaEuro20162(["Portugal", "Iceland"], [1, 1]));
// --------------------

const uefaEuro20163 = (arr1, arr2) => `At match ${arr1[0]} - ${arr1[1]}, ${arr2[0] === arr2[1] ? 'teams played draw.' : (arr2[0] > arr2[1] ? arr1[0] : arr1[1]) + ' won!'}`

console.log(uefaEuro20163(["Germany", "Ukraine"], [2, 0]));
console.log(uefaEuro20163(["Belgium", "Italy"], [0, 2]));
console.log(uefaEuro20163(["Portugal", "Iceland"], [1, 1]));
*/
=======
const shortcut4 = (str) =>
  str
    .split("")
    .filter((e) => ["a", "e", "i", "o", "u"].indexOf(e) === -1)
    .join("");

console.log(shortcut4("hello"));
>>>>>>> 782beebe319fce4b3a1adbd7bc265db95c1c0d44

//

