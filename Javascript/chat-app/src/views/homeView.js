export function homePage(){
const containerPage = document.createElement('div')
    containerPage.className = 'flex w-[80%] h-[90%] bg-white rounded-xl shadow-2xl'
    containerPage.setAttribute('id','app')
  const sidebar = document.createElement('div')
    sidebar.className = 'bg-with-50 w-[8%] h-[100%]  rounded-l-xl shadow-2xl border-r-2 flex flex-col items-center'
    sidebar.setAttribute('id','sidebar')
    sidebar.innerHTML = 
    `<div class="h-14 w-14 rounded-full bg-gray-200 flex mt-11 relative">
        <img src="/src/assets/images/WhatsApp Image 2025-03-16 at 01.13.20.jpeg" alt="" class="h-14 w-14 rounded-full object-cover flex">
    <div class="h-3 w-3 rounded-full bg-green-400 mt-11 ml-9 absolute">
      </div>
      </div>
      <button class=" mt-[50px] hover:bg-green-400 h-16 w-20 flex justify-center items-center rounded-lg" id="home">
        <i class="fa-solid fa-house fa-2xl" style="color: #e6e6e6 "></i>
      </button>
      <button class=" mt-[20px] hover:bg-green-400 h-16 w-20 flex justify-center items-center rounded-lg" id="calendar">
        <i class="fa-solid fa-calendar-days fa-2xl" style="color: #e6e6e6;"></i>
      </button>
      <button class=" mt-[20px] hover:bg-green-400 h-16 w-20 flex justify-center items-center rounded-lg" id="chat">
        <i class="fa-solid fa-comment fa-2xl" style="color: #e6e6e6;"></i>
      </button>
       <button class=" mt-[20px] hover:bg-green-400 h-16 w-20 flex justify-center items-center rounded-lg" id="chat">
       <i class="fa-solid fa-user-group fa-2xl" style="color: #e6e6e6;"></i>
      </button>
      <button class=" mt-[20px] hover:bg-green-400 h-16 w-20 flex justify-center items-center rounded-lg" id="settings">
        <i class="fa-solid fa-gear fa-2xl" style="color: #e6e6e6;"></i>
      </button>
      <button class=" mt-[180px] hover:bg-green-400 h-16 w-20 flex justify-center items-center rounded-lg" id="logout">
        <i class="fa-solid fa-right-from-bracket fa-2xl" style="color: #e6e6e6;"></i>
      </button>
    `
    const containInteraction = document.createElement('div')
      containInteraction.className = 'w-[35%] h-[100%] bg-white  flex flex-col'
      containInteraction.setAttribute('id','contain')

      containInteraction.innerHTML = `
      <div class="h-[630px]  flex flex-col bg-white" id="containItem">
           <div class=" w-[90%] h-[55px]  mt-7 flex flex-col justify-center items-center border-2 rounded-3xl ml-6 bg-slate-50" >
          <input type="text" name="" id="" class="relative p-3   outline-none w-[80%] bg-slate-50 " placeholder="search">
          <i class="fa-solid fa-magnifying-glass absolute left-[17%]" style="color: #e6e6e6;"></i>
          </div>
      </div>
     
    <button class="h-14 w-14 rounded-full bg-green-400 flex justify-center items-center mt-[80px] ml-[400px]  outline-none" id="button-add">
           <i class="fa-solid fa-plus fa-xl" style="color: #ffffff;"></i>
    </button>
    <div class="modal1 border-none relative hidden " id="modal" aria-hidden="true"  role="dialog" >
      <div class="js-modal js-stop h-[200px] w-[300px] bg-white absolute left-32 bottom-[3.2rem] rounded-2xl shadow-2xl flex flex-col justify-center items-center text-xl">
        <button class="flex flex-row gap-3 items-center p-5 hover:bg-gray-200 rounded-xl" id="add-contact">
          <i class="fa-solid fa-address-card fa-2xl" style="color: #40dd8c;"></i>
          <span>Add a contact</span>
        </button>
       
        <button class="flex flex-row gap-3 items-center mt-4 p-5 hover:bg-gray-200 rounded-xl" id="add-group">
          <i class="fa-solid fa-user-group fa-2xl mr-4" style="color: #40dd8c; "></i>
          <span>Add a group</span>
        </button>
      </div>
    </div>
      `
    const containMessage =document.createElement('div')
    containMessage.className = 'flex w-[57%] h-[100%] bg-slate-100 rounded-r-xl flex-col'
    containMessage.innerHTML = 
       `<div class="w-full h-full flex justify-center items-center">
          <img src="/src/assets/images/7922058-removebg-preview.png" alt="" class="object-cover h-[350px] w-[350px] ">
        </div>`
    containerPage.appendChild(sidebar)
    containerPage.appendChild(containInteraction)
    containerPage.appendChild(containMessage)
    const app = document.querySelector('#body-app')
    app.appendChild(containerPage)


    const buttonAdd = document.querySelector('#button-add')
    let close = null
    const modal = document.querySelector('.modal1')
    const showchoiceForm = function(e){
      e.preventDefault()
      modal.classList.remove('hidden')
      modal.setAttribute('aria-hidden', 'true')
      modal.removeAttribute('aria-hidden')
      close = modal
      close.addEventListener('click',closeModal)
      document.querySelector('.js-stop').addEventListener('click',stopPropagation)
    }
    const closeModal = function(e){
      e.preventDefault()
      if(close === null) return
        close.classList.add('hidden')
        close.removeAttribute('aria-modal')
        close.setAttribute('aria-hidden','true')
        document.querySelector('.js-stop').removeEventListener('click',stopPropagation)
        close = null
    }
    const stopPropagation = function(e){
      e.stopPropagation()
    }
    buttonAdd.addEventListener('click',showchoiceForm)
    window.addEventListener('keydown',(e)=>{
      if(e.key === 'Escape' || e.key === 'Esc'){
        closeModal(e)
      }
    })
   
}


