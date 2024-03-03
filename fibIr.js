function fib(n) {
    if (n < 2) return n;

    // return all answers in an array [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    let fibArr = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
    }
    return fibArr;
}

console.log(fib(8))
