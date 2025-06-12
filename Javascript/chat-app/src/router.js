import {loginView} from './views/loginView'
import {homePage} from './views/homeView'
import {loginController} from './components/LoginForm'
const routes = {
  "#/login":loginView,
  "#/home":homePage
}
export function router(){
  const app = document.querySelector('#body-app')
  app.innerHTML = ''
  const view = routes[window.location.hash] || loginView
  app.appendChild(view())
  if (window.location.hash === "#/login" || !window.location.hash){
    loginController();
  }
} 
export function navigateTo(hash){
  window.location.hash = hash
}



