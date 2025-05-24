let str="Statements are unique";

function mostFrequent(str){
    let newMap=new Map();
    for(let char of str){
        if(newMap.has(char)){
            newMap.set(char,newMap.get(char)+1);
        }
        else{
            newMap.set(char,1);
        }
    }
    let maxCount=0;
    let mostFrequentChar='';
   for (let [char, count] of newMap.entries()) {
        if (count > maxCount) {
            maxCount = count;
            mostFrequentChar = char;
        }
    }
    return mostFrequentChar;
}
console.log(mostFrequent(str)); // Output: 'a' (or any other character with the same maximum frequency)