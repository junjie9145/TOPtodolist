import { format } from "date-fns"
import { de } from "date-fns/locale";
import { setActive, projects } from "./project";


function listDisplayFactory() {
    const projectDisplay = document.getElementById("active-project-container")
    projectDisplay.textContent = "";
    const listContainer = document.createElement('div');
    listContainer.classList.add('listdisplay');
    
    const containerTitle = document.createElement('h2');
    containerTitle.innerText = setActive().name;
    listContainer.appendChild(containerTitle);
    
    const closeBtn = document.createElement('span');
    closeBtn.classList.add("far", "fa-window-close");
    listContainer.appendChild(closeBtn);

    const listDisplay = document.createElement('div');
    listDisplay.classList.add('listdisplay')
    listContainer.appendChild(listDisplay);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteprojectBtn');
    deleteBtn.textContent = "Delete";
    listContainer.appendChild(deleteBtn);
    
    const  addTodoBtn = document.createElement('button');
    addTodoBtn.classList.add('addtodobtn');
    addTodoBtn.textContent = "Add Todo";
    listContainer.appendChild(addTodoBtn);

    projectDisplay.appendChild(listContainer);
    return projectDisplay;
}

const renderTodo = () => {
    const activeProjectTodoList = document.querySelector('.listdisplay');
        setActive().todoList.forEach((item, index) => {
            const todo = document.createElement('div');
            todo.classList.add('to-do');
            todo.dataset.value = index;
            
            const checkBox = document.createElement('div');
            checkBox.classList.add('checkbox');
            if (item.completed) {
                checkBox.classList.add('completed')
            }

            const todoTitle = document.createElement('div');
            todoTitle.classList.add("todotitle");
            todoTitle.textContent = item.name
            
            const todoDate = document.createElement('div');
            todoDate.classList.add("duedate");
            todoDate.textContent = format(item.dueDate, "MM/dd/yyyy");
            
            const deleteTodo = document.createElement('div');
            deleteTodo.classList.add("fas", "fa-trash", "deletetodo");

            todo.appendChild(checkBox);
            todo.appendChild(todoTitle);
            todo.appendChild(todoDate);
            todo.appendChild(deleteTodo);
            activeProjectTodoList.appendChild(todo);
        })
    
    return activeProjectTodoList;
}

const projectButtons = () => {
    const projectBtns = document.querySelector('#showprojects');
    const projectBtn =  document.createElement('button');
    let index = projects.length

    projectBtn.classList.add('projectbtn');
    
    projectBtn.textContent = projects[index - 1].name

    projectBtns.appendChild(projectBtn);
    return projectBtns;
}

export{
    listDisplayFactory,
    renderTodo,
    projectButtons
};