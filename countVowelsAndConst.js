// Problem Description
// Given a string, write a program to check if it consists of equal number of vowels and consonants.

// Input format
// First line contains an string str consisting of lowercase english alphabets.

// Output format
// Return true if the string contains equal number of vowels and consonants else return false.

// Sample Input 1
// ab

// Sample Output 1
// true

// Explanation
// string "ab" contains one vowel (a) and one consonant (b).

// Constraints
// 1 <= str.length <= 10^5


let str="aabbcceedo";
function equalVowelsAndCount(str){
    let vowels=new Set(['a','e','i','o','u']);
    let countVowels=0;
    let countConst=0;
    for(let i=0;i<str.length;i++){
        if(vowels.has(str[i])){
            countVowels++;
        }
        else if(str[i]>="a" || str[i]<="z"){
            countConst++
            
        }
    }
    return countVowels==countConst
}

console.log(equalVowelsAndCount(str))// true
// Time complexity: O(n)
// Space complexity: O(1)
// where n is the length of the string
// The time complexity is O(n) because we are iterating through each character of the string once.
// The space complexity is O(1) because we are using a constant amount of space to store the counts of vowels and consonants.
// The space complexity is O(1) because we are using a constant amount of space to store the counts of vowels and consonants.