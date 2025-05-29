let arr1=[1, 2, 3]

let arr2=[2 ,5, 6];

function mergeSortedArr(arr1,arr2){
    let m=arr1.length;
    let n=arr2.length;
    let mergeArray=[];
    let i=0,j=0;

    while(i<m && j<n){
        if(arr1[i]<arr2[j]){
            mergeArray.push(arr1[i])
            i++
        }
        else{
            mergeArray.push(arr2[j]);
            j++;
        }
    }
    while(i<m){
        mergeArray.push(arr1[i])
        i++;
    }
     while(j<n){
        mergeArray.push(arr2[j])
        
        j++;
    }
    return mergeArray
}

console.log(mergeSortedArr(arr1,arr2))