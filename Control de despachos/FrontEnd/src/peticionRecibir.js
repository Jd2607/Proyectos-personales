const token = localStorage.getItem("token")

export async function recibir(url){
    const path = new URL(url)
    const result = await fetch(path,{
        headers: {
            "content-type":"application/json",
            "authorization": `Bearer ${token}`
        }
    })
    return await result.json()
}