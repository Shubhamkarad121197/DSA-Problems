function rotateMatrix(n,matrix){
    let rotedMatrix=Array.from({ length: n }, () => Array(n).fill(0));
    for(let i=0;i<n;i++){
         
        for(let j=0;j<n;j++){
          rotedMatrix[j][n-i-1]=matrix[i][j]
        }
        
    }
    return rotedMatrix;
}
let matrix=[[1,2,3],[4,5,6],[7,8,9]];
console.log(rotateMatrix(3,matrix));