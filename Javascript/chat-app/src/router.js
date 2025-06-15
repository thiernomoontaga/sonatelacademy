import {loginView} from './views/loginView'
import {homePage} from './views/homeView'
import {loginController} from './components/LoginForm'
import { renderChatlist } from './views/chatlistView'
const routes = {
  "#/login":loginView,
  "#/home":homePage
}
export function router(){
  const app = document.querySelector('#body-app')
  app.innerHTML = ''
  const view = routes[window.location.hash] || loginView
  app.append(view())
  if (window.location.hash === "#/login" || !window.location.hash){
    loginController();
  }
} 
export function navigateTo(hash){
  window.location.hash = hash
  if(hash === "#/home"){
    renderChatlist()
  }
}

