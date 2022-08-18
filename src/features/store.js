import { configureStore } from '@reduxjs/toolkit'
import movie from './movies/movieSlice';

const store = configureStore({
    reducer: {
        movie
    }
})

export default store;