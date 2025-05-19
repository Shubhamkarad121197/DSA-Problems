// let str="I am Shubham";
// function reverseChar(str){
//   let wordsArr=str.split(' ');
//   let reverseArr=[]
//  wordsArr.map((res)=>{
//      reverseArr.push(res.split('').reverse().join(''))
     
//  })
//   return reverseArr.join(' ')
// }

// console.log(reverseChar(str))


let str = "I am Shubham";

function reverseChar(str) {
  let words = [];
  let word = "";
  
  // Manually split the string by spaces
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === " " || i === str.length) {
      words.push(word);
      word = "";
    } else {
      word += str[i];
    }
  }

  let result = "";
  
  // Reverse each word manually
  for (let i = 0; i < words.length; i++) {
    let reversedWord = "";
    let currentWord = words[i];
    for (let j = currentWord.length - 1; j >= 0; j--) {
      reversedWord += currentWord[j];
    }

    // Add to result with space (skip space after last word)
    result += reversedWord;
    if (i < words.length - 1) {
      result += " ";
    }
  }

  return result;
}

console.log(reverseChar(str)); // Output: "I ma mahbuhS"

