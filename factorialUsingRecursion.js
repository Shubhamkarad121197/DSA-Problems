// Online Javascript Editor for free
function factorialofNum(n){
    if(n==0){
        return
    }
    if(n==1){
        return 1;
    }
    return n*factorialofNum(n-1)
}
console.log(factorialofNum(5))//120
console.log(factorialofNum(0))//1
console.log(factorialofNum(1))//1