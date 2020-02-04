let num = 4936;
console.log(`Number is: ${num}`);

let ones = num % 10;
console.log(`Units are: ${ones}`);

num = (num - ones) / 10;
let tens = num % 10;
console.log(`Tens are: ${tens}`);

num = (num - tens) / 10;
let hundreds = num % 10;
console.log(`Hundreds are: ${hundreds}`);

num = (num - hundreds) / 10;
let thousands = num;
console.log(`Thousands are: ${thousands}`);
