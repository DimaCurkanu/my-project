// Underweight (below 18.5), Heavy Weight (18.5 - 24.9), 
// Overweight (25.0 - 29.9), Obesity (30.0 and above)


let firstName = prompt ('Your name please!');
let weight = prompt ('Please enter your weight');
let heigth = prompt ('How high are you?');
let bmi = ((weight / heigth)**2);
let result = bmi.toFixed(2);
// console.log(bmi.toFixed(2));
// alert (`Hello, ${firstName}, your BMI is ${result} `);
if (result >= 0.25 && result <= 0.33) {
    alert (`${firstName}, Go to GYM!`);
}
 else if (result >= 0.20 && result <= 0.249) {
    alert (`${firstName}, Go to Model Business!`);
 }
 else if (result >= 0.33 && result <= 0.50) {
    alert (`${firstName}, Go to doctor!`);
 }
 else if (result <= 0.19) {
    alert (`${firstName}, Go to kitchen!`);
 }