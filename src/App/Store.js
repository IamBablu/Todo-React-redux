import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../Feactures/Todo/TodoSlice'

export const store = configureStore({
    reducer: todoReducer
})