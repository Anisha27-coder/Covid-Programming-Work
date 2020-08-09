var i,j,min;
var arr=[10,8,4,5,2,1,7]
const sort = (arr)=>{
    for(i=0;i<arr.length;++i){
        min=arr[i];
        j=i-1;
        while(j>=0 &&arr[j]>min){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=min;
    }
    return(arr)

}
console.log(sort(arr))

