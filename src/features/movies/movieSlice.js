import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from '../../api/MovieApi'
import { APIKey } from '../../api/MovieApiKey'

export const fetchMoviesAsync = createAsyncThunk("movies/fetchMoviesAsync", async () => {
    const searchTerm = "Harry";
    const response = await MovieApi.get(`?apiKey=${APIKey}&s=${searchTerm}&type=movie`);
    return response.data;
})

export const fetchShowsAsync = createAsyncThunk("movies/fetchShowsAsync", async () => {
    const searchTerm = "Friends";
    const response = await MovieApi.get(`?apiKey=${APIKey}&s=${searchTerm}&type=series`);
    return response.data;
})

const initialState = {
    movies: {},
    shows: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        }
    },
    extraReducers: {
        [fetchMoviesAsync.pending]: () => {
            console.log("Pending...")
        },
        [fetchMoviesAsync.fulfilled]: (state, { payload }) => {
            console.log("Fetched successfully!")
            return { ...state, movies: payload };
        },
        [fetchMoviesAsync.rejected]: () => {
            console.log("Rejected!")
        },
        [fetchShowsAsync.fulfilled]: (state, { payload }) => {
            console.log("Fetched successfully!")
            return { ...state, shows: payload };
        }
    }
})

export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;