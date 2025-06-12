<<<<<<< HEAD
const BASE_URL = 'http://localhost:3000'
export async function apiFetch(endpoint,options = {}){
    const url = `${BASE_URL}${endpoint.starWith('/') ? endpoint : `/${endpoint}`}`
    const response = await fetch(url,{
        headers:{
            "Content-Type":"Application/json",
            ...(options.headers || {})
        },
        ...options
    })
    if(!response.ok === true){
        throw  new console.error('probleme with the server')
    }
    return response.json()
}




































// export function apiFetch(endpoint, options = {}) {
//   return fetch(`${BASE_URL}${endpoint}`, {
//     headers: {
//       "Content-Type": "application/json",
//       ...(options.headers || {}),
//     },
//     ...options,
//   })
//     .then(response => {
//       if (!response.ok) {
//         return response.json().then(err => {
//           throw new Error(err.message || "Erreur serveur.");
//         });
//       }
//       return response.json();
//     })
//     .catch(err => {
//       console.error("Erreur API :", err);
//       throw err;
//     });
// }
=======
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

>>>>>>> connexion-feature
