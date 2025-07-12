// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// Input:  s = "leetcode"
// Output: 0

// Input:  s = "loveleetcode"
// Output: 2

// Input:  s = "aabb"
// Output: -1

let string="loveleetcode";

function firstNonRepeating(str){
    let newMap=new Map();
    for(let char of str){
        if(newMap.has(char)){
            newMap.set(char,newMap.get(char)+1)
        }
        else{
              newMap.set(char,1)
        }
    }
    let i=0
    for(let [val,count] of newMap.entries()){
        
        if(count==1){
          return str.indexOf(val)
        }
       
       
    }
    return -1
}
console.log(firstNonRepeating(string))