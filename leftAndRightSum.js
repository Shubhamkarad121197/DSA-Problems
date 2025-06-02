let arr=[1, 2, 3, 4, 10]

// Sample Output 1
// 19 16 11 4 10


function leftAndRight(nums) {
   const n=nums.length;
   let sum=0
   for(let i=0;i<n;i++){
       sum+=nums[i]

   }
   let leftSum=0;
   const result=[]
   for(let i=0;i<n;i++){
       const rightSum=sum-leftSum-nums[i];
       result.push(Math.abs(leftSum-rightSum));
       leftSum+=nums[i]
   }
   return result;
}

console.log(leftAndRight(arr))