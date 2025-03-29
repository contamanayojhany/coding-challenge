function sumFirstLastNumbers(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Array cannot be empty");
  }
  
  const firstNumber = numbers[0];
  const lastNumber = numbers[numbers.length - 1];
  return firstNumber + lastNumber;
}
