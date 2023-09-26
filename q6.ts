export default async function fetchUserData(id:number){
    const data = await fetch(`https:/jsonplaceholder.typicode.com/users/${id}`)
    const ans = await data.json()
    return ans
}