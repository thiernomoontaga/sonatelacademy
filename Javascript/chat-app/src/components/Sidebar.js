import { renderChatlist } from "../views/chatlistView"
export function sidebarAction(){
  const sidebar = document.querySelector('#sidebar')
  sidebar.querySelectorAll('button').forEach( b =>{
    b.addEventListener('click',(e)=>{
     if(e.target.id === 'home') {
        const contain  = document.querySelector('#containItem')
      }
    })
  })
}




