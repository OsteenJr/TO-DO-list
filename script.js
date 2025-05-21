const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const message = document.getElementById('message');



function addTask() {
    if (taskInput.value === '') {
        message.textContent = 'Please enter a task.';
         saveData();
        return;
    } else {
        let li = document.createElement('li');
        li.textContent = taskInput.value;
        taskList.appendChild(li);
         message.textContent = '';
         let span = document.createElement('span');
         span.innerHTML = "\u00d7"
         li.appendChild(span);
    
    }
    taskInput.value = '';
     saveData();
}
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
         saveData()
    }
});

taskList.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
         saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
         saveData();
    }
}, false);

function saveData() {
    localStorage.setItem('data', taskList.innerHTML);
}

function showData() {
    taskList.innerHTML = localStorage.getItem('data');
}
showData();
