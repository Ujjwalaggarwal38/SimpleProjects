import { createSlice, nanoid } from "@reduxjs/toolkit";

//nanoid = generate unique id only no other use



const initialState = {
    todos : [{id: 1,text : "Hello World"}]
}


export const todoSlice = createSlice ({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state , action) => {
            const todo = {
                id: nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state,action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo : (state,action) => {
            state.todos = state.todos.map((todo) => {
                if(todo.id === action.payload.id) {
                    return action.payload;
                }
                return todo;
            })
        }
    }
})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer
