export default function fibonaccy(arr:number[]){
    let flag = true;
    for (let i = arr.length-1; i>0; i--){
        if (arr[i]-(arr[i-1]+arr[i-2])!==0) {
            flag = false;
        }
    }
    if (flag === false){
        throw new Error
    }else{
    return arr[arr.length-2]+arr[arr.length-1]
}}