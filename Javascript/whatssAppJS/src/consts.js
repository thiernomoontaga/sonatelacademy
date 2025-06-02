
// function defaultDisplay(){
//   document.addEventListener('DOMContentLoaded',()=>{
//      const user = templateContact.content.cloneNode(true)
//      main.appendChild(user)
//   })
// }
// function displayMessage(){
//   message.addEventListener('click',()=>{
//      defaultDisplay()
// })
// }
// function displayFormContact(){
//   new_contact.addEventListener('click',()=>{
//     const form_contact = template_form_add_contact.content.cloneNode(true)
//     main.append(form_contact)
//     add_contact()
//   })
// }

// function add_contact(){
//   button_add_contact.addEventListener('submit',()=>{
//     const nameUser = document.querySelector('#nameUser').value.trim()
//     const numberUser = document.querySelector('#numberUser').value.trim()
  
//       const newContact = {
//         name: nameUser,
//         number: numberUser
//       }
  
//     contacts.push(newContact)
//     return contacts
//   })

// }
// function handleformContact(e) {
//   e.preventDefault(); 
//   const 
//   const nameUser = form.querySelector('#nameUser').value.trim();
//   const numberUser = form.querySelector('#numberUser').value.trim();
  
//   if (nameUser === "" || numberUser === "") return
  
  
//   const user = {
//       name: nameUser,
//       number: numberUser
//   }
  
//   users.push(user);
  
//   form.remove();
// }

// function addContact() {
//   add_contact_btn.addEventListener('click', () => {
//       const existingForm = main.querySelector('form');
//       if (!existingForm) {
//           display_form(template_add_form_contact, main);
//       }
//   });
// }
// displayFormContact()
// defaultDisplay()
// displayMessage()



// const clones = [
//   {action:newContactBtn,statu: false},
//   {action:messageBtn,statu:false},
//   {action:groupsBtn,statu: false},
//   {action:addGroupBtn,statu: false},
// ]
// function render(child){
//     clones.forEach( item =>{
//        if(clones.action = child &&  item.statu){
//          main.appendChild(child)
//          console.log('Bonjour')
//        } 
//       })
// }
// render(newContactBtn)
// // function displayAction(action_quote,callback){
// //   action_quote.addEventListener('click',()=> {
// //     clones.forEach(i => { 
// //       if(i.action = action_quote){
// //         i.action = true
// //       }
// //       i.action = false
// //       callback()
// //     })
    
// //   })
// // }

