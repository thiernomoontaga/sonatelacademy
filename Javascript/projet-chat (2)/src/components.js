export function naviagtion(page){
    const mesPages = document.querySelectorAll('.page');
    
    mesPages.forEach(p => {
        p.classList.add('hidden');
    });
    document.querySelector(page).classList.remove('hidden');
    document.querySelector(page).classList.add('block');
}



export function creerUtilisateur(nom , numero){
    return {
        id: null,
        nom: nom,
        numero: numero,
        statut: "Disponible",
        avatar: "bakary.jpg",
        enLigne: true,
        archive: false,
    }
}


export function ajouterUtilisateur(data , user){
     data.unshift(user);
}

