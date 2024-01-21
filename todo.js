function addTask() {
    var taskInput = document.getElementById("newTask");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var newTaskItem = document.createElement("li");
        var taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        taskSpan.style.marginRight = "10px";
        var editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = taskText;
        editInput.style.display = "none";
        var editButton = document.createElement("button");
        
        editButton.textContent = "Edit";
        editButton.onclick = function() {
            editButton.style.marginLeft = "10px";
            taskSpan.style.display = "none";
            editInput.style.display = "inline";
            editButton.style.marginRight = "5px";
            updateButton.style.marginRight = "5px";
            editButton.style.display = "none";
            updateButton.style.display = "inline";
        };
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        editButton.style.marginRight = "5px";
        deleteButton.style.marginRight = "5px";
        deleteButton.onclick = function() {
            taskList.removeChild(newTaskItem);
        };
        var updateButton = document.createElement("button");
        updateButton.textContent = "Update";
        updateButton.style.display = "none"; 
        updateButton.onclick = function() {
            taskSpan.textContent = editInput.value;
            taskSpan.style.display = "inline";
            editInput.style.display = "none";
            editButton.style.display = "inline";
            updateButton.style.display = "none"; 
        };
        newTaskItem.appendChild(taskSpan);
        newTaskItem.appendChild(editInput);
        newTaskItem.appendChild(editButton);
        newTaskItem.appendChild(updateButton);
        newTaskItem.appendChild(deleteButton);

        taskList.appendChild(newTaskItem);
        taskInput.value = "";
    }
}