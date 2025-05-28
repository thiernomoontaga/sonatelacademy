import { naviagtion ,creerUtilisateur ,ajouterUtilisateur} from "./components.js";
import { utilisateurs ,groupes} from "./data.js";




const sideBar = document.querySelectorAll('.sideBar i');
const ajouterGroupe = document.querySelector('#ajouterGroupe');
const ajouterUser = document.querySelector('#ajouterUser');
const ajout_groupe = document.querySelector('#ajout_groupe');


sideBar[2].addEventListener('click' , () => {naviagtion('#page2'); afficher_utilisateur(utilisateurs)});
sideBar[4].addEventListener('click' , () => naviagtion('#page4'));
sideBar[1].addEventListener('click' , () => {naviagtion('#page3');afficher_groupe(groupes)});
ajouterGroupe.addEventListener('click' , () => {naviagtion('#form-groupe');show_membres();});

ajouterUser.addEventListener('click' , ajouter_user);

function ajouter_user(){
    const nom = document.querySelector('#nom');
    const numero = document.querySelector('#numero');

    if (nom.value.trim() === '' || numero.value.trim() === '') {
        alert('Champs ne peut pas etre vide ...');
    }else{
        const user = creerUtilisateur(nom.value.trim() , numero.value.trim());
        user.id = utilisateurs.length+1;
        console.log(user)
        ajouterUtilisateur(utilisateurs , user);
        nom.value = '';
        numero.value = '';
    }
}



function afficher_utilisateur(data){
    const ul = document.querySelector('#ul');
    ul.innerHTML = '';
    data.forEach(u => {
        if (u.archive === false) {
            const user = document.createElement('li');
            user.innerHTML = `
                <li class="flex justify-between border-r-[2px] border-b-[2px] border-[#dba230] p-1 rounded-lg text-gray-500"><span>${u.nom}</span><span><input type="checkbox"></span></li>
        `
        
        ul.appendChild(user);
        }
    });
}


function afficher_groupe(data) {
  const content = document.querySelector('.groupes');
  content.innerHTML = '';

  data.forEach(g => {
    const dernierMessage = g.messages.length > 0 ? g.messages[g.messages.length - 1] : null;

    const groupe = document.createElement('div');
    groupe.innerHTML = `
      <div class="flex items-center justify-between mb-4 hover:bg-gray-300 p-2 rounded-[8px]">
        <div class="flex gap-2">
          <img src="./back.jpg" alt="groupe" class="w-12 h-12 rounded-[50%]">
          <div>
            <span>${g.nom}</span> <br>
            <small>${dernierMessage ? dernierMessage.contenu : ''}</small>
          </div>
        </div>
        <div class="flex flex-col items-center text-gray-500">
          <small>${dernierMessage ? dernierMessage.heure : ''}</small>
          <small>${dernierMessage ? '<i class="fa-solid fa-check-double text-gray-500"></i>' : ''}</small>
        </div>
      </div>
    `;

    content.appendChild(groupe);
  });
}



ajout_groupe.addEventListener('click' , ()=>{
    const nom = document.querySelector('#nomGroupe').value.trim();
    const description = document.querySelector('#membresGroupe').value.trim();
    const mesLi = document.querySelectorAll('#membres li');


    if (nom === '' || description === '') {
        alert("Veuillez remplir tous les champs obligatoires.");
        return;
    }

   
    const nouveauGroupe = {
        id: groupes.length + 1,
        nom,
        avatar: './back.jpg',
        membres : [],
        description : description,
        messages: [],
    };
    
     mesLi.forEach(el => {
        const input = el.querySelector('input');
        if (input.checked){
            const nom = el.querySelector('span:nth-child(1)');
            utilisateurs.forEach(utilisateur => {
                console.log(utilisateur.nom);
                if (utilisateur.nom === nom.textContent) {
                    nouveauGroupe.membres.push(utilisateur.id);
                }
            });
        }
    });
 
    
    ajouterUtilisateur(groupes ,nouveauGroupe);
    document.querySelector('#nomGroupe').value = '';
    document.querySelector('#membresGroupe').value = '';
})


function show_membres(){
    const listes = document.querySelector('#membres');
    listes.innerHTML = '';
    utilisateurs.forEach(u => {
        const li = document.createElement('li');
        li.innerHTML = `
                      <span>${u.nom}</span><span><input type="checkbox"></span>    

        `;
        li.classList.add("flex");
        li.classList.add("justify-between");
        listes.appendChild(li);
    });
}




// Gestionnn des archives.
const allBtn = document.querySelectorAll('#allBtn i');

console.log(allBtn);

allBtn[1].addEventListener('click' , ()=>{
    const ul = document.querySelectorAll('#page2 #ul li');
    console.log(ul)

    ul.forEach(element => {
        console.log(element)

        const input = element.querySelector('input');
        const nom = element.querySelector('span:nth-child(1)');
        if (input.checked){
            utilisateurs.forEach(u => {
                if (u.nom === nom.textContent) {
                    u.archive = true;
                    afficher_utilisateur(utilisateurs)
                }
            });
        }

    });
})


sideBar[3].addEventListener('click' , ()=>{
  naviagtion('#page6')
  const ul = document.querySelector('#page6 #ul');

    ul.innerHTML = '';
    utilisateurs.forEach(u => {
        if (u.archive === true) {
            const user = document.createElement('li');
            user.innerHTML = `
                <li class="flex justify-between border-r-[2px] border-b-[2px] border-[#dba230] p-1 rounded-lg text-gray-500"><span>${u.nom}</span><span><input type="checkbox"></span></li>
        `
        
        ul.appendChild(user);
        }
    });
})


allBtn[2].addEventListener('click' , ()=>{
    const ul = document.querySelectorAll('#page6 #ul li');
    console.log(ul)

    ul.forEach(element => {
        console.log(element)

        const input = element.querySelector('input');
        const nom = element.querySelector('span:nth-child(1)');
        if (input.checked){
            utilisateurs.forEach(u => {
                if (u.nom === nom.textContent) {
                    u.archive = false;
                    afficher_dearchiver(utilisateurs)
                }
            });
        }

    });
})


function afficher_dearchiver(data){
    const ul = document.querySelector('#page6 #ul');
    ul.innerHTML = '';
    data.forEach(u => {
        if (u.archive === true) {
            const user = document.createElement('li');
            user.innerHTML = `
                <li class="flex justify-between border-r-[2px] border-b-[2px] border-[#dba230] p-1 rounded-lg text-gray-500"><span>${u.nom}</span><span><input type="checkbox"></span></li>
        `
        
        ul.appendChild(user);
        }
    });
}