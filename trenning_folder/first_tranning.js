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
////// таблица от 1 до n по 5 цифр в ряду
function numericalTable(n){
  for (let i = 1; i <= n; i++) {
    var str = '';
    for (let j = 0; j < 5; j++) {
       
      if (j == 4) str = str + i;
      else {str = str + i + ' '};
    }
    console.log(str);
  }
}
(numericalTable(20)); // console.log(str); //

for (let i = 1; i <= 20; i++) {
  var str = '';
  for (let j = 1; j <= 5; j++) {
    if (i < 10) str = str + i + '   ';
    else str = str + i + ' ';
  }
  console.log(str);
}

function numericalTable(n){
  for (let i = 1; i <= n; i++) {
    var str = '';
    for (let j = 0; j < 5; j++) {
       
      if (j == 4) str = str + i;
      else {str = str + i + ' '};
    }
    console.log(str);
  }
}
(numericalTable(20));
////////////////////////// вреное решение !!!!!!!!!!!!! /////////////
function numericalTable(n){
  let str = ''
  let chank = ''
  for(let i = 1; i <= n; i++){
      if(i !== 1) str += '\n'
      chank = ''
      for(let j = 0; j < 5; j++){
          chank += String(i) + ' '
      }
      str += chank.trim()
  }
  return str
}
console.log((numericalTable(20)));
////////////////////////////////// табліца із m чісел в ряду///////
function numericalTable(n, m){
  let str = ''
  let chank = ''
  for(let i = 1; i <= n; i++){
      if(i !== 1) str += '\n'
      chank = ''
      for(let j = 0; j < m; j++){
          chank += String(i) + ' '
      }
      str += chank.trim()
  }
  return str
}
console.log((numericalTable(20, 5)));
///////////////////////// єто решегніе почему-то не прошло, хотя тоже видает табліцу ???///
function numericalTable(n, m){
let str = '';  
for(let i = 1; i <= n; i++){
   for(let j = 0; j < m; j++){
     str+=`${i}`+ ' ';
   } 
    if(i !== n){
     str+=`${i}\n`
    }else{
     str+=`${i}`
    }
}
return str;
}
console.log((numericalTable(20, 5)));
///////////// еще хорошее і простое решеніе /---------
function numericalTable(n, m){
  let str = '';
  for(i = 1; i <= n; i++){
  for(j = 1; j <= m; j++){
  if(j === m && i === n){
  str += i;
  }else if(j === m && i < n){
  str += i + '\n';
  }else {str += i + ' ';}
  }
  }
  return str;
  }
  //////////// треугольнік із чісел от 1 до n
//////// +++++++++++++++++++++++++++++++!!!!!!!!!!!!!!!!!!!!!!!
  function numericalTriangle(n){
    let str = '';
    for(i = 1; i <= n; i++){
    for(j = 1; j <= i; j++){
    if(j === i && i === n){
    str += i;
    }else if(j === i && i < n){
    str += i + '\n';
    }else {str += i + ' ';}
    }
    }
    return str;
    }
console.log(numericalTriangle(5));

///////// треугольнік із ****** ???? ///////////

function starTriangle(n){
  let str = '';
  for(i = 1; i <= n; i++){
  for(j = 1; j <= i; j++){
   if(j === i && i < n){
  str += "*" + '\n';
  }else {str += "*";}
  }
  }
  return str;
  }
console.log(starTriangle(5));
/////+++++++++++++++ more solution: __________
function starTriangle(n){
  let res='';
  for ( let i=1; i<=n; i++){ 
    for ( let j=1; j<=i; j++) { 
      res = res +'*';} 
      if (i!==n) res=res+'\n';} 
      return res
  }
  ///////////// ф-ція прінімает двумерний массів і возвращает массів із сумм каждого вложенного массіва
  function sumsInArray(arr){
let b = [];
var sum = 0
for (i = 0; i < arr.length; i++){
  let s = arr[i];
  b.push(s);
  
  for (j=0; j < b.length; j++){
  sum += b[i];
  console.log(b[i]);
  }
  //console.log(sum);
}
return b
  }
  console.log(sumsInArray([[1, 2, 3], [2, 2]]));
////--===================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function sumsInArray(arr){
  let b = [];
  for (i = 0; i < arr.length; i++){
    let sum = 0;
    for (j=0; j < arr[i].length; j++){
    sum += arr[i][j];
    }
   b.push(sum);
  }
  return b
    }
    console.log(sumsInArray([[1, 2, 3], [2, 2]]));
//////////////// перевернутый треугольник=====>>>>>>>>>>>>>>>>>>>
function upsideDown(n){
  let str = '';
for(i = n; i >= 0; i--){
for(let j = 1; j <= i; j++){
 if(j === i && i <= n){
str += "*" + '\n';
 } else {str += "*";}
 }
}
return str; ///////////// работает
}
console.log(upsideDown(6));
//////////////////////////// ищем вариант без переходва после последней строки
function upsideDown(n){
  let str = '';
for(i = n; i >= 0; i--){
for(let j = 1; j <= i; j++){
 if(j === i && i <= n ){
str += "*" + '\n';
} else {str += "*";}
}
}
return str; ///////////// работает  && i <= n
}
console.log(upsideDown(5));
//////////////////////////////// верное решение от ЧАТ ЖПТ ::::::::::: !!!!!!!!!!!!
function upsideDown(n) {
  let triangle = '';
  for (let i = n; i > 1; i--) {
    const row = '*'.repeat(i);
    triangle += row + '\n';
  }
  triangle += '*';
  return triangle;
}
console.log(upsideDown(5));

//////////////// простое хорошее решение: ----->>>>
function upsideDown(n){

  let str = '';
  for(let i = n; i >= 1; i--){
   for(let j = 1; j < i; j++){
     str+=`*`;
       }
     if(i !== 1){
       str+=`*\n`;   
     }else{
       str+=`*`; 
     }
  }
 return str;
 
 }
 //////////////////// Вложенный массив => вернуть количество строк, имеющих хоть один отрицательный элемент
 function countLinesWithNegativeElements(arr){
  let b = [];
  for (i = 0; i < arr.length; i++){
    var k = 0;
    for (j=0; j < arr[i].length; j++){
      if (arr[i][j] < 0) {k+=1}//{b.push(arr[i][j])};
      console.log(arr[i]);
      //b.push(k)
      }
  }
  return k
  // return b//.length
    }
  //}
    console.log(countLinesWithNegativeElements([[1, -2, 3], [2, -2]]));

    function countLinesWithNegativeElements(arr){
      let sum = 0;
  for (i = 0; i < arr.length; i++){
    for (j=0; j < arr[i].length; j++){
      if (arr[i][j] < 0) {
    sum +=1;
    break 
      }; 
    }
  }
  return sum 
    }
    console.log(countLinesWithNegativeElements([[1, 2, 3], [2, 2], [2, -3, -3], [1, 2, 3], [2, 2]]));

    function countLinesWithNegativeElements(arr) {
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        const line = arr[i];
        for (let j = 0; j < line.length; j++) {
          if (line[j] < 0) {
            count++;
            break;
          }
        }
      }
      return count;
    }
    console.log(countLinesWithNegativeElements([[1, 2, 3], [2, 2], [2, -3, -3], [1, 2, 3], [2, 2]]));

    //////////// to build diamond -->>>>>>>>>>>>
    let height = 5;
let halfTree = height - 1;
for (let i = 0; i < height; i++) {
    let line = ""

    /// loop for " " (пробелы)
    // i - это номер строки
    for (let j = 0; j < halfTree - i; j++){
        line = line + " " 
    }
    // loop for '*'
    for ( let j = 0; j < 2*i + 1; j++){
        line += "*"
    }
    console.log(line);
}
/////// ----- отсюда начинается ромб---- ////
for (let i = height - 2; i>= 0; i--){
    let line = ""
/// loop for " "
    for (let j = 0; j < halfTree - i; j++) {
     line += " "
    }
    // loop for '*'
    for ( let j = 0; j < 2*i + 1; j++){
        line += "*"
    }
    console.log(line);
}
//////////////////Your task is to return a number from a string.

var filterString = function(value) {
  let b = value.split('');
  let a = '';
  for (i = 0; i <= b.length; i++) {
    if (!isNaN(b[i])){
      a += b[i];
    }
  }
  return +a; 
}
console.log(filterString("aa1bb2cc3dd"));
////////////////////////////////// +++++++++++= solution -->>
var FilterString = function(value) {
  return +value.split('').filter(n => !isNaN(n)).join('');
}

//Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN,
/// and returns false otherwise.
const isReallyNaN = (val) => {
  // return isNaN(val);  // wasn't working as planned :-(
   return Number.isNaN(val)

  //return true || false;
};
/////
//Write a function which will return value for which strict comparison will give false!

function findStrangeValue() {
  var x = Number.NaN
  return x
 }
//////// or ;
function findStrangeValue() {
  return + 'fart'
}
/////////// 
function multBy5(value){
  return Number.isNaN(value) ? "Value is NaN" : value * 5;
  }
//////// сколько NaN в массиве? ___________------>>>>
  function countNaN(arr){
    let k = 0;
    for (i =0; i <= arr.length; i++) {
    if (Number.isNaN(arr[i])) k +=1;
    }
    return k
    }

    ////////////// скільки безкінечних значень в масиві? --->>
    function countInfinity(arr){
      let k = 0;
      for (i = 0; i <= arr.length -1; i++) {
        if (isFinite(arr[i]) == false) {
          k++
        }
      }
      return k
    }

    console.log(countInfinity([Infinity, -Infinity, 3/0, -4/0, 'a' * 2, NaN]));
////////// інверсія всіх елементів масиву-------->>>
function invert(array) {
  let arr = [];
  for (i=0; i < array.length; i++) {
   array[i] = array[i] * -1;
    arr.push(array[i])
    //console.log(array[i]);
  }
   return arr;
}
console.log(invert([1, 2, 3, 4]));
///////////// самое короткое решение -- >>
function oppositeArray(arr){
  return arr.map(num => -num)
  }
///Jack really likes his number five: the trick here is that you have 
//to multiply each number by 5 raised to the number of digits of each numbers, 
//so, for example:
// multiply(3)==15 // 3 * 5¹
// multiply(10)==250 // 10 * 5²
// multiply(200)==25000 // 200 * 5³
// multiply(0)==0 // 0 * 5¹
// multiply(-3)==-15 // -3 * 5¹
function multiply(number){
  let k = '' + Math.abs(number);
  let a = k.length;
return number * (5 ** a)
}
console.log(multiply(10));
////// simpe solution : --->>>

// Complete the function that returns an array of length n, 
// starting with the given number x and the squares of the previous number. 
// If n is negative or zero, return an empty array/list.
function squares(x, n) {
let arr = [x];
if (n <= 0) {
   return [];
}
for (i = 1; i < n; i++) {
  x = Math.pow(x, 2);
  arr.push(x) 
} 
return arr 
}
console.log(squares(10, -4));
/////////////// more interest solution-->>
function squares(x, n) {
  let arr = [];
  if(n === 0 || n < 0) return arr;
  for(let i = x; arr.length < n; i*=i) {
      arr.push(i);
  }
  return arr
}
//Write a method, that will get an integer array as parameter and will 
//process every number from this array.
//Return a new array with processing every number of the input-array like this:
//If the number has an integer square root, take this, otherwise square the number.
// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.
function squareOrSquareRoot(array) {
  let a = [];
  for(i = 0; i < array.length; i++) {
    if (Math.floor(Math.sqrt(array[i])) == Math.ceil(Math.sqrt(array[i]))) {
      array[i] = Math.sqrt(array[i])
    } else { array[i] = Math.pow(array[i], 2)
    }
    a.push(array[i])
  }
  return a;  
}
console.log(squareOrSquareRoot([ 4, 3, 9, 7, 2, 1 ]));
//////
function squareOrSquareRoot(array) {
  return array.map(x => {
    const n = Math.sqrt(x)
    return Number.isInteger(n) ? n : x * x
  })
}
///// в одну строку!!! -->>
const squareOrSquareRoot = $ => $.map(el => el**.5 % 1 ? el*el : el**.5)
///////////////-->> The Menger Sponge is a three-dimensional fractal
//In this kata you will create a function that takes non negative integers 
//(from 0 to n) and return the amount of cubes that the Menger Sponge would have 
//in that specific iteration.
function calc_ms(n) {
  let a = 1
  return (2**n) * (10**n)
}
console.log(calc_ms(0));
/// ответ с сайта: 
function calc_ms(n) {
  return 20 ** n;
}
//// каждый четный эл. возвести в квадрат, а нечетный - в куб
function powerArray(arr){
  let a = arr.map((num) => 
   num%2 == 0 ? num ** 2 : num **3
  )
  return a
  }
console.log(powerArray([1, 2, 3, 4, 5]));
//////// получить массив степеней 2 до n
function powersOfTwo(n){
  let a  = [];
  for (i=0; i <= n; i++) {
  a.push(2 ** i)
  }
  return a
  }
  //////////
