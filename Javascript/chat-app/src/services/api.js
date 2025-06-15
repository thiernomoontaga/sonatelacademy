const Base_url = 'http://localhost:3000'
export async function apiFetch(endpoint,options = {}){
   const url = `${Base_url}${endpoint}`
   const response = await fetch(url,{
    headers:{
      "Content-Type":"Application/json",
      ...(options.headers || {})
    },
    ...options
   })
   if(!response.ok === true){
     throw new Error("problem with the server")
   }
   return response.json()
}

