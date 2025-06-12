export function homePage(){
const containerPage = document.createElement('div')
    containerPage.className = 'flex w-[80%] h-[90%] bg-white rounded-xl shadow-2xl'
    containerPage.setAttribute('id','app')
  const sidebar = document.createElement('div')
    sidebar.className = 'bg-with-50 w-[8%] h-[100%]  rounded-l-xl shadow-2xl border-r-2 flex flex-col items-center'
    sidebar.innerHTML = 
    `<div class="h-14 w-14 rounded-full bg-gray-200 flex mt-11 relative">
        <img src="/src/assets/images/WhatsApp Image 2025-03-16 at 01.13.20.jpeg" alt="" class="h-14 w-14 rounded-full object-cover flex">

            <div class="h-3 w-3 rounded-full bg-green-400 mt-11 ml-9 absolute">
      </div>
      </div>
      <div class=" mt-[70px] hover:bg-green-400 h-14 w-20 flex justify-center items-center rounded-lg">
        <i class="fa-solid fa-house fa-2xl" style="color: #e6e6e6 "></i>
      </div>
      <div class=" mt-[40px] hover:bg-green-400 h-14 w-20 flex justify-center items-center rounded-lg">
        <i class="fa-solid fa-calendar-days fa-2xl" style="color: #e6e6e6;"></i>
      </div>
      <div class=" mt-[40px] hover:bg-green-400 h-14 w-20 flex justify-center items-center rounded-lg">
        <i class="fa-solid fa-comment fa-2xl" style="color: #e6e6e6;"></i>
      </div>
      <div class=" mt-[40px] hover:bg-green-400 h-14 w-20 flex justify-center items-center rounded-lg">
        <i class="fa-solid fa-gear fa-2xl" style="color: #e6e6e6;"></i>
      </div>
      <div class=" mt-[250px] hover:bg-green-400 h-14 w-20 flex justify-center items-center rounded-lg">
        <i class="fa-solid fa-right-from-bracket fa-2xl" style="color: #e6e6e6;"></i>
      </div>
    `
    const containInteraction = document.createElement('div')
      containInteraction.className = 'w-[35%] h-[100%] bg-white  flex flex-col'
      containInteraction.setAttribute('id','contain')
      containInteraction.innerHTML = `<div class=" w-[90%] h-[55px]  mt-7 flex flex-col justify-center items-center border-2 rounded-3xl ml-6 bg-slate-50">
        <input type="text" name="" id="" class="relative p-3   outline-none w-[80%] bg-slate-50 " placeholder="Search">
        <i class="fa-solid fa-magnifying-glass absolute left-[19%]" style="color: #e6e6e6;"></i>
      </div>
      <div class="w-[100%] h-[100px] hover:bg-green-200 mt-5 rounded-xl flex flex-row items-center">
          <div class="h-14 w-14 rounded-full bg-gray-200 ml-7 flex relative">
            <img src="/src/assets/images/back.jpg" alt="" class="h-14 w-14 rounded-full object-cover flex">
            <div class="h-3 w-3 rounded-full  mt-11 ml-9 bg-gray-400 absolute"></div>
          </div>
          <div class="ml-10">
            <h3 class="font-bold text-xl"> Bakary Diassy</h3>
            <p class="mt-1">boy boulma sakeitooooo !! </p>
          </div>
          <p  class="mb-8 ml-[110px]">
            22 mars 
          </p>
      </div>
      <div class="w-[100%] h-[100px] hover:bg-green-200 mt-5 rounded-xl flex flex-row items-center">
        <div class="h-14 w-14 rounded-full bg-gray-200 ml-7 flex relative">
          <img src="/src/assets/images/DSC08018.jpg" alt="" class="h-14 w-14 rounded-full object-cover flex">
          <div class="h-3 w-3 rounded-full  mt-11 ml-9 bg-green-400 absolute"></div>
        </div>
        <div class="ml-10">
          <h3 class="font-bold text-xl"> Jeery </h3>
          <p class="mt-1">hello bro ! </p>
        </div>
        <p  class="mb-8 ml-[220px]">
          5mn ago
        </p>
      </div>
      <button class="h-14 w-14 rounded-full bg-green-400 flex justify-center items-center mt-[360px] ml-[420px] outline-none" id="button-add">
        <i class="fa-solid fa-plus fa-xl" style="color: #ffffff;"></i>
      </button>
      <div class="modal1 border-none relative hidden " id="modal" aria-hidden="true"  role="dialog" >
        <div class="js-modal js-stop h-[200px] w-[300px] bg-white absolute left-32 bottom-[2.5rem] rounded-2xl shadow-2xl flex flex-col justify-center items-center text-xl">
          <button class="flex flex-row gap-3 items-center p-5 hover:bg-gray-200 rounded-xl" id="add-contact">
            <i class="fa-solid fa-address-card fa-2xl" style="color: #40dd8c;"></i>
            <span>Add a contact</span>
          </button>
          <div class="">
            <form action=""></form>
          </div>
          <button class="flex flex-row gap-3 items-center mt-4 p-5 hover:bg-gray-200 rounded-xl" id="add-group">
            <i class="fa-solid fa-user-group fa-2xl mr-4" style="color: #40dd8c; "></i>
            <span>Add a group</span>
          </button>
      </div>
    </div>`
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

