import { createSlice, nanoid } from '@reduxjs/toolkit';

//step two create a initialstate
const initialState = {
    todos : [{id : 1, text: 'Example Task...'}]
}

//step three create methods
export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state, action)=>{
            const todo = {
                id : nanoid(),
                text : action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action)=>{
            state.todos = state.todos.filter(todo=>todo.id !== action.payload)
        }
    }
})

//export the methods
export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer
