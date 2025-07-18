let arr=[4, 5, 6, 9, 10, 2, 3];

function searchTarget(arr,target){
    
    let low=0,high=arr.length-1;
   
    while(low<=high){
         const mid=Math.floor((low+high)/2)
         
         if(arr[mid]==target){
             return mid;
         }
         if(arr[low]<=arr[mid]){
             if(arr[low]<=target && target<arr[mid]){
                 high=mid-1
             }
             else{
                 low=mid+1;
             }
         }
         else{
             if(arr[mid]<=target && target<arr[high]){
                 low=mid+1
             }
             else{
                 high=mid+1;
             }
             
         }
        
    }
    return -1
    
}
console.log(searchTarget(arr,9))