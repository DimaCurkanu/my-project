/////   волк в стаде овец  /////// - https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/javascript

function warnTheSheep (queue) {
    if (queue.indexOf('wolf') == queue.length -1) return `Pls go away and stop eating my sheep`;
    let r = queue.indexOf('sheep', queue.lastIndexOf('wolf'))
    return `oi! sheep number ${r}! You are about to be eaten by a wolf!`
  }
  console.log(warnTheSheep (['wolf', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep']))
  
  
  ///// суррикаты голова -  тело - ноги /// переворачивать слова с массиве !!!!
  
  let arr1 = ['tail', 'body', 'head', 'legs'];
  
  function fixTheMeerkat (arr) {
    let arrTemp = []
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split('').reverse().join('');
     //return arr1.split('').reverse().join('');
     arrTemp.push(arr[i].split('').reverse().join(''))
    }
    return arr;
  }
  console.log(fixTheMeerkat(arr1));
  
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