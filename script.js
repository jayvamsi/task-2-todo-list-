function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = taskInput.value;
        
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete Task";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = function() {
            li.remove();
        };
        
        li.appendChild(deleteBtn);
        
        taskList.appendChild(li);
        taskInput.value = "";
    }
}
