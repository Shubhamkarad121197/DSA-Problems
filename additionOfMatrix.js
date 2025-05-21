let a=[
        [1 ,2 ,3],
        [4 ,5 ,6]
      ];
let b=[
        [1 ,1 ,1],
        [1 ,1 ,1]
      ]
      
function additionOfMatrix(mat1,mat2){
    let result=[]
    let n=mat1.length;
    let m=mat1[0].length;
    for(let i=0;i<n;i++){
        let row=[]
        for(let j=0;j<m;j++){
            row.push(mat1[i][j]+mat2[i][j])
        }
        result.push(row)
    }
    return result;
}


console.log(additionOfMatrix(a,b)) // [[2,3,4],[5,6,7]]
// Time complexity: O(n*m)
// Space complexity: O(n*m)
// where n is the number of rows and m is the number of columns in the matrix

// The time complexity is O(n*m) because we are iterating through each element of the matrix once.
// The space complexity is O(n*m) because we are creating a new matrix of the same size to store the result.