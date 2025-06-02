//  Longest Substring Without Repeating Characters

let s="abcabcbb"; // Output: 3

function lengthOfLongestSubstring(s){
    let left=0;
    let set=new Set();
    let maxLength=0;
    for(let right=0;right<s.length;right++){
        while(set.has(s[right])){
            set.delete(s[right]);
            left++
        }
        set.add(s[right]);
        maxLength=Math.max(maxLength,right-left+1)
    }
    return maxLength;
}

console.log(lengthOfLongestSubstring(s))