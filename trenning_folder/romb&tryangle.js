// let str = [ ,'*', ,'*', ,'*', ,'*', ,'*', ,'*', ,'*'];

// let str = '****************';

// let triangle = '';

// for (let i = 0; i < str.length-1; i++) {
//     if (i % 2 != 0) {
//     triangle = triangle + str[i];
//     if (triangle.length % 2 != 0) {
//     // console.log(triangle);
//     if (j<=str.length-1) {
//         triangle += ' ';
//     } else {
//         triangle += str[i]
//     }
//     }
//     }
// } console.log(triangle);
//}
// console.log(str);

// чужое решение 
// let star = "*";
// let space = "";
// for (let i = 0; i <5; i++) { 
//   space = space + star;
// for (let j=0; j<i; j++)
//   space = space + star;
// console.log(space)
// }

let star = "*";
let space = " ";
let result = '';

for (let i = 0; i < 9; i++) {
    result += star;
        // for (j=0; j < 7; j++) {
        //     result = space + result;
        // }
        if (result.length % 2 != 0) {
        for (j= result.length-1; j = 0; j--) {
            //space += space[j];
            result = space[j] + result;
        }
        console.log(result);
    }
}


/////////----- САМЫЙ ЭФФКТНЫЙ СПОСОБ -------- ///////////////
  let triangleHeight = 7
for (let i = 1; i <= triangleHeight ; i++){
    let numberinRow = i
    let delta = triangleHeight-1
    let workStr = ''
    for (let k=0; k<i; k++){
        workStr = workStr + numberinRow.toString() + ' '
        numberinRow = numberinRow + delta
        delta--
    }
    console.log(workStr)
}
///////////////--------------//////////////////
function numTriangle (n) {
   let str = '';
   for (let i = 1; i <= n; i++) {
       for (let j = i, k = n, q = 1; k >= 1, q<= i; k--, q++, j+=k) {
           let space = j < 10 && (n - i + j) >= 10 ? '   ' : '  '; // пробелы
           str = str + j + space;
       }
       str += '\n';
   }
   return str; 
}
console.log(numTriangle(9));