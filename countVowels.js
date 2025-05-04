let str="Shubham";

function countVowels(str){
    let vowels=['a','e','i','o','u'];
    let count=0;
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i].toLowerCase())){
            count++;
        }
    }
    return count;
}
console.log(countVowels(str))//2


//Using Two Pointers

let str1="Shubham Karad";

function countVowels(str){
    let vowels=new Set(['a','e','i','o','u','A','E','I','O','U']);
    let count=0;
    let left=0,right=str.length-1;
    while(left<right){
        if(vowels.has(str[left])) count++;
        if(vowels.has(str[right])) count++;
        left++;
        right--;
    }
    return count;
}

console.log(countVowels(str1))//