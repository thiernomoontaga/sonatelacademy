const title  = document.querySelector('#title')
const description_task = document.querySelector('#description_task')
const button = document.querySelector('button')
const task_container = document.querySelector('#task_container')
const task = document.querySelector('#task')
const title_task = document.querySelector('#title_task')
const alltasks = document.querySelector('#alltasks')
const form = document.querySelector('form')

let tasks = []

function process_the_form_data(){
     document.querySelector('form').addEventListener('submit',e => {
        e.preventDefault()
        const form = e.currentTarget
        const data = new FormData(form)
        let submitted_value = data.get('title_task')
        const error = document.createElement('small')
        const error_already_exists = document.querySelector('.message_error')
        if(error_already_exists){
                error_already_exists.remove()
        }
        if(submitted_value.trim().length <= 3){
                error.className = "message_error"
                error.innerText = "text must be higher than"
                title.insertAdjacentElement('afterend',error)
                return
        }
        else if(submitted_value.trim().length >= 10){
                error.className = "message_error"
                error.innerText = "text is too large"
                title.insertAdjacentElement('afterbegin',error)
                return
        }
        else{
                add_task()
        }
    }) 
}


function add_task(){
    const titleTask = title.value.trim()
    const descriptionTask = description_task.value.trim()
    if(!titleTask) return

    const task = {
        id: Date.now(),
        title: titleTask, 
        date: new Date().toLocaleString('fr-FR',{
            weekday:'long',
            month:'numeric',
            year:'numeric',
            hour:'numeric',
            minute:'2-digit',
            second:'2-digit'
        }),
        description: descriptionTask,
        status: false
    }
    tasks.push(task)
    render_view_task()
    form.reset()
}

function render_view_task(){
    alltasks.innerHTML = '' 
    
    tasks.forEach(task => {
        const taskElement = document.createElement('div')
        if(task.status){
            taskElement.classList.add('completed')
        }
        taskElement.className = 'task'
        taskElement.dataset.id = task.id
        taskElement.innerHTML = `
            <input type="checkbox" id="check" ${task.status ? 'checked' : ''}>
            <div class="task_text">
                <h2>${task.title}</h2> 
                <p class="des_task">${task.description}</p>
                <p class="date_task">${task.date}</p>
            </div>
            <div class="icon_task">
                <i class="fa-solid fa-pen"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
        `
        alltasks.prepend(taskElement)
    })
    addEventListeners();

}
function addEventListeners() {
    document.querySelectorAll('#check').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const taskId = parseInt(this.closest('.task').dataset.id);
            const task = tasks.find(t => t.id === taskId);
            task.completed = this.checked;
            saveTasks();
            this.closest('.task').classList.toggle('completed', this.checked);
        });
    });
    
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const taskId = parseInt(this.closest('.task').dataset.id);
            tasks = tasks.filter(t => t.id !== taskId);
            saveTasks();
            renderTasks();
        });
    });
    
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const taskId = parseInt(this.closest('.task').dataset.id);
            editTask(taskId);
        });
    });
}
function editTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;
    
    title.value = task.title;
    description_task.value = task.description;
    
    tasks = tasks.filter(t => t.id !== taskId);
    renderTasks();
}
document.querySelector('.header_container .fa-trash').addEventListener('click', function() {
    tasks = [];
    renderTasks();
});

document.querySelector('.header_container input').addEventListener('change', function() {
    const isChecked = this.checked;
    tasks.forEach(task => {
        task.completed = isChecked;
    });
    renderTasks();
});
process_the_form_data()


                   