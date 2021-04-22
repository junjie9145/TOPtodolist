import _ from "lodash";
import  { projects, setActive, switchProject, clearActive }  from "./project";
import { listDisplayFactory } from "./DOMfactories";
import updateDisplay from "./updateDisplay";




const active = setActive();
console.log(projects)
console.log(active.todoList);

updateDisplay();