<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="assets/css/ajout_promo.css">
</head>


  <div class="container">
    <h2>Créer une nouvelle promotion</h2>
    <h4>Remplissez les informations ci-dessous pour créer une nouvelle promotion</h4>
    <form id="formClient">
      <div class="form-group">
        <label for="nom">Nom de la promotion:</label>
        <input type="text" id="nom" name="nom" placeholder="Ex: Promotion 2025">
      </div>

      <div class="date">
        <div class="form-group">
          <label for="debut">Date de début :</label>
          <input type="text" id="debut" name="debut" placeholder="dd/mm/yyyy">
        </div>

        <div class="form-group">
          <label for="fin">Date de Fin:</label>
          <input type="text" id="fin" name="fin" placeholder="dd/mm/yyyy">
        </div>
      </div>

      <div class="photo">
        <div class="form-group">
          <label for="photo">Photo de la promotion :</label>

          <input type="file" id="photo" name="photo" accept="image/*" hidden>

          <label for="photo" class="photo-glisser">
            <span>Ajouter</span> <br> ou glisser
          </label>
        </div>

        <div class="format">
          Format JPG, PNG. Taille max 2MB.
        </div>
      </div>

      <div class="form-group" id="search">
        <label for="recherche">Référentiels</label>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" id="recherche" name="search" placeholder="Rechercher un référentiel...">
      </div>

      <div class="btn-group">
        <a href="#" class="btn cancel">Annuler</a>
        <a href="#" class="btn submit">Créer la promotion</a>
      </div>
    </form>
  </div>

</body>

