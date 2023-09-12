import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const showTopMovies = createAsyncThunk('topMovies', async (_, thunkAPI) => {
	try {
		const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6c97d4c3450cb0c07b635b8e4a434061`);
		return response.data.results.slice(0, 10);
	} catch (err) {
		const message = (err.response && err.response.data) || err.message;
		return thunkAPI.rejectWithValue(message);
	}
});