import { createContext , useContext  } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id : 1,
            title : "Learn React",
            completed : false
        },
    ],
    addTodo : (todo)=>{},
    updateTodo : (id, todo)=>{},
    deleteTodo : (id)=>{},
    toggleComplete : (id)=>{},
});

// const TodoProvider = ({ children }) => {
//     return (
//         <TodoContext.Provider value={{}}>
//             {children}
//         </TodoContext.Provider>   
//         )
//     }

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}