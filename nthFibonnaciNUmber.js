function nthFibonnaci(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    return (nthFibonnaci(n-1)+nthFibonnaci(n-2))
}

console.log(nthFibonnaci(10))



function generateFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

let result = generateFibonacci(50);
console.log(result);
