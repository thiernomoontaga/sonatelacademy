<div class="w-[100%] h-[100%] flex flex-col">
         <div class="flex  flex-row h-[100px] w-[100%] justity-between">
            <div class="ml-20 mt-5 font-bold text-4xl text-[#088738]">Nouvelle commande</div>
            <div class=" ml-[50em] h-[100px] w-[100px] "><img src="./images/Pasted image (4).png" class="h-[100%] w-[100%] object-cover "  alt=""></div>
         </div>
         <div class=" ml-20 text-xl text-[#088738]">Information du client</div>
         <!-- <div class=" h-[80px] w-[900px] ml-20 mt-3">
            <input type="text" name="" id="" class="h-[50px] w-[400px] bg-[#EEEFE0] rounded-xl  outline-none p-3" placeholder="rechercher par le numero du client" >
            <button type="submit" class="ml-2 bg-[#088738] text-[#fff] p-3 rounded-xl font-bold cursor-pointer">Rechercher</button>
         </div> -->
        
         <form action="" class="w-[900px] h-[150px]  ml-20  ">
          <div class="flex flex-row">
            <div class="flex  flex-col">
              <label for="">Nom</label>
              <input type="text" name="" id="" class="w-[250px] h-[40px] bg-[#EEEFE0] rounded-xl outline-none p-3 mt-3" placeholder="Entrer le nom du client">
            </div>
            <div class="ml-6 flex flex-col">
              <label for="">Prenom</label>
              <input type="text" name="" id="" class="w-[250px] h-[40px] bg-[#EEEFE0] rounded-xl outline-none p-3 mt-3" placeholder="entrer le Prenom du client">
            </div>
          </div>
         
          <div class="flex flex-col mt-7">
            <div class="flex flex-col">
              <label for="">Numero de telephone</label>
              <input type="text" name="" id="" class="w-[250px] h-[40px] bg-[#EEEFE0] rounded-xl outline-none p-3 mt-3" placeholder="entrer le numero du telephone">
            </div>
            <button class="mt-4 text-[#fff] font-bold p-2 h-[50px] w-[550px] bg-[#088738] rounded-xl cursor-pointer" type="submit ">Ajouter client</button>
          </div>
         </form>
         <div class="text-2xl mt-30 ml-20 text-[#088738]">
          Produits
         </div>
       <table class="w-[800px] mt-2 text-[#343432] border-collapse border ml-20 rounded-2xl">
          <thead>
            <tr class="border rounded-2xl">
              <th class="text-left px-4 py-3">Produit</th>
              <th class="text-center px-4 py-3">Quantite</th>
              <th class="text-center px-4 py-3">Prix</th>
              <th class="text-center px-4 py-3">Total</th>
            </tr>
            <tr class="border rounded-2xl">
              <td class=" text-left px-4 py-3 ">Produit A</td>
              <td class=" text-center px-4 py-3 ">4</td>
              <td class=" text-center px-4 py-3 ">566fcfa</td>
              <td class=" text-center px-4 py-3 ">1098fcfa</td>
            </tr>
            <tr class="border rounded-2xl">
              <td class=" text-left px-4 py-3 ">Produit c</td>
              <td class=" text-center px-4 py-3 ">5</td>
              <td class=" text-center px-4 py-3 ">5408fcfa</td>
              <td class=" text-center px-4 py-3 ">10487fcfa</td>
            </tr>
            <tr>
              <td class=" text-left px-4 py-3 ">Produit D</td>
              <td class=" text-center px-4 py-3 ">10</td>
              <td class=" text-center px-4 py-3 ">549fcfa</td>
              <td class=" text-center px-4 py-3 ">4548 fcfa</td>
            </tr>
            
          </thead>
       </table>
       <div class="mt-5 h-[40px] w-[400px] ml-[330px] flex flex-row gap-12">
        <div><i class="fa-solid fa-angle-left font-bold text-[#088738]"></i></div>
        <div>1</div>
        <div class="">2</div>
        <div>3</div>
        <div>4</div>
        <div><i class="fa-solid fa-angle-right font-bold text-[#088738]"></i></div>
       </div>
       <div class="text-xl ml-20 text-[#088738]">
         selectionner produit
       </div>
       <div class=" w-[60%] h-[50px] ml-20">
          <form action="">
            <div class="flex flex-row gap-3" >
              <input type="text" name="" id="" class="w-[250px] h-[40px] bg-[#EEEFE0] rounded-xl outline-none p-3 mt-3" placeholder="Entrer le nom du produit">
              <input type="text" name="" id="" class="w-[250px] h-[40px] bg-[#EEEFE0] rounded-xl outline-none p-3 mt-3" placeholder="Entrer la Quantite du produit">
              <button class="cursor-pointer bg-[#088738] text-[#fff] font-bold rounded-xl h-[40px] w-[200px] mt-3">Ajouter produit</button>
            </div>
          </form>
       </div>
       <div class="text-xl text-[#088738] mt-2 ml-20">
        Totaux
       </div>
       <div class=" w-[80%] h-[40px] ml-20 flex flex-row mt-3">
        <div>Total</div>
        <div class="ml-[35rem]">547654 fcfa</div>
       </div>
       <div class="flex flex-row w-[80%] h-13 ml-20 gap-12">
        <button class="cursor-pointer bg-[#088738] text-[#fff] font-bold rounded-xl h-[40px] w-[200px] ">Confirmer commande</button>
        <button class="cursor-pointer bg-[#F43117] text-[#fff] font-bold rounded-xl h-[40px] w-[200px] ">Annuler commande</button>
        
       </div>
       
 </div>