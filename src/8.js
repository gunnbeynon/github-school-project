// Random NodeJS Code
const numbers = Array(10).fill().map(() => Math.floor(Math.random() * 10));
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
