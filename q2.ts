export default function isPalindrome(string: string){
    if (string === string.split('').reverse().join('')){
        return true;
    }
};