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

const feast3 = (dish, name) => dish[0] === name[0] && dish[dish.length -1] === name[name.length -1];


console.log(feast3("great blue heron", "garlic naan"));
