<link rel="stylesheet" href="assets/css/ajout_promo.css">

<div class="container_formulaire">
    <div class="formulaire">
        <h1>Creer une nouvelle promotion</h1>
        <p>Remplissez les informations ci-dessus pour creer une nouvelle promotion</p>
        <form action="" method="get">
            <label for="promotion">Nom de la promotion</label>
            <input type="text" placeholder="Ex: Promo 2025" name="promotion">
            <div class="date_promo">
                <div class="date_debut">
                    <label for="">Date de debut</label>
                    <input type="date" placeholder="dd/mm/yy">
                </div>
                <div class="date_fin">
                    <label for="">Date de fin</label>
                    <input type="date" placeholder="dd/mm/yy">
                </div>
                
            </div>
            <div class="file">
                <div>
                    <label for="">Photo de la promotion</label>
                    <div class="photo_promo">
                        <label for="photo" class="custom_file_upload">
                            <div class="ajout_glisser">
                                <span class="ajout">Ajouter</span> <br> 
                                <span class="glisser">ou glisser</span>
                            </div>
                        </label>
                        <input type="file" name="photo" id="photo">
                    </div>
                </div>
                <div class="descrip_file">
                    format JPG,PNG.taille max 2MB
                </div>
            </div>
            <label for="">Referentiels</label>
            <div class="referentiel">
                <div class="recherche_referentiel">
                    <i class='bx bx-search' style='color:rgba(191,180,180,0.54)' ></i>
                    <input type="text" placeholder="Rechercher un referentiel">
                </div>
            </div>
           <div class="annuler_confirmer">
                <div class="boutton_annuler">
                    <a href="/index.php?page=promo">Annuler</a>
                </div>
                <div class="boutton_confirmer">
                    <button type="submit">Creer la promotion</button>
                </div>
           </div>
    </form>
    </div>

</div>



