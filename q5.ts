export default function sumArray (arr: number[]){
    let sum = 0;
    for (let i = 0; i< arr.length; i++){
        sum += arr[i]
    }
    return sum
}