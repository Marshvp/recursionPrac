// fib function using recursion

function fib(n, fibArr = [0, 1]) {
    // return as an array [0, 1, 1, 2, 3, 5, 8, 13, 21]
    if (n <= 2) return fibArr.slice(0, n);
    if (fibArr.length >= n) return fibArr


    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
    return fib(n, fibArr);
    
}

console.log(fib(8)) // 13
