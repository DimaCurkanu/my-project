let num1 = +prompt ('first number');
let op = prompt ('operator');
let num2 = +prompt ('second number');

if (num1 === NaN || num2 === NaN ) {
     alert ('Not a number')
}
else if (op == '+') {
    alert (num1 + num2);
} else if (op == '-') {
    alert (num1 - num2);
} else if (op == '/' && num2 == '0') {
    alert ('Forbidden!')
    console.log(num2 == '0' ? `Not valid num2` : num1 / num2);  /// альтернативная команда - тернальный оператор
} else if (op == '/') {
    alert (num1 / num2);
} else if (op == '*') {
    alert (num1 * num2);
} else if (op == '**') {
    alert (num1 ** num2);
}else if (op == '//') {
    //alert (Math.pow (num1,1/num2))
    alert (num1 ** (1/num2))
} else if (op == '%') {
    alert ((num1/100) * num2);
}
else {
    alert ('Choose operator, please!');
}




