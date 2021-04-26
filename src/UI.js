import { projects, projectFactory, setActive } from "./project";
import updateDisplay from "./updateDisplay";
import { todoFactory, completedTodo, deleteTodo } from "./todoitems";

function addProject() {
    const addProjectBtn = document.querySelector("#newprojectbtn");

    const newProjectForm = document.querySelector(".newprojectform");
    const submitBtn = document.querySelector("#submitproject");
    const cancelBtn = document.querySelector('#cancelprojectbtn');

    const showForm = () => {
        newProjectForm.style.display = "flex";
    };

    const submitProject = () =>{
        const projectName = document.querySelector("#projectname");
        if (projectName.value != "") {
        projectFactory(projectName.value);
        projectName.value = "";
        updateDisplay();
        newProjectForm.style.display = "none";
        console.log(projects)  
        } else {
            alert("Please enter project name");
        } 
    }

    const cancelProject = () => {
        newProjectForm.style.display = "none";
    }
    
    const eventListers = (() => {
        addProjectBtn.addEventListener("click", showForm);
        submitBtn.addEventListener("click", submitProject);
        cancelBtn.addEventListener("click", cancelProject)
    })();    
}

function addTodo() {
    const newTodoForm = document.querySelector(".newtodoform");
    const todoName = document.querySelector("#todoname");
    const todoDate = document.querySelector("#tododate");
    const addTodoBtn = document.querySelector(".addtodobtn");
    const submitTodo = document.querySelector("#submittodo");

    const showForm = () => {
        newTodoForm.style.display = "flex";
    }

    const addNewTodo = () => {
        if (todoName.value == "" || todoDate.value == "") alert("Please enter name and date");
        todoFactory(todoName.value, new Date(todoDate.value));
        todoName.value = "";
        todoDate.value = "";
        updateDisplay();
        console.log(setActive().todoList);
    }

    const events = (() => {
        addTodoBtn.addEventListener("click", showForm);
        submitTodo.addEventListener("click", addNewTodo)
    })()

}

export {
    addProject,
    addTodo
}