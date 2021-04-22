import { projects, setActive } from "./project";



    
    const todoFactory = (name, dueDate) => {
        setActive().todoList.push(
            {
                name,
                dueDate,
                completed: false
            }
        )
    }

    const completedTodo = (project, index) => {
        return project.todoList[index].completed = true
    }

    const deleteTodo = (project, index) => {
        return project.todoList.splice(index, 1);
    }


export{
    todoFactory,
    completedTodo,
    deleteTodo
};