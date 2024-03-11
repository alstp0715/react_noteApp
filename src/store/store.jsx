import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers.jsx'

const store = configureStore({
    reducer: rootReducer,
})

export default store
