<link rel="stylesheet" href="assets/css/creer_referentiel.css">
<body>
<input type="checkbox" id="modal-toggle" hidden>
<label for="modal-toggle" class="add-btn">
    <i class="fas fa-plus"></i> 
</label>

<div class="modal-container">
    <div class="modal">
        <h2>Créer un nouveau référentiel</h2>

        <div class="photo-box">
            <label for="photo-upload" class="photo-label">
                <i class="fas fa-camera"></i> 
            </label>
            <input type="file" id="photo-upload" accept="image/*">
            <div class="photo-preview"></div> 
        </div>

        <form>
            <label for="nom">Nom*</label>
            <input type="text" id="nom" name="nom" required>

            <label for="description">Description</label>
            <textarea id="description" name="description"></textarea>

            <label for="capacite">Capacité*</label>
            <input type="number" id="capacite" name="capacite" value="30" required>

            <label for="sessions">Nombre de sessions*</label>
            <input type="number" id="sessions" name="sessions" value="1" required>

            <div class="modal-buttons">
                <label for="modal-toggle" class="cancel-btn">Annuler</label>
                <label for="modal-toggle" class="create-btn">Créer</label>
            </div>
        </form>
    </div>
</div>

</body>
</html>