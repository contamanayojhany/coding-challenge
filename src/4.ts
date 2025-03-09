const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomNumber(1, 10));
