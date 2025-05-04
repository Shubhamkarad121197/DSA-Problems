let string="shubham";
function reverseString(str){
    let left=0,right=string.length-1;
    let char=str.split('')
    while(left<right){
        [char[left],char[right]]=[char[right],char[left]];
        left++;
        right--;

    }

    return char.join('')

}

console.log(reverseString(string));

// Time Complexity (TC):
// O(n) — Each character is visited once during the swaps.

// ✅ Space Complexity (SC):
// O(n) — Because str.split('') creates a new array of characters.


function reverseStringInbuilt(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString(string));
