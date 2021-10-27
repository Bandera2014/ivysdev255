function isStrongPassword(x){

    if((x.indexOf("password")!=-1)){
        console.log("has password")
        return false;
    }
    else if(x.length<8){
        console.log("to short: "+x.length)
        return false;
    }
    let noUppercase=true
    for(let i=0;i<x.length;i++){
        if((65<=x.charCodeAt(i) && x.charCodeAt(i)<=90)){
            noUppercase=false
        }
        console.log(x[i]+","+x.charCodeAt(i))
    }
    if(noUppercase){
        console.log("no uppercase")
        return false;
    }
    console.log("all good")
    return true;
}

console.log("\nAbc12345")
console.log(isStrongPassword("Abc12345"))
console.log("\npasswordAbc123")
console.log(isStrongPassword("passwordAbc123"))
console.log("\nabc1235U")
console.log(isStrongPassword("abc1235U"))