import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../actions/todoSlice'

//first step create a store
export const store = configureStore({
    reducer : todoReducer
});