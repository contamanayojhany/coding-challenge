function findLongestConsecutiveSequence(numbers: number[]): number {
  if (numbers.length === 0) return 0;

  let maxLen = 1;
  let currentLength = 1;

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] !== numbers[i - 1]) {
      if (currentLength > maxLen) maxLen = currentLength;
      currentLength = 1;
    } else {
      currentLength++;
    }
  }

  return Math.max(maxLen, currentLength);
}
