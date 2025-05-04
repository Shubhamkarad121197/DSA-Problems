let str="i am shubham karad";
function capatalizeFirstChar(arr){
    let splitedArr=arr.split(' ');
    let result=[]
    for(let i=0;i<splitedArr.length;i++){
        let word=splitedArr[i];
        result.push(word[0].toUpperCase()+word.slice(1))
    }

    return result.join(' ')

}
console.log(capatalizeFirstChar(str))//I Am Shubham Karad