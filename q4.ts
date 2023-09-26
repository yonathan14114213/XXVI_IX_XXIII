export default function sqrt(num:number){
    if (num<0) {throw new Error()}
    return num**0.5
};