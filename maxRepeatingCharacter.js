let wordsArr=["hello","world","crio","crio"];

function maxRepeatingWord(arr){
    let newMap=new Map();
    for(let word of arr){
        if(newMap.has(word)){
            newMap.set(word,newMap.get(word)+1)
        }
        else{
            newMap.set(word,1)
        }
    }
    let maxCount=0;
    let maxFruit=0;
    for(let [fruit,count] of newMap.entries()){
        if(maxCount<count){
           
            maxFruit=fruit
        }
    }
    return maxFruit;
}

console.log(maxRepeatingWord(wordsArr)) //crio
// console.log(maxRepeatingWord(["apple","banana","apple","orange","banana","apple"])) //apple
// console.log(maxRepeatingWord(["apple","banana","orange"])) //apple
// console.log(maxRepeatingWord(["apple","banana","orange","banana"])) //banana