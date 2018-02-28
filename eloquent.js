/*Minimum
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now.
Write a function min that takes two arguments and returns their minimum.
*/
let min = function(x, y) {
    return (x <= y) ? x : y;
};
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

/*Recursion
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two.
Here’s another way to define whether a positive whole number is even or odd:
*/
function isEven(n) {
    if (n === 0) {
      return true;
    } else if (n === 1) {
      return false;
    } else {
      return n > 0 ? isEven(n-2) : isEven(n+2);
    }
  }

/*Bean counting
You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character
(for example, "b"). The first character has position zero, which causes the last one to be found at position string.length - 1. In other words,
a two-character string has length 2, and its characters have positions 0 and 1.
*/
function countBs(str) {
    return countChar(str, 'B');
  }
  
  function countChar(str, chr) {
    var counter = 0
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) === chr) {counter++;}
    }
    return counter;
  }