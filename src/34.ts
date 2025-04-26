function sumUpToN(n: number): number {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

console.log(sumUpToN(5));
