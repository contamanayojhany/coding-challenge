function isPerfectSquare(n: number): boolean {
    let root = Math.floor(Math.sqrt(n));
    return n === root * root;
}
