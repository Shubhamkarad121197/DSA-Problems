function NaturalSum(n){
    if(n<0){
        return false;
    }
    let sum=n*(n+1)/2 ;
    
    return sum;
}

console.log("Natural Sum Of 10",NaturalSum(10))
console.log("Natural Sum Of 20",NaturalSum(20))
console.log("Natural Sum Of 30",NaturalSum(30))