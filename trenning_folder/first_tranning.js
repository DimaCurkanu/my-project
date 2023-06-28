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

