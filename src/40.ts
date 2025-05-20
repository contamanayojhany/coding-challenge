function isPalindrome(str: string): boolean {
    let leftIndex = 0;
    let rightIndex = str.length - 1;

    while (leftIndex < rightIndex) {
        if (str[leftIndex] !== str[rightIndex]) {
            return false;
        }
        leftIndex++;
        rightIndex--;
    }

    return true;
}

function calculateGCD(a: number, b: number): number {
    let greatestCommonDivisor = a % b;

    while (greatestCommonDivisor !== 0) {
        a = b;
        b = greatestCommonDivisor;
        greatestCommonDivisor = a % b;
    }

    return b;
}

function reverseString(input: string): string {
    return input.split('').reverse().join('');
}
