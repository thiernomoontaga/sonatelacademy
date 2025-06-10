const buttonAdd = document.querySelector('#button-add')
const body = document.querySelector('body')
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

