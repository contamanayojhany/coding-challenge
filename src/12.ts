export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNumber = getRandomNumber(10, 20);
console.log(`The random number is ${randomNumber}`);
