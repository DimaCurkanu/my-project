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
