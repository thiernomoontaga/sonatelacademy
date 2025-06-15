import { sidebarAction } from "../components/Sidebar"
export function renderChatlist(){
  const containMain = document.createElement('div')
  containMain.setAttribute('id','containMain')
  containMain.className = 'w-[100%] h-[100%] bg-white flex-col'
  containMain.innerHTML = `
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
  `
  return containMain
}

