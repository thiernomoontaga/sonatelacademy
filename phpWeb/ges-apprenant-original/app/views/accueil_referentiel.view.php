
    <link rel="stylesheet" href="assets/css/accueil_referentiel.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<body>
            <div class="main-content">
                        <h2>Référentiels</h2>
                        <p class="soustitre">Gérer les référentiels de la promotion</p>

                        <input type="checkbox" id="modal-toggle" hidden>

                        <div class="search-section">
                            <input type="text" class="search-input" placeholder="Rechercher un référentiel...">
                            <button class="all-btn">
                                <i class="fas fa-list"></i> Tous les référentiels
                            </button>
                            
                            <label for="modal-toggle" class="add-btn">
                                <i class="fas fa-plus"></i> Créer un référentiel
                            </label>
                        </div>

                        <div class="modal-container">
                            <div class="modal">
                                <h2>Créer un nouveau référentiel</h2>

                                <div class="photo-box">
                                    <label for="photo-upload" class="photo-label">
                                        <div class="upload-area">
                                            <i class="fa-regular fa-image"></i>
                                            <p>Cliquez pour ajouter une photo</p>
                                        </div>
                                    </label>
                                    <input type="file" id="photo-upload" accept="image/*">
                                </div>


                                <form class="form-container">
                                    <div class="form-group">
                                        <label for="nom">Nom*</label>
                                        <input type="text" id="nom" name="nom" required>
                                    </div>

                                    <div class="form-group">
                                        <label for="description">Description</label>
                                        <textarea id="description" name="description"></textarea>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group">
                                            <label for="capacite">Capacité*</label>
                                            <input type="number" id="capacite" name="capacite" value="30" required>
                                        </div>

                                        <div class="form-group">
                                            <label for="sessions">Nombre de sessions*</label>
                                            <select id="sessions" name="sessions" required>
                                                <option value="1">1 session</option>
                                                <option value="2">2 sessions</option>
                                                <option value="3">3 sessions</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="modal-buttons">
                                        <label for="modal-toggle" class="cancel-btn">Annuler</label>
                                        <label for="modal-toggle" class="create-btn">Créer</label>
                                    </div>
                                </form>

                            </div>
                        </div>




                    <div class="referentiel-container">
                        <div class="referentiel-card">
                            <div class="image-container">
                                <img src="assets/images/dev.png" alt="Développement Web/Mobile">
                            </div>
                            <div class="card-content">
                                <h3>Développement Web/Mobile</h3>
                                <h4>1 modules</h4>
                                <h5>De l'analyse du besoin à la mise <br> <h5>en ligne, en passant par...</h5></h5>
                                <div class="trait-vert"></div>
                                <div class="apprenants-info">
                                    <div class="cercle1"></div>
                                    <div class="cercle2"></div>
                                    <div class="cercle3"></div>
                                    <p><strong>0 apprenants</strong></p>
                                </div>
                            
                            </div>
                        </div>

                        <div class="referentiel-card">
                            <div class="image-container">
                                <img src="assets/images/refdig.png" alt="Référent Digital">
                            </div>
                            <div class="card-content">
                                <h3>Référent Digital</h3>
                                <h4>0 modules</h4>
                                <h5>Couteau-suisse du numérique, le <br><h5>référent digital participe...</h5></h5>
                                <div class="trait-vert"></div>
                                <div class="apprenants-info">
                                    <div class="cercle1"></div>
                                    <div class="cercle2"></div>
                                    <div class="cercle3"></div>
                                    <p><strong>0 apprenants</strong></p>
                                </div>
                            
                            </div>
                        </div>

                        <div class="referentiel-card">
                            <div class="image-container">
                                <img src="assets/images/data.png" alt="Développement Data">
                            </div>
                            <div class="card-content">
                                <h3>Développement Data</h3>
                                <h4>0 modules</h4>
                                <h5>De l'analyse du besoin à la data <br><h5>visualisation, en passant par la...</h5></h5>
                                <div class="trait-vert"></div>
                                <div class="apprenants-info">
                                    <div class="cercle1"></div>
                                    <div class="cercle2"></div>
                                    <div class="cercle3"></div>
                                    <p><strong>0 apprenants</strong></p>
                                </div>
                                
                            </div>
                        </div>

                        <div class="referentiel-card">
                            <div class="image-container">
                                <img src="assets/images/hack.png" alt="Assistanat Digital (Hackeuse)">
                            </div>
                            <div class="card-content">
                                <h3>Assistanat Digital (Hackeuse)</h3>
                                <h4>0 modules</h4>
                                <h5>La formation d'assistante digitale <br><h5> réservée uniquement aux...</h5></h5>
                                <div class="trait-vert"></div>
                                <div class="apprenants-info">
                                    <div class="cercle1"></div>
                                    <div class="cercle2"></div>
                                    <div class="cercle3"></div>
                                    <p><strong>0 apprenants</strong></p>
                                </div>
                        </div>
                        </div>

                        <div class="referentiel-card">
                            <div class="image-container">
                                <img src="assets/images/aws.png" alt="AWS & DevOps">
                            </div>
                            <div class="card-content">
                                <h3>AWS & DevOps</h3>
                                <h4>0 modules</h4>
                                <h5>De l'analyse des besoins au <br><h5> monitoring de l'infrastructure...</h5></h5>
                                <div class="trait-vert"></div>
                                <div class="apprenants-info">
                                    <div class="cercle1"></div>
                                    <div class="cercle2"></div>
                                    <div class="cercle3"></div>
                                    <p><strong>0 apprenants</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>

               
</div>

</body>
