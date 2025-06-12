import { apiFetch } from '../services/api.js'
import {navigateTo} from '../router.js'
import {authentification} from '../services/authService.js'
export  function loginController(){
   const form = document.querySelector('form')
   if(!form){
     return
   }
   form.addEventListener('submit', async(e)=>{
      e.preventDefault()
      const formData = e.currentTarget
      const data = new FormData(formData)
      const Number = data.get('number').trim()
      const Password = data.get('password').trim()
      const regex = /^(\+221)?[ -]?(7[05678])[ -]?[0-9]{3}[ -]?[0-9]{2}[ -]?[0-9]{2}$/
      const inputNumber = document.querySelector('#number') 
      const inputPassword = document.querySelector('#password') 
      const errorNumber = document.createElement('small')
      const errorPassword = document.createElement('small')
      const errorNumberExist = document.querySelector('#error-number')
      const errorPasswordExist = document.querySelector('#error-password')
      const users = await authentification()
      const user = users.find(u => u.Number === Number && u.Password === Password)
    
      if(errorNumberExist){
         errorNumberExist.remove()
      }
      if(errorPasswordExist){
         errorPasswordExist.remove()
      }
      if(!regex.test(Number) || Number === '' || !users.find(u => u.Number === Number)){
         errorNumber.className = 'text-xl ml-2 mt-2 text-red-600'
         errorNumber.textContent = 'empty field or invalid number !'
         errorNumber.setAttribute('id','error-number')
         inputNumber.insertAdjacentElement('afterend',errorNumber)
      }
      if(!users.find(u => u.Password === Password) || Password === ''){
         errorPassword.className = 'text-xl ml-2  mt-2 text-red-600'
         errorPassword.textContent = 'empty field or invalid password !'
         errorPassword.setAttribute('id','error-password')
         inputPassword.insertAdjacentElement('afterend',errorPassword)
      }
      if(user){
         navigateTo('#/home')
      }
   })
}