//   Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer 
// that is the square of an integer; in other words, it is the product 
// of some integer with itself.
// my solution:
var isSquare = function(n){
  return Math.floor(Math.sqrt(n)) == Math.ceil(Math.sqrt(n))? true : false; 
}
//// best solution: !!!!!!!!!!!!!!!!!!!!!!
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}
///////
// Complete the findNextSquare method that finds the next integral perfect 
// square after the one passed as a parameter. Recall that an integral perfect 
// square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. 
// You may assume the parameter is non-negative.
function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  return Math.sqrt(sq) % 1 === 0 ? (Math.sqrt(sq) + 1) ** 2 : -1; // ====> my solution
}
// site solution:
function findNextSquare(sq) {
  let r = Math.sqrt(sq)
  return r % 1 ? -1 : ++r * r
}

/////////////////////////
  function cutCube(volume,n){
    return Math.cbrt(volume/n) % 1 == 0 && Math.cbrt(n) % 1 == 0; 
    }
      console.log(cutCube(512,8));
//////////////////////////////
      function isSquare(x){
        return Number.isInteger(Math.sqrt(x)) ? `${x} is square of ${Math.sqrt(x)}` : `${x} is not a square`;
        }
        console.log();

        function expression(a, b, c){
          return +(Math.sqrt(a) + (Math.sqrt(Math.abs(b - c)) / ((Math.pow(a, 3) + Math.pow(b, 2) + (Math.pow(c, 4)))))).toFixed(2)
          }
/////////////// корни кваддратного уравнения
function quadraticEquation(a, b, c){
let d = (b **2) - (4 * a * c);
if (d < 0) return "There are no roots";
let x = (-b + Math.sqrt(d))/ (2 * a);
let y = (-b - Math.sqrt(d))/ (2 * a);
return [x, y]
}
console.log(quadraticEquation(2, 3, 0));
/////////////////Сложить два логарифма с основанием X со значениями A и B. 
// Пример log A + log B, где основание равно X.
const logs = (x , a, b) => (Math.log(a) + Math.log(b)) / Math.log(x);
// 2
const logs = (x,a,b) => Math.log(a*b)/Math.log(x)
// 3
function logs(x , a, b){
  return (Math.log(a*b) / Math.log(x));
  }

  function countPowersInArray(arr){
    let k = 0;
    for (i =0; i < arr.length; i++) {
      
    if (Math.log2(arr[i])%1 == 0 || Math.log10(arr[i])%1 == 0) k++;
    console.log(Math.log2(arr[i], Math.log10(arr[i])));
    }
    return k
    }
    console.log(countPowersInArray([10, 100, 1000, 2, 5]));

    //There's a "3 for 2" (or "2+1" if you like) offer on mangoes. 
    //For a given quantity and price (per mango), calculate the total cost of the mangoes.
    function mango(quantity, price){
      return Math.ceil(quantity/3) * 2 * price
      }
      console.log(mango(9, 5));/// это решение работает не всегда
      /// а это решение работате всегда
      function mango(quantity, price){
        return price * (quantity - Math.floor(quantity / 3));
      }
//Another example: if a bottle costs £12 normally and the duty free discount is 50%, 
//you would save £6 per bottle. If your holiday will cost £1000, you would have 
//to purchase 166.66 bottles to save £1000, so your answer should be 166 bottles.
function dutyFree(normPrice, discount, hol){
  return Math.floor(hol / (normPrice * (discount / 100)))
  }
        console.log(dutyFree(17, 10, 500));

  ////
// Create a function that takes an integer argument of seconds and converts the value 
//into a string describing how many hours and minutes comprise that many seconds.
  function toTime(seconds) {
    let h = Math.floor(seconds / 3600);
      let m = Math.floor(((seconds / 3600) - Math.floor(seconds / 3600))*60);
      console.log(((seconds / 3600)*60).toFixed(0));
    return `${h} hour(s) and ${m} minute(s)`
    }
    console.log(toTime(323500));

/////Return the nth power of each number, unless the result is odd, 
//in which case round the result to the nearest 10.
function danspower(num, power) {
  if (num**power %2 == 0) return num ** power;
return Math.round((num ** power) / 10) * 10
}
/////////
// все элементы в масссиве округлить
function roundElementsOfArray(arr){
  return arr.map(el => Math.round(el));
  }
/////////
// Two tortoises named A and B must run a race. 
// A starts with an average speed of 720 feet per hour. 
// Young B knows she runs faster than A, and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 
// 850 feet per hour. How long will it take B to catch A?

