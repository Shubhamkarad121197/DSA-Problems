let atmPromise=new Promise((resolve,reject)=>{
    isBalenceAvailable=false;
    
    if(isBalenceAvailable){
        resolve("You can Withdraw Money")
    }
    else{
        reject("InSufficient Funds")
    }
})

atmPromise.then((message)=>{
    console.log(message)
}).catch((error)=>{
    console.log(error);
})