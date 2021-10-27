// Your solution goes here 
function isStrongPassword(x){

    if(!(x.indexOf("password"))){
        console.log("has password")
        return false;
    }
    else if(x.length<=8){
        console.log("to short")
        return false;
    }
    for(let i=0;i<x.length;i++){
        if((65<=x.charCodeAt(i) && x.charCodeAt(i)<=90)){
            console.log("no uppercase")
            return false;
        }
    }
    console.log("all good")
    return true;

}
