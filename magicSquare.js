
let matrix=
[
    [4,9,2],
    [3,5,7],
    [8,1,6]
]

function checkMagicSquare(n,matrix)
{
    let sum=0;
    //step1 sum of row1
    for(let j=0;j<n;j++){
        sum+=matrix[0][j]
    }
    //step2 sum of all rows
    for(let i=0;i<n;i++){
        let rowSum=0
        for(j=0;j<n;j++){
            rowSum+=matrix[i][j]
        }
        if(rowSum!=sum){
            return false;
        }
    }
     //step3 sum of all columns
    for(let j=0;j<n;j++){
        let colSum=0
        for(i=0;i<n;i++){
            colSum+=matrix[i][j];
        }
        if(colSum!=sum){
            return false;
        }
    }
    
    //step4 for sum of primary Diagonal
    
    let diagonalSum=0;
    for(let i=0;i<n;i++){
        diagonalSum+=matrix[i][i]
    }
    if(diagonalSum!=sum){
        return  false;
    }
    
    //step5 Sum for secondaryDiagonal
     let secondaryDiagonalSum=0;
    for(let i=0;i<n;i++){
        secondaryDiagonalSum+=matrix[i][n-i-1]
    }
    if(diagonalSum!=sum){
        return  false;
    }
    
    return true;
}

console.log(checkMagicSquare(3,matrix))