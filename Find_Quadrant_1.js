function findQuadrant(x,y){
    if(x==0||y==0){
        return false;
    }
    if(x>0 && y>0){
        return "Quadrant 1"
    }
    else if(x<0 && y>0){
        return "Quadrant 2"
    }
    else if(x<0 && y<0){
        return "Quadrant 3"
    }
    else{
        return "Quadrant 4"
    }

}

console.log(findQuadrant(1,4))
console.log(findQuadrant(-1,4))
console.log(findQuadrant(-1,-4))
console.log(findQuadrant(1,-4))