const input = document.getElementById("input");
const button = document.getElementById("button");
const containTask = document.getElementById("contain_task");

let editingIndex = null; // Pour savoir si on modifie ou ajoute

button.addEventListener("click", () => {
    const taskText = input.value.trim();
    if (taskText === "") return;

    if (editingIndex !== null) {
        // Si on est en train d’éditer une tâche
        const taskToEdit = document.querySelectorAll(".task")[editingIndex];
        taskToEdit.querySelector(".text").textContent = taskText;
        editingIndex = null;
        button.textContent = "+ add";
    } else {
        // Créer une nouvelle tâche
        const task = document.createElement("div");
        task.className = "task";

        const textSpan = document.createElement("span");
        textSpan.className = "text";
        textSpan.textContent = taskText;

        // Action icons
        const actions = document.createElement("div");
        actions.className = "actions";

        const editBtn = document.createElement("i");
        editBtn.className = "bx bx-edit";
        editBtn.style.cursor = "pointer";
        editBtn.title = "Modifier";

        const deleteBtn = document.createElement("i");
        deleteBtn.className = "bx bx-trash";
        deleteBtn.style.cursor = "pointer";
        deleteBtn.title = "Supprimer";

        // Appends
        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);
        task.appendChild(textSpan);
        task.appendChild(actions);
        containTask.insertBefore(task, containTask.firstChild); // Ajoute en haut
    }

    input.value = "";
});

// Modification via icône ou clic sur le texte
containTask.addEventListener("click", (e) => {
    const taskDiv = e.target.closest(".task");
    const taskText = taskDiv?.querySelector(".text").textContent;

    if (e.target.classList.contains("bx-edit") || e.target.classList.contains("text")) {
        input.value = taskText;
        editingIndex = Array.from(containTask.children).indexOf(taskDiv);
        button.textContent = "Modifier";
    }

    // Suppression
    if (e.target.classList.contains("bx-trash")) {
        containTask.removeChild(taskDiv);
        input.value = "";
        editingIndex = null;
        button.textContent = "+ add";
    }
});