//////=================================== 
function race(v1, v2, g) {
  // If v1 is greater than or equal to v2, B can never catch A, so return null.
  if (v1 >= v2) {
    return null;
  }

  // Calculate the relative speed (how much faster B is compared to A).
  const relativeSpeed = v2 - v1;

  // Calculate the time (in hours) required for B to catch A.
  const timeInHours = g / relativeSpeed;

  // Convert the time in hours to hours, minutes, and seconds.
  const hours = Math.floor(timeInHours);
  const remainingMinutes = (timeInHours - hours) * 60;
  const minutes = Math.floor(remainingMinutes);
  const remindSeconds = (remainingMinutes - minutes) * 60;
  const seconds = Math.trunc(remindSeconds);

  // If seconds is 60 or more, adjust minutes and seconds.
  if ((remindSeconds/10) - (remindSeconds/10).toFixed(1) >= 0.5) seconds = Math.round(remindSeconds)
  if (seconds >= 59) {
    return [hours, minutes + 1, 0];
  }

  return [hours, minutes, seconds];
}
console.log(race(720, 850, 37));
////////////////// решение из codewars:::::::
function race(v1, v2, g) {
  if (v2 < v1) { return null; }
  
  var seconds = Math.floor(g / (v2 - v1) * 3600);
  var h = Math.floor(seconds / 3600);
  var m = Math.floor((seconds - h * 3600) / 60);
  var s = seconds - h * 3600 - m * 60;
  
  return [h, m, s];
}
//////
// The function takes cents value (int) and needs to return the minimum number of coins 
// combination of the same value.

// The function should return an array where
// coins[0] = pennies ==> $00.01
// coins[1] = nickels ==> $00.05
// coins[2] = dimes ==> $00.10
// coins[3] = quarters ==> $00.25

// So for example:
// coinCombo(6) --> [1, 1, 0, 0]
function coinCombo (cents) {
  const quarters = Math.trunc(cents / 25);
  const dimes = Math.trunc((cents - quarters*25)/10);
  const nickels = Math.trunc((cents - quarters*25 - dimes*10)/5);
  const pennies = Math.trunc((cents - quarters*25 - dimes*10 - nickels*5)/1);
	return [pennies, nickels, dimes, quarters];
}
console.log(coinCombo (36));
///////через for:::::
function coinCombo(cents) {
  let coins = [1,5,10,25];
  let combo = [0,0,0,0];
  for (let i = 3; i >= 0; i--) {
      combo[i] = Math.floor(cents / coins[i]);
      cents -= combo[i] * coins[i];
  }
  return combo;
}
////Write a function that returns both the minimum and maximum number of the given list/array.
function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)];
}

///////Given a 2D ( nested ) list ( array, vector, .. ) 
//of size m * n, your task is to find the sum of the minimum values in each row.
function sumOfMinimums(arr) {
  let s = 0;
  for (i=0; i < arr.length; i++) {
    s = s + Math.min(...arr[i]);
  }
  return s
}
console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));
/////////===============================================//////////////////////
// Given two integers a and x, return the minimum non-negative number to add to / subtract 
// from a to make it a multiple of x.

// minimum(10, 6)  //= 2

// 10+2 = 12 which is a multiple of 6

function minimum(a, x) {
  let arr =[];
  for (i = a; i >= 0; i--) {
   if((a + i) % x == 0 || (a - i) % x == 0) arr.push(i)
  }
  console.log(arr);
  return Math.min(...arr)
}
console.log(minimum(33, 8));

///////////// ВЫвести минимальное положителное число из массива. Если нет положительных чисел => null

  function minPositive(arr){
    let a = arr.filter((el) => el > 0);
    return a.length > 0?  Math.min(...a) : null
    }
    console.log(minPositive([-6, -7, -8 ,-1 , -4]));

    //Create the function consecutive(arr) that takes an array of integers and return 
//     the minimum number of integers needed to make the contents of arr consecutive from 
//     the lowest number to the highest number.

// For example:
// If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be 
// added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. 
// Numbers in arr will be unique.
function consecutive(arr) {
  if (!arr || arr.length === 0 || arr.length === 1) {
    return 0;
  }

  arr.sort((a, b) => a - b);
  const minNum = arr[0];
  const maxNum = arr[arr.length - 1];

  let consecutiveCount = 0;
  for (let num = minNum; num < maxNum; num++) {
    if (!arr.includes(num)) {
      consecutiveCount++;
    }
  }

  return consecutiveCount;
}

  console.log(consecutive([4,8,6]));

  //// самое эффектное решение
  function consecutive(arr){
    let l = arr.length;
    return l ? Math.max(...arr) - Math.min(...arr) - l + 1 : 0;
  }
 ////Task
// Given the a list of unique numbers sorted in ascending order, 
// return a new list so that the values increment by 1 for each index from 
// the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
function pipeFix(numbers){
  let a = numbers.sort((c, b) => c - b);
for (i = Math.min(...numbers); i <= Math.max(...numbers); i++) {
   if( !numbers.includes(i)) {
    a.push(i);
   }
} 
return a.sort((c, b) => c - b)
}
 console.log(pipeFix([ 1, 10, 11, 12, 2, 3, 4, 5, 6, 7, 8, 9 ]));
 // то же самое, но проще
 function pipeFix(numbers){
  var min = numbers[0];
  var max = numbers[numbers.length - 1];
  var array = [];
  
  for(var i = min; i<=max; i++)
  {
    array.push(i);
  }
  
  return array;
}
//=======================================================
// Given three integers a ,b ,c, return the largest number obtained after inserting 
//the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the 
//Maximum Obtained (Read the notes for more detail about it)
// Example
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.
function expressionMatter(a, b, c) {
  let d = a + b + c;
  let e = (a+b) * c;
  let f = a * b * c;
  let g = a * (b+c);
  let j = a * b + c;
  let arr = [d, e, f, g, j]
  return Math.max(...arr)
}
console.log((expressionMatter(6, 7, 1)));
/// ===============!!!!!!!!!!!!!!!!!
function expressionMatter(a, b, c) {
  return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));
}
///\
function maxNegative(arr){
let a = arr.filter((el) => el < 0)
return a.length? Math.max(...a): null;
}
console.log(maxNegative([3, 4, -58, -21, 4]));
/////++++++++++++++++++++++++++++++++++++++++++++++++++
function yourFutureCareer() {
	var career = Math.random();
  
	if (career <= 0.32) {
    return 'FrontEnd Developer';
  } else if (career <= 0.65) {
    return 'BackEnd Developer';
  } else {
    return 'Full-Stack Developer';
  }
}
  //
  const yourFutureCareer = () => {
    let career = Math.random();
    return `${ career <= 0.32 ? 'FrontEnd' : (career <= 0.65 ? 'BackEnd' : 'Full-Stack') } Developer`;
  }
  //написать функцию, которая принимает в качестве аргумента положительное 
  //число n и возвращает случайное целое число от 0 до n
  function randomIntegerToN(n) {
    // Генерируем случайное число от 0 до n (включительно)
    return Math.floor(Math.random() * (n + 1));
  }

  //написать функцию, которая принимает в качестве аргумента два положительных числа 
  //min и max и возвращает случайное целое число от min до max
  function randomIntegerInRange(min, max) {
    // Генерируем случайное число от min до max (включительно)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // создать случайный номер телефона из 11 цифр
  function createPhoneNumber(){
     let tel = '+1';
     for (i = 0; i<10; i++) {
      tel = tel + Math.floor(Math.random() *10);
     }
     return tel;
  }
console.log(createPhoneNumber());

//This kata is about converting numbers to their binary or hexadecimal representation:
//If a number is even, convert it to binary.
//If a number is odd, convert it to hex.

function evensAndOdds(num){
  return num % 2 == 0 ? num.toString(2) : num.toString(16)
  }
  // короче запись:
  const evensAndOdds = n => n.toString(n%2 ? 16 : 2);

  // вернуть число в ичислении по основанию n
  function convertNumber(num, n){
    return n>1 && n<37 ? num.toString(n): undefined 
    }
    //The function bar_triang() or barTriang or bar-triang, 
    // receives the coordinates of the three vertices A, B and C  as 
    // three different arguments and outputs the coordinates of the barycenter O in an array [xO, yO]
    function barTriang(p1, p2, p3){
      let a = +((p1[0]+p2[0]+p3[0])/3).toFixed(4);
      let b = +((p1[1]+p2[1]+p3[1])/3).toFixed(4);
      return [a, b]
    }
    //Write a function that calculates the original product price, without VAT.
    function excludingVatPrice(price){
      return price == null? -1 : +(price / 1.15).toFixed(2);
    }
// средний бал в любом массиве
    function average(marks){
      
      return (marks.reduce((x, y) => x + y)/marks.length).toFixed(1)
      }
      console.log(average([4, 3, 4, 5, 4]));

// Найти площадь кольца
function ringSquare(r1, r2){
// let s1 = Math.PI * r1**2;
// let s2 = Math.PI * r2**2;
// return +(s1 - s2).toFixed(2)
return +(Math.PI * (r1**2 - r2**2)).toFixed(2)
}
console.log(ringSquare(5, 4));
// вернууть массив, отформатировав кажджый элемент до IDX знаков после запятой
function formatArray(arr){
  return arr.map((x,idx) => +(x).toFixed(idx));
  }
  
  //сколько жидкости выпила Клавдия?
  
  function hydrate(arr){
    let a = 0;
    for (i = 0; i < arr.length; i++) {
    a = (a + parseInt(arr[i], 10)) 
    //console.log(parseInt(arr[i]));
    }
    return `${a * 200} ml`
    }
    console.log(hydrate(['1 glass of lemonade', '1 glass of carrot juice', '2 glasses of mineral water', '2 glasses of water']));

    // best solution
    function hydrate(arr){
      let glasses = 0;
      arr.forEach(el=> glasses += parseInt(el));
      return glasses * 200 + ' ml';
    }
/////////----------------------------------------

    function getLength(arr){
      //return length of arr
      return arr.length;
    }
    console.log(getLength([1,2,3]));

    function getFirst(arr){
      //return the first element of arr
      return arr[0];
    }
    console.log(getFirst([1,2,3]));

    function getLast(arr){
      //return the last element of arr
      return arr[arr.length-1];
    }
    console.log(getLast([1,2,3]));

    function pushElement(arr){
      var el=1;
      //push el to arr
      arr.push(el);
      return arr.length;
    }
    console.log(pushElement([1,2,3]));

    function popElement(arr){
      //pop an element from arr
       arr.pop();
      return arr.length;
    }
    console.log(popElement([1,2,3]));

    //========== another solution:::::::::
    const getLength = array => array.length;

const getFirst = array => array[0];

const getLast = array => array[array.length - 1];

const pushElement = array => array.concat(0);

const popElement = array => array.splice(0, array.length - 1);
///
///
//0000000000000000000000
// In this Kata you are expected to find the coefficients of quadratic equation of 
// the given two roots (x1 and x2).

// Equation will be the form of ax^2 + bx + c = 0

// Return type is a Vector (tuple in Rust, Array in Ruby) containing coefficients 
// of the equations in the order (a, b, c).

// Since there are infinitely many solutions to this problem, we fix a = 1.

// Remember, the roots can be written like (x-x1) * (x-x2) = 0
function quadratic(x1, x2){
  let a = 1;
  let b = -x1-x2;
  c = x1 * x2;
  return [a, b, c];
}
console.log(quadratic(-4, -9));
//создать массів із чісел от 1 до n
function createArray(n){
let arr = [];
for (i=1; i<=n; i++) {
  arr.push(i)
}
return arr
}
console.log(createArray(10));
// short solution:::::
function createArray(n){
  return Array.from({length: n}, (v, i) => i+1);
}
console.log(createArray(10))
/// вернуть массив с чередованием положительных и отрицательных чисел

  function alternationArray(n){
    let arr = [0];
    for (i=1; i<=n; i++) {
    if (i %2 == 0) arr.push(i);
    if (i %2 != 0) arr.push(-i);
    }
    return arr
    }
    console.log(alternationArray(6));
// more sollution::::::::
function alternationArray(n){
  let arr = []
  for(let i = 0; i <= n; i++) {
  arr[i] = (i % 2 === 0) ? i : -i
}
return arr
}

///// вернуть тип аргумента в лоу кейсе
function type(value) {
  function type(value) {
    if ({}.toString.call(value) == '[object Array]') return 'array';
    if ({}.toString.call(value) == '[object Number]') return 'number';
    if ({}.toString.call(value) == '[object String]') return 'string';
    if ({}.toString.call(value) == '[object Boolean]') return 'boolean';
    if ({}.toString.call(value) == '[object Date]') return 'date';
    if ({}.toString.call(value) == '[object Null]') return 'null';
    if ({}.toString.call(value) == '[object Object]') return 'object';
    if ({}.toString.call(value) == '[object Undefined]') return 'undefined';
  }
}
//console.log(a);
console.log(type([]));
console.log(typeof(type([])));
// а надо так:
function type(value) {
  return {}.toString.call(value).slice(8, -1).toLowerCase();
}
/////
// Is every value in the array an array?
// This should only test the second array dimension of the array. 
// The values of the nested arrays don't have to be arrays.
// Examples:
// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false
///===========================>>>>>>>>>>>>>>>>>>>>>>>>>>
const arrCheck = value => {
  for (i=0; i < value.length; i++) {
    if({}.toString.call(value[i]) !== '[object Array]') return false;
  }
  return true
}
console.log(arrCheck([[1], [2], 66, [4]]));
///// in ONE srting!!!! >>>>>>>>>>>>>>>>>>>>>>>
//const arrCheck = a => a.every(Array.isArray) ;

/// Consider an array/list of sheep where some sheep may be missing from their place. 
//We need a function that counts the number of sheep present in the array (true means present).
function countSheeps(arrayOfSheep) {
  let count = 0;
  for (i=0; i<=arrayOfSheep.length; i++) {
    if(arrayOfSheep[i] == true)
    count++
  }
  return count
}
console.log(countSheeps([true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ]))
    /// SUPER SOLUTION :::
    function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
//You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D
// Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.
// You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). 
//If there are no bags then you can't pick anything up, so you can ignore cap.
// You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.
// If you do, return 'Clean', else return 'Cr@p'.
// Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. 
//If he is there you need to return 'Dog!!'.

//========================================================================================
function crap(x, bags, cap){
  let count = 0;
  let y = x.flat()
  for (i=0; i <= y.length; i++) {
    if(y[i] == 'D') return "Dog!!";
    if(y[i] == '@') {
      count ++
    }
    }
  return count <= bags * cap? "Clean": "Cr@p"
  }
  
  console.log(crap([['_','_','_','_'], ['_','_','_','@'], ['_','_','@', '_']], 2, 2));
  ////
  crap=(a,b,c)=>(a+"").includes("D")?"Dog!!":(a+"").split("@").length-1<=b*c?"Clean":"Cr@p"
  ////
  const crap = (x, bags, cap) =>
  `${x}`.includes(`D`) ? `Dog!!` : `${x}`.split(`@`).length > bags * cap ? `Cr@p` : `Clean`;
  ///
// In this simple exercise, you will create a program that will take two lists of integers, a and b. 
//Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. 
//You must find the difference of the cuboids' volumes regardless of which is bigger.
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. 
//Therefore, the function should return 8.
// Your function will be tested with pre-made examples as well as random ones.
// If you can, try writing it in one line of code.
function findDifference(a, b) {
  return Math.abs((a[0] * a[1] * a[2]) - (b[0] * b[1] * b[2]))
}
//------------=======00======================
function firstNonConsecutive(arr) {
  for (i=0; i <= arr.length; i++) {
    if (arr[i+1] - arr[i] > 1) return arr[i+1]
  }
    return null
  }
  console.log(firstNonConsecutive([-7,-6,-4,-3,-2,-1,1,2]));
  ////////////
  firstNonConsecutive = arr => arr.length == 1 ? null : arr[0] + 1 != arr[1] ? arr[1] : firstNonConsecutive(arr.slice(1)) 
///In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:
function pairs(array, count = 0) {
  for (let i = 0; i < array.length; i += 2)
    if (Math.abs(array[i] - array[i + 1]) === 1)
      count += 1;
  return count;
}
    
  console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]));


  // Alice's band plays a Nirvana inspired grunge and has been rated 20 for Heaviness, 
//   32 for Originality and only 18 for Outfits. Bob listens to Slayer and has gotten a good 48 for Heaviness, 
//   25 for Originality and a rather honest 40 for Outfits.

// The total score should be followed by a colon : and by one of the following quotes: 
// if Alice's band wins: Alice made "Kurt" proud! if Bob's band wins: 
// Bob made "Jeff" proud! if they end up with a draw: that looks like a "draw"! Rock on!

// The solution to the example above should therefore appear like '1, 2: Bob made "Jeff" proud!'.
function solve(a, b) {
let countA = 0;
let countB = 0;
for (i=0; i <= 3; i++) {
  if(a[i] > b[i]) countA++;
  if(a[i] < b[i]) countB++;
}
  return countA > countB ? `${countA}, ${countB}: Alice made "Kurt" proud!` 
  : countB > countA ? `${countA}, ${countB}: Bob made "Jeff" proud!`
  : `${countA}, ${countB}: that looks like a "draw"! Rock on!`
  }
  console.log(solve([47, 7, 2], [47, 7, 2]));

  //Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", 
//   where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship
//  by the rules given above.
// function points(games) {
//   var sum=0;
//   for (var i=0; i<games.length; ++i)
//   {
//     if (games[i][0]>games[i][2])
//       sum+=3;
//     if (games[i][0]==games[i][2])
//       sum+=1;
//   }
//   return sum;
// }
// console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));

function correct(string)
{
  arr = string.split('');
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == '5')
    arr[i] = 'S';
    if (arr[i] == '0')
    arr[i] = 'O';
    if (arr[i] == '1')
    arr[i] = 'I';
  }
  return arr.join('')
}
console.log(correct("L0ND0N"));

/// +++++++++++++
correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')