let num1 = +prompt ('first number');
let op = prompt ('operator');
let num2 = +prompt ('second number');

switch (op) {
    
    case '/': 
    Number.isNaN(num1) || Number.isNaN(num2); alert ('Don`t joke!!!'); 
    if (op == '/' && num2 == 0) {
        alert ('No!!!');
    } else if ( (num1/1) == NaN || num2/1 == NaN) {
        alert ('No!!!');
    } else {
        alert (num1/num2);
    };
    break;
    case '+': 
    Number.isNaN(num1) || Number.isNaN(num2); alert ('Don`t joke!!!');
    if (num1 == NaN || num2 == NaN) {
        alert ('No!!!');
    } else {
    alert (num1 + num2); 
    };
    break;
    case '-': alert (num1-num2);
    Number.isNaN(num1) || Number.isNaN(num2); alert ('Don`t joke!!!');
    break;
    case '*': alert (num1 * num2);
    Number.isNaN(num1) || Number.isNaN(num2); alert ('Don`t joke!!!');
    break;

    case '**': alert (num1 ** num2);
    Number.isNaN(num1) || Number.isNaN(num2); alert ('Don`t joke!!!');
    break;
    case '//': alert (num1 ** (1/ num2));
    Number.isNaN(num1) || Number.isNaN(num2); alert ('Don`t joke!!!');
    break;
    case '%': alert ((num1/100) * num2);
    Number.isNaN(num1) || Number.isNaN(num2); alert ('Don`t joke!!!');
    break;
    
    default: alert ('Enter only number')
}

// let e = 'adfg';

// console.log(e/1);
// console.log(typeof (e/1));
// console.log(typeof e);


function calculator (num1, num2, op) {
    if (typeof num1 != 'number' || typeof num2 != 'number' ) return 'Don`t joke!'
    if (op == '+')return num1 + num2;
    if (op == '-')return num1 - num2;
    if (op == '/'&& num2 == 0)return 'Forbidden!';
    if (op == '/')return num1 / num2;
    if (op == '*')return num1 * num2;
    if (op == '**')return num1 ** num2;
    if (op == '%')return (num1/100) * num2 + '%';
}
console.log(calculator('jhg',100, '%'));