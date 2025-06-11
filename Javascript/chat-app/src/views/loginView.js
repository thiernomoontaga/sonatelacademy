
export function loginView(){
   const boxlogin = document.createElement('div')
   boxlogin.className = 'h-[80%] w-[30%] bg-white shadow-xl rounded-xl flex flex-col'
   const TitleLogin = document.createElement('div')
   TitleLogin.className = 'bg-green-400 h-[200px] w-full object-cover rounded-b-[50px] flex justify-center items-center text-6xl text-white font-bold'
   TitleLogin.textContent = 'Chat Web'
   boxlogin.appendChild(TitleLogin)
   const messageWelcom = document.createElement('p')
   messageWelcom.innerText = 'Welcom back ! '
   messageWelcom.className = 'font-bold mt-7 text-3xl m-auto'
   boxlogin.appendChild(messageWelcom)
   const formContainer = document.createElement('form')
   formContainer.className = 'h-[300px] w-[90%] m-auto mb-[150px] flex flex-col'
   formContainer.setAttribute('id','form')
   formContainer.innerHTML = 
       ` <div class="w-full h-[100px]  flex flex-col">
            <label for="" class="text-2xl absolute ml-5 top-[39%] bg-white">Number</label>
            <input type="text" class="p-5 border-2 rounded-xl outline-none" placeholder=" Enter number" id="number" name="number">
            <small id="error-number"></small>
            </div>
            <div class="w-full h-[100px]  flex flex-col mt-7">
              <label for="" class="text-2xl absolute ml-5 top-[53%] bg-white">Password</label>
              <input type="text" class="p-5 border-2 rounded-xl outline-none" placeholder=" Enter  password" id="password" name="password">
              <small id="error-password"></small>
          </div>

          <button type="submit" class="w-full p-4 bg-green-400 text-white text-xl font-bold rounded-xl mt-5">sign in </button>`
 
   boxlogin.appendChild(formContainer)
   return boxlogin
}


