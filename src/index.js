import _ from "lodash";
import  { projects, setActive, switchProject, clearActive }  from "./project";
import { listDisplayFactory } from "./DOMfactories";
import updateDisplay from "./updateDisplay";
import { addProject, addTodo } from "./UI";



const active = setActive();
console.log(projects)
console.log(active.todoList);
updateDisplay();
addProject();
addTodo();
