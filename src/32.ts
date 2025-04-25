function findSum(numbers: number[]): number {
  let sum = 0;
  numbers.forEach((num) => {
    sum += num;
  });
  return sum;
}

console.log(findSum([1, 2, 3, 4]));
