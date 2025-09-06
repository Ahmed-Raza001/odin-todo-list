
function addTask() {
    const input = document.getElementById("inputTask");
    const taskText = input.value.trim();
    if (taskText === "") return;

    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    const taskList = document.getElementById("taskList");
    taskList.appendChild(newTask);

    input.value = ""; 

    deleteTask(newTask);
}

function deleteTask(newTask) {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    newTask.appendChild(deleteBtn);

    deleteBtn.onclick = function () {  
        newTask.remove();
    };
}
