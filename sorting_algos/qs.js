var x ,n=100
function Division(x,n){
    if(n<=1){
        return x
    }else{
        return x*Division(x,n-1)
    }

}
const result=(Division(2,n))
console.log("result..",result)

