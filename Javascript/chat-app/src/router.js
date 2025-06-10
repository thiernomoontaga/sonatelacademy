import {loginView} from './views/loginView'
import {chatView} from './views/loginView'

const routes = {
  "#/login": loginView,
  "#/chat":chatView
}

const router = function(){
  const app = document.querySelector('.app')
  app.innerHTML = ''
  const view = routes[window.location.hash] || loginView
  app.appendChild(view)
} 


