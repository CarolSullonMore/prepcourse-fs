// task es una variable vacia porque nosotros le vamos a dar un valor en input.

document.addEventListener("DOMContentLoaded", () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));

    if(storedTasks) {
        storedTasks.forEach((task) => tasks.push(task));
        updateTasksList();
        updateStats();
    };
});

let tasks = [];

const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Función para agregar una nueva tarea
const addTask = () => {
    const taskInput = document.getElementById('taskInput');
    const text = taskInput.value.trim(); // Captura el valor del input

    if (text) {
        tasks.unshift({ text: text, completed: false }); // Agrega la tarea al array de tareas
        taskInput.value = ''; // Limpiar el input después de agregar la tarea
        updateTasksList();
        updateStats();
        saveTasks();
    }
};

const toggleTaskComplete = (index) => {
    tasks[index].completed = !tasks[index].completed;

    updateStats();
    saveTasks();
};

const deleteTask = (index) => {
    tasks.splice(index, 1);

    updateTasksList();
    updateStats();
    saveTasks();
};

const editTask = (index) => {
   const  taskInput = document.getElementById('taskInput');
   taskInput.value = tasks[index].text;

   tasks.splice(index, 1);

   updateTasksList();
   updateStats();
   saveTasks();

};



const updateStats = () => {
    const completeTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    const progress = totalTasks === 0 ? 0 : (completeTasks / totalTasks) * 100;
    const progressBar = document.getElementById('progress');

    progressBar.style.width = `${progress}%`;

    document.getElementById('numbers'). innerText = `${completeTasks} / ${totalTasks}`;

    if (completeTasks === totalTasks && totalTasks > 0) {
        blastConfetti();
    };
};

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
                <img src="images/edit_32dp_E8EAED_FILL0_wght400_GRAD0_opsz40.svg" onClick="editTask(${index})"/>
                <img src="images/delete_32dp_E8EAED_FILL0_wght400_GRAD0_opsz40.svg" onClick="deleteTask(${index})"/>
            </div>
        </div>
        `;
        listItem.querySelector('.checkbox').addEventListener("change", () => { toggleTaskComplete(index);
        updateTasksList();
    });

    taskList.append(listItem);
    });
};

/* Esto previene a que las nuevas tareas se vayan a default*/

document.getElementById('taskInput').addEventListener('keypress', function(e){
    if (e.key === 'Enter') {
        addTask();
    }
});

document.getElementById('newTask').addEventListener('click', function(e){
    e.preventDefault();
    addTask();
});


const blastConfetti = () => {
    const duration = 15 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const interval = setInterval(function() {
  const timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  const particleCount = 50 * (timeLeft / duration);

  // since particles fall down, start a bit higher than random
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    })
  );
  confetti(
    Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    })
  );
}, 250);
};
