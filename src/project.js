import { todoFactory } from "./todoitems"
import { projectButtons } from "./DOMfactories";

let projects = [];

function projectFactory(name) {
    clearActive();
    projects.push(
        {
            name,
            todoList: [],
            active: true
        }
    );
    projectButtons()
};

   

const setActive = () => {
    const activeArr = projects.filter(project => project.active);
    return activeArr[0];
}

const clearActive = () =>{
   return projects.forEach(project => project.active = false);
} 

const switchProject = (index) => {
    clearActive();
    return projects[index].active = true;
}

const deleteProject = (index) => {
    if(projects.length > 1) {
        if(projects[index] == setActive()) {
            if (index != 0) {
                projects[index-1].active = true;
                projects.splice(index, 1);
            } else {
                projects[1].active = true;
                projects.splice(0,1);
            }                
        }
        else {
            projects.splice(index, 1);
        }
    }
}

projectFactory('sample');
todoFactory("sample", new Date())
todoFactory("sample2", new Date())
projectFactory('sample2')
todoFactory("sample3", new Date())
todoFactory("sample4", new Date())

export{
    projectFactory,
    setActive,
    clearActive,
    switchProject,
    deleteProject,
    projects
 };