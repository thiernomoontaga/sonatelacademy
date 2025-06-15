import { apiFetch } from "./api.js";
export async function authentification(){
   try{
      const users = await apiFetch('/users',{
        method:'GET',
        headers:{
          "Accept":"Application/json"
        }
       })
      return users
   }
   catch(error){
      console.error('error ! :',error)
  }
}


