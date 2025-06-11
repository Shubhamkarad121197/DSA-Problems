function peakElement(N,nums) {
   let maxNum=0;
   for(let i=0;i<N;i++){
       if(maxNum<nums[i]){
           maxNum=nums[i];
           
           
       }
   }

   return nums.indexOf(maxNum);
}
console.log(peakElement(5, [1, 3, 20, 4, 1])); // Output: 2 (20 is a peak)
console.log(peakElement(3, [10, 20, 15]));     // Output: 1 (20 is a peak)
console.log(peakElement(1, [5]));              // Output: 0 (only one element)