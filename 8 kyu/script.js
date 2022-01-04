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


