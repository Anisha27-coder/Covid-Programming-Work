var i,j,temp,min;
var arr=[10,6,3,90,77,2,6,7]
for(i=0;i<arr.length-1;i++){
    min=i;
    for(j=i+1;j<arr.length;j++){
        if(arr[j]<arr[min]){
            min=j;
        
        }
    }
    if(min!=i){
        temp=arr[min];
        arr[min]=arr[i];
        arr[i]=temp;

    }
}
console.log(arr)
