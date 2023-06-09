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
///////////////////
// Get the next prime number!
// You will get a numbern (>= 0) and your task is to find the next prime number.
// Make sure to optimize your code: there will numbers tested up to about 10^12.

function nextPrime(n){
  if (++n < 2) {
    return 2
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return nextPrime(n)
    }
  }
  return n
}
console.log(nextPrime(12342355));
///////////////
function sum(n){
  let s = 0;
  while (n >=0) {
  s = n + s;
  n--
  }
  return s
  }
  console.log(sum(10));

  function sumOfOdd(n){
    if (n %2 == 0) { n = n - 1 }
    let s = 0;
      while (n >= 0) {
      s = n + s;
      n = n - 2
      }
      return s 
      }
      console.log(sumOfOdd(20));
      //////////////////////////////////////
      function powerOf2(n){
        let k = 0;
        let s = 2 ** k;
        while ( s <= n) {
        s = 2 * s;
        k++
        }
        return k - 1;
        }
        console.log(powerOf2(256));
        console.log(2 ** 10);
//////////////////////////////////////////
function powerOf3(n){
  //let k = 0;
  //let s = n; 
  while ( n / 3 >= 3) {
  n = n /3;
  //k++; 
  console.log(n);
  }
  return n % 3 == 0;
  }
  console.log(powerOf3(12));
  ///////////////////////////////////
///// посчитать сумму цифр в числе, не используя методы строк и массивов //////
  function sumOfDigits(n) {
    let a = n % 10;
    let b = a;
     while (n / 10 >= 1 ) {
      n = n /10 - (n % 10)/10;
      a = n % 10;
      b = a + b;
     }
    return b;
    }
      console.log(sumOfDigits(73419));

////// посчитать количество цифр в числе, не используя методы строк и массивов //////
function numberOfDigits(n) {
  let k = 1;
  let a = n % 10;
   while (n / 10 >= 1 ) {
    n = n /10 - (n % 10)/10;
    a = n % 10;
    k++
   }
  return k;
  }
    console.log(numberOfDigits(7));

/////////////////////////////////////////////
// за скольок дней ученик выучит n английских слов ? за первый день = 5, потом на 2 больше
function englishWords(n){
let d = 1;
let w = 5;
while (w <= n) {
  w += 2;
  d++
}
return d
}
////////////
// Create a function named divisors/Divisors that takes an integer n > 1 and 
// returns an array with all of the integer's divisors(except for 1 and the number itself), 
// from smallest to largest. If the number is prime return the string '(integer) is prime' 
// (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"
function divisors(integer) {
  let arr = [];
  for ( let i = integer; i > 1; i--)
  if (integer / i !== 1 && integer % i == 0) {
    arr.push(integer / i);
  }
  if (arr.length == 0) return `${integer} is prime`;
  return arr;
}
console.log(divisors(25));

//////////////////////////////////////////////
// Your task is to write a function which returns the sum of following series 
// upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// Rules:
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return 0.00

// You will only be given Natural Numbers as arguments.


function SeriesSum(n)
{
  if (n == 0) return "0.00"
  let sum = 1;
  for ( let i = 0; i < n-1; i++) {
    let k = 1 / (4 + i * 3);
    sum = sum + k;
  }
  return sum.toFixed(2)
}
console.log(SeriesSum(5));
////////// more solutions /////////
function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3)
  }
  return s.toFixed(2)
}
//////////////////
// Необходимо создать функцию isPronic, которая будет проверять, 
// является ли переданный аргумент простым числом, и возвращать true, если да, 
// и false в противном случае.

// Описание:
// Проническое число - Проническое число, продолговатое число, 
// прямоугольное число или гетеромедианное число - это число, которое 
// является произведением двух последовательных целых чисел, то есть n(n + 1).

// Первые несколько простых чисел - 0, 2, 6, 12, 20, 30, 42...
function isPronic(n){
  for ( let i = 0; i <=n; i++) {
if ( n / i == i-1) return  true;
//console.log(( n / i == i-1));
  }
  return false
}
console.log(isPronic(13));
/////////////////////////
//  super solution 
function isPronic(n){
  return Math.sqrt(1+4*n)%1===0;
}
///////////////////////////////////
// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
var summation = function (num) {
  let sum = 0;
  for (i = 0; i <= num; i++) {
 sum +=i;
  }
  return sum
}
console.log(summation(8));

// Given two integers a and b, which can be positive or negative, 
// find the sum of all the integers between and including them and return it. 
// If the two numbers are equal return a or b.
// Note: a and b are not ordered!

function getSum(a, b)
{
  if ( b <= a) {
    let sum = 0;
  for (i = b; i <= a; i++){
    sum += i;
  }
  return sum;
  } 
  let sum = 0;
  for (i = a; i <= b; i++){
    sum += i;
  }
   return sum
}
console.log(getSum(0, 4));
////////////////// more solutions
function GetSum(a,b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}
////////
function GetSum( a,b )
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}
/////////////////
// Your task is to return the sum of Triangular Numbers up-to-and-including 
// the nth Triangular Number.
// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained 
// by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."
function sumTriangularNumbers(n) {
  let sum = 0;
  for (i = 0; i <= n; i++) {
     c = (0.5 * i)*(i+1); 
      sum += c;
  }
  return sum;
}
console.log(sumTriangularNumbers(6));


///////////////////////////////////// I\n I==== not correct solution
function drawStairs(n) {
  let s = "I\n";
   for (i = 0; i < n; i++) {
     s += " ".repeat(i) + "I\n";
   }
   return s;
 }
 console.log(drawStairs(5));

 ////////======================//////////
 function drawStairs(n) {
  // your code here
  let stairs  = ""
  for (let i = 0; i < n ; i++){
    if (n-i == 1){
      stairs += " ".repeat(i) + "I"
    } else {
      stairs += " ".repeat(i) + "I\n"
      }
  }
  return stairs 
}
console.log(drawStairs(5));
////////////////
//================== найті значеніе дробі a/b

function fractional(n){
  let a = 1;
  let b = 1;
  for (i = 2; i <= n; i++) {
  a += i;
  b *= i;
  }
  return +(a / b).toFixed(3)
  }
  console.log(fractional(4));

  ///////// FIBONACHI=============///////////
  function fibonacciNumbers(n){
    let k = [0, 1];
    for (i=2; i < n; i++) {
    let a = k[k.length - 2] + k[k.length - 1];
    k.push(a)
    }
    return k
    }
  ////////////////================
// Given an integer as input, can you round it to the next
//  (meaning, "greater than or equal") multiple of 5?
// Examples:
// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).
// You can assume that all inputs are valid integers.
function roundToNext5(n){
  if (n % 5 == 0) return n;
  do {
    n++;
  } while (n % 5 !== 0);
  return n
}
  
console.log(roundToNext5(12));

//////////////========
// The goal is to create a function of two inputs number and power, 
//that "raises" the number up to power (ie multiplies number by itself power times).
/// с помощью цикла do while
function numberToPower(number, power){
  //console.info(Math.log2(1024));
  if (power == 0) return 1;
  let s = number;
  if (power == 1) return s;
  do {
    s *= number;
    power--;
  } while (power >= 2);
  return s;
}
console.log(numberToPower(10, 4));
/// с помощью for:
function numberToPower(number, power) {
  var result = 1;
  for (let i = 0; i < power; ++i)
      result *= number;
  return result;
}
///-----------------------////////////-----------------/////
// 
function padIt(str,n){
  while(n>0){
    if(n%2 === 0) {
      str = str + "*";
    }else{
      str = "*" + str;
    }
    n --;
  }
  return str;
}
console.log(padIt('a',5));
///////----------------/////////////////
// Given a positive integer n, calculate the following sum:
// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.
function halvingSum(n) {
  let s = n;
  let a = 1;
  do {
    a = Math.floor(n / 2);
    s = s + a;
    n /=2;
    //console.log(s);
  } while ( n > 1)
    return s;
}
console.log(halvingSum(127));

/////// сумма всех чисел от 10 до 99
function sumOfTwoDigitsNumbers(){
  let s = 0;
  let k = 10;
  do {
  s += k;
  k++;
  }while (k <= 99);
  return s
  }
console.log(sumOfTwoDigitsNumbers());

/////////// ----- царевна лягушка
function frogPrincess(n){
  let d = 1;
  let q = n;
  let k = 0;
  do {
    k += 3;
    q = q + n + k;
    console.log(q);
    d++;

  }while (q <= 1000);
  return d
  }
console.log(frogPrincess(40));
/////////////////// 10 дней бега, каждий день +10%. на 10 день - сколько?
function running(n){
  let d = 2;
  do {
   n = n + (n/10)
   d++
  } while (d <=10);
  return Math.round(n);
  }
console.log(running(10));
//////////////////////---------простой  процент банка - когда будет 1500 долл?---
function bankPercent(p){
  let s = 1000;
  let b = s/100*p;
  let y = 0;
  //let x = s/100*p;
  do {
    //x = s/100*p;
    s = s + b;
    y++;
   // console.log(x);
    // console.log(s);
    // console.log(y);
  }while (s < 1500);
  return y;
}
console.log(bankPercent(19));

//////////////////////---------капитализированний процент банка - какая сумма будет через n лет?---
function bankPercent(money, percent, period){
  let s = money;
  let y = 1;
  do {
    s = s + s/100*percent;
    y++;
  } while ( y <= period);
  return s.toFixed(2);
}
console.log(bankPercent(1000, 10, 3));

///////////////// - превернуть чісло без методов строк і массівов----
function invertNumber(n){
  let a = 0;
  let q = 0;
  let s = 0;
do {
a =  (n % 10) 
console.log(a);
s = (s * 10 ** q + a) / 10 ** (q) 
console.log(s);
q++;
n = (n - n%10) / 10;
} while (n > 0)
return s * 10 ** (q-1)
}
console.log(invertNumber(123));
////////////-------------------////////////////
/// best solution ////////
function invertNumber(n){
  let res = '';
  do{
  res += n % 10;
  n = Math.floor(n / 10);
  }while(n >= 1);
  return +res;
  }
  //////////// массів із перевернутого чісла ////////
  function arrayOfDigits(n){
    let arr = [];
    let a = 0;
    do {
      a = n%10;
      arr.push(a);
      n = Math.floor(n/10);
    } while (n >= 1);
    return arr;
  }
  console.log(arrayOfDigits(123456));
  ////////////--------------------------///////////////
  // есть лі ціфра 2 в чісле ?////////
  function doesNumberContain2(n){
    let a = 0;
    do {
      a = n%10;
      n = Math.floor(n/10);
      if ( a == 2) return true
      console.log(n);
      console.log(a);
    } while (n > 1);
    return false;
  }
  console.log(doesNumberContain2(12113));

  function doesNumberContain2(n){
    let a = 0;
    do {
      a = n%10;
      n = Math.floor(n/10);
      if ( a == 2) return true
      console.log(n);
      console.log(a);
    } while (n > 1);
    return false;
  }
  console.log(doesNumberContain2(12113));
//////////////////////// test ////////////
it('AT_17.01.002 | Add description to the Organization Folder via Configure the project', () => {
  cy.createOrgFolderProject(newItemPageData.orgFolderName)

  homePage
      .clickOrgFolderNameLink(newItemPageData.orgFolderName)
      .clickConfigureTheProjectLink()
      .addDescription(OrgFolderConfigurePageData.description)
      .clickSaveBtnAndGoOrgFolder()
      .getDescription()
      .should('contain.text', OrgFolderConfigurePageData.description);
});
//////////// таблица умножения //////////
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j<=10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
console.log('----------------');
}
///////////////////// ATM //////////??????????????????????
// An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. 
// You can consider that there is a large enough supply of each of these banknotes.

// You have to write the ATM's function that determines the minimal number of banknotes 
// needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

// Return that number, or -1 if it is impossible.


function solve(n) {
  let a = 0;
  if (n%500 >= 0) {
    a = a + Math.floor(n/500)
    n = n%500;
  };
  if (n%200 >= 0) {
    a = a + Math.floor(n/200)
    n = n%200;
  };
  if (n%100 >= 0) {
    a = a + Math.floor(n/100)
    n = n%100;
  };
  if (n%50 >= 0) {
    a = a + Math.floor(n/50)
    n = n%50;
  };
  if (n%20 >= 0) {
    a = a + Math.floor(n/20)
    n = n%20;
  };
  if (n%10 >= 0) {
    a = a + Math.floor(n/10)
    n = n%10;
  };
  if (n != 0) {
    a = -1
  };
return a
}
console.log(solve(80));
////////////////////// more //////
function solve(n) {
  let counter = 0;
  [500, 200, 100, 50, 20, 10].forEach(item => {
    counter += Math.floor(n / item)
    n = n % item
  })
  return n ? -1 : counter
}
/// +++++++++++++++++//////////
function solve(n) {
  if (n % 10) return -1
  return [500, 200, 100, 50, 20, 10].reduce((s, v) => {
    let ans = n / v | 0
    n %= v
    return s + ans
  }, 0)
}
//////////// +++++++++++++++++//////////////
function solve(n) {
  if (n%10!=0)
    return -1;
  var count=0;
  while (n>=500){n-=500;count++;}
  while (n>=200){n-=200;count++;}
  while (n>=100){n-=100;count++;}
  while (n>=50){n-=50;count++;}
  while (n>=20){n-=20;count++;}
  while (n>=10){n-=10;count++;}
  return count;
}
////////////////
// “A farm contains chickens and cows. There are x heads and y legs. 
// How many chickens and cows are there?” 

// Where x <= 1000 and y <=1000
function animals(heads, legs){
  if (legs < 0) return "No solutions";
  let x = (4 * heads - legs) / 2;
  let y = heads - x;
  if ( legs%2 != 0 || x < 0) return "No solutions";
  return [x, y]
}
console.log(animals(1000, -500));

///////////////////// good solution :
function animals(heads, legs){
  const chickens = (4 * heads - legs) / 2;
  const cows = heads - chickens;
  
  if (chickens >= 0 && chickens % 1 === 0 && cows >= 0) {
      return [chickens, cows];
  }
  return 'No solutions';
}
