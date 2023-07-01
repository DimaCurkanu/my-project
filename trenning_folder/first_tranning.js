 /// -- https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript ///
 function digitize (n) {
    // return n.toString().split('').reverse().map(Number);  -- первый вариант
    let arr = [];
    for (let i = n.toString().length-1; i >= 0; i--) {
      arr.push(+n.toString()[i])
    }
    return arr;
  }
  console.log(digitize(54321));
  
  /// https://www.codewars.com/kata/58e0bd6a79716b7fcf0013b1/train/javascript
  
  function getAges(sum,difference){
    let age = [];
     let age1 = (sum + difference) / 2;
     let age2 = (sum - age1);
  age.push(age1);
  age.push(age2);
  
  return age
  
  };
  
  console.log(getAges( 24, 4));
  
  //// от Стена
  function generate(seed) {
    var private = seed;
    return function (param) {
      private += seed;
      return private + param;
    };
  }
  
  var a = generate(1);
  var b = generate(2);
  
  a(1) + a(2) + b(3) + b(4);
  //////////////////////

//   A variation of determining leap years, assuming only integers are used and years can be negative and positive.

// Write a function which will return the days in the year and the year entered in a string. For example:

// yearDays(2000) returns "2000 has 366 days"
// There are a few assumptions we will accept the year 0, even though there is no year 0 in the Gregorian Calendar.

// Also the basic rule for validating a leap year are as follows

// Most years that can be divided evenly by 4 are leap years.

// Exception: Century years are NOT leap years UNLESS they can be evenly divided by 400.

// So the years 0, -64 and 2016 will return 366 days. Whilst 1974, -10 and 666 will return 365 days.

function yearDays(year)
{
  if (year == 0 )  return `${year} has 366 days`;
  if ( Math.abs((year/100) % 4) != 0) return `${year} has 366 days`;
  if ( Math.abs(year % 4) != 0) return `${year} has 365 days`;   
  if ( Math.abs(year % 4) == 0) return `${year} has 366 days`
}
console.log(yearDays(1400));
//////// 2 solution :
function yearDays(year) {
  let nDays =  year % 4 ? 365 :
               year % 100 ? 366:
               year % 400 ? 365 : 366;
  
  return `${year} has ${nDays} days`;
}

//////// 3 solution:
function yearDays(year) {
  return year + ' has ' + (!(year % 100) && year % 400 || year % 4 ? '365' : '366') + ' days';
}

//////////
// Треугольние чісла 1, 3, 6, 10 

function triangular( n ) {
  return n < 0 ? 0 : n * (n + 1) / 2;
}

///////// сократить до 137 знаков
function describeAge(age) {
  return "You're a(n) " + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly")
} 

////////
// Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

// The number of dogs will always be a number and there will always be at least 1 dog.
function howManyDalmatians(number) {
  
  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
  
  var respond = number <= 10 ? dogs[0] : (number <= 50 ? dogs[1] : (number == 101 ? dogs[3] : dogs[2]));
  
return respond;
}
/////////
// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).

function bonusTime(salary, bonus) {
  return bonus ? `£${salary *10}` : `£${salary}`
  }
  ////////////
  var ownedCatAndDog = function(catYears, dogYears) {
    let c = catYears == 1 ? 15: catYears == 2 ? 24 : 24 + (catYears - 2) * 4;
    let d = dogYears == 1 ? 15: dogYears == 2 ? 24 : 24 + (dogYears - 2) * 5;
    
    return [c, d];
  }
  console.log(ownedCatAndDog(56, 64));
/////////////////
// Given the sum and gcd of two numbers, return those two numbers in ascending order. If the numbers do not exist, return -1, (or NULL in C, tuple (-1,-1) in C#, pair (-1,-1) in C++,None in Rust, array {-1,-1}  in Java and Golang).
// For example: 
// Given sum = 12 and gcd = 4...
// solve(12,4) = [4,8]. The two numbers 4 and 8 sum to 12 and have a gcd of 4.
// solve(12,5) = -1. No two numbers exist that sum to 12 and have gcd of 5.
// solve(10,2) = [2,8]. Note that [4,6] is also a possibility but we pick the one with the lower first element: 2 < 4, so we take [2,8].
function solve(s,g){
  return   s %g == 0 ?  [g,s-g] : -1
}

/////////////// является ли N степенью двойки ????
function isPowerOfTwo(n){
  let r = 2;
  while (r < n) {
    r *= 2
  }
  return (r == n)
}
console.log(isPowerOfTwo(1024));
///   OR  /////
function isPowerOfTwo(n){
  return Number.isInteger(Math.log2(n));
}

/////
// Find the difference between the sum of the squares of 
// the first n natural numbers (1 <= n <= 100) 
// and the square of their sum.
function differenceOfSquares(n){
  let i = 1;
  let sum = 0;
  let squ = 0;
while (i <= n) {
  sum = sum + i;
  squ = squ  +  i ** 2;
  i++;
}
return sum ** 2 - squ
}
console.log(differenceOfSquares(10));
/////// самое короткое решение    ////////////////////
differenceOfSquares=x=>x*(x*x-1)*(3*x+2)/12 
///////////
function differenceOfSquares(x){
  return Math.pow((x*(x+1)/2), 2) - (x*(x+1)*(2*x+1)/6);
}
/////////////////////

// My friend John likes to go to the cinema. He can choose between system A and system B.

// System A : he buys a ticket (15 dollars) every time
// System B : he buys a card (500 dollars) and a first ticket for 0.90 times the ticket price, 
// then for each additional ticket he pays 0.90 times the price paid for the previous ticket.
// Example:
// If John goes to the cinema 3 times:

// System A : 15 * 3 = 45
// System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 
// ( = 536.5849999999999, no rounding for each ticket)
function movie(card, ticket, perc) {
  let i = 0;
  let a = ticket;
  let c = ticket * perc;
  let b = card + c;
  while (a < Math.ceil(b)) {
   a = ticket * i
   c = c * perc;
   b = b + c;
   i++
  }
  return i-1;
};

console.log(movie(100, 10, 0.95)); // , 43)

function movie(card, ticket, perc) {
  var costA = n = 0,
      costB = card;
  while (Math.ceil(costB) >= costA) {
      costA += ticket;
      costB += ticket * Math.pow(perc,++n);
  }
  return n;
};

console.log(movie(100, 10, 0.95)); // , 43)

// Mr. Scrooge has a sum of money 'P' that he wants to invest. 
//Before he does, he wants to know how many years 'Y' this sum 'P' 
//has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. 
//After paying taxes 'T' for the year the new sum is re-invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

function calculateYears(pr, int, tax, des) {
  if (des <= pr) return 0;
  let i = 0;
  while (pr <= des) {
   pr = pr + pr*(int - int * tax);
   i++;
  }
  return i
}

calculateYears(1000, 0.05, 0.18, 1100)

////////////////////////////////////////////
function remainder (D, d) {
  let i = 0;
  let f = D / d;
  console.log(f);
  console.log(f.toString().split('.').pop().length);
while (f.toString().split('.').pop().length >= 0)
{
 f = (D - i) / d; // D = D - i; 
 i++;
}  
  return i;
}
console.log(remainder(34,7));
///////////////////////////// SUPER SOLUTION ?????????? //////
function remainder (D, d){
  while(D >= d) {
    D -= d;
  }
return D;
}
/////////////////
// Just as the title suggestes :D . For example ->

// largest(1); //Should return 7
// largest(2); //Should return 97
// ....
// Do not mind the pattern as it is just an incident ! And make sure to return false 
// if the input is not an integer :D This might seem simple at first, it is, but keep 
// an eye on the performance. Go for it !

var largest = (n) => {
  // "use strict";
  //GOOOOD LUCK ! 
  if (n == 0 || n == null) return false;
  if (n.toString().includes('.') || typeof(n) !== 'number') return false;
  if (n == 1) return 7;
  let s = 7;
  while (s.toString().length < n) {
    s = +('9' + s);
  }
  return s
}
console.log(largest(null));
////////////// right solution ///////
//Largest prime number containing n digit
var largest = (n) => {
  if (typeof n!='number' || n<=0)
    return false;
  var arr=[7,97,997,9973,99991,999983,9999991];
  return arr[n-1];
}

////////////// factorial //////////////
function factorial(n){
  let answer = 1;
  
  while (n > 0) {
    answer *= n;
    n--;
  }
  
  return answer;
}
 console.log(factorial(4));

 ////////////// 
// Given a positive integer N, return the largest integer k such that 3^k < N.
// For example,
// largest_power(3) == 0
// largest_power(4) == 1
// You may assume that the input to your function is always a positive integer
 
function largestPower(n){
  
  let k = 0;
  let s = 3 ** k;
  while ( s < n){
    s = s * 3;
  k++;
  console.log(s);
  }
  return k-1 // return the largest integer k such that 3^k < n
}
console.log(largestPower(3));
////////////////////////////////////////
// Task
// Write a function that returns true if the number is a "Very Even" number.
// If a number is a single digit, then it is simply "Very Even" if it itself is even.
// If it has 2 or more digits, it is "Very Even" if the sum of its digits is "Very Even".
// Examples
// number = 88 => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd 
// number = 222 => returns true -> 2 + 2 + 2 = 6 => 6 is even
// number = 5 => returns false
// number = 841 => returns true -> 8 + 4 + 1 = 13 -> 1 + 3 => 4 is even
// Note: The numbers will always be 0 or positive integers!
function isVeryEvenNumber(n) {
  while (n.toString().length > 1) {
  n = n
    .toString()
    .split("")
    .reduce((a, cv) => +cv + a, 0);
}
return n % 2 === 0 ? true : false;
}
console.log(isVeryEvenNumber(371));