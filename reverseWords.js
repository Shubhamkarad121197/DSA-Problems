let str="Shubham karad";

function reverseWord(str){
    let wordArr=str.split(' ');
    for(let i=0;i<wordArr.length;i++){
        for(let j=0;j<wordArr.length;j++){
            if(wordArr[i]>wordArr[j]){
                [wordArr[i],wordArr[j]]=[wordArr[j],wordArr[i]]
            }
        }
    }
    return wordArr.join(' ')
}
console.log(reverseWord(str)) //karad Shubham


// let str = "Shubham karad";

// function reverseWordsWithoutSplit(str) {
//     let words = [];
//     let word = "";

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === " ") {
//             if (word.length > 0) {
//                 words.push(word);
//                 word = "";
//             }
//         } else {
//             word += str[i];
//         }
//     }

//     // Push the last word if any
//     if (word.length > 0) {
//         words.push(word);
//     }

//     // Reverse the array of words
//     let reversedStr = "";
//     for (let i = words.length - 1; i >= 0; i--) {
//         reversedStr += words[i];
//         if (i !== 0) reversedStr += " ";
//     }

//     return reversedStr;
// }

// console.log(reverseWordsWithoutSplit(str)); // Output: karad Shubham
