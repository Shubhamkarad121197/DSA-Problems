function leapYear(N){
    if((N%4==0 && N%100!=0)||(N%400==0)){
        return `${N} is a Leap Year`
    }
    return   `${N} is not a Leap Year`
}

console.log(leapYear(1600))
console.log(leapYear(1800))