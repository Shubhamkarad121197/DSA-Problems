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