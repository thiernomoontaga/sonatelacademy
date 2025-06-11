import {navigateTo} from '../router.js'

export function loginController(){
   const form = document.querySelector('form')
   if(!form){
     return
   }
   form.addEventListener('submit',(e)=>{
      e.preventDefault()
      const formData = e.currentTarget
      const data = new FormData(formData)
      const inputNumber = data.get('number')
      const inputPassword = data.get('password')
      const regex = /^(\+221)?[ -]?(7[05678])[ -]?[0-9]{3}[ -]?[0-9]{2}[ -]?[0-9]{2}$/
      if(regex.test(inputNumber) && inputPassword === '123'){
        navigateTo('#/chat')
      }

   })
}



