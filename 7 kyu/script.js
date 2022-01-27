"use strict";

const countVowels = function (word) {
  if(typeof word !== 'string') {
    return null
  } else if (typeof word === undefined) {
    return 0
  } else {
   return word.split('').filter(i => 'aeiou'.includes(i)).length;
  }
}



console.log(
  countVowels(' ')
);