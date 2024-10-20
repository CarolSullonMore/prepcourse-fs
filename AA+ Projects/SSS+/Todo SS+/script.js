// task es una variable vacia porque nosotros le vamos a dar un valor en input.
let tasks = [];

// Función para agregar una nueva tarea
const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim(); // Captura el valor del input

    if (text) {
        tasks.unshift({ text: text, completed: false }); // Agrega la tarea al array de tareas
        taskInput.value = ''; // Limpiar el input después de agregar la tarea
        updateTasksList();
    }
    console.log(tasks);
};

const toggleTastComplete = (index) => {
    tasks[index].completed = !tasks[index].completed;
}

const updateTasksList = () => {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

/* Esto es para mi lista de Tasks  */

    tasks.forEach((task,index) => {
        const listItem = document.createElement('li');

        listItem.innerHTML = `
        <div class="taskItem">
            <div class="task  ${task.completed ? "completed":''}">
                <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""}/>
                <p>${task.text}</p>
            </div>
            <div class="icons">
                <img src="./img/edit.png" onClick="editTask(${index})"/>
                <img src="./img/bin.png" onClick="deleteTask(${index})"/>
            </div>
        </div>
        `;
        listItem.querySelector('.checkbox').addEventListener("change", () => { toggleTastComplete(index);
        updateTasksList();
    });

    taskList.append(listItem);
    });
};

/* Esto previene a que las nuevas tareas se vayan a default*/

document.getElementById('newTask').addEventListener('click', function(e){
    e.preventDefault();
document.getElementById('taskInput').addEventListener('kewypress', function(e){
    if (e.key === 'Enter') {
        addTask();
    }
})

    addTask();
});


// Quiero que se agreguen las nuevas tasks al principio como lo hago?
