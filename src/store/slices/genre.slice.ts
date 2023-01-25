import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const GENRE_KEY = 'gk'

interface GenreState {
	genre: string[]
}

const initialState: GenreState = {
	genre: JSON.parse(localStorage.getItem(GENRE_KEY) ?? '[]'),
}

export const genreSlice = createSlice({
	name: 'genre',
	initialState,
	reducers: {
		addGenre(state, action: PayloadAction<string>) {
			state.genre.push(action.payload)
			localStorage.setItem(GENRE_KEY, JSON.stringify(state.genre))
		},
		removeGenre(state, action: PayloadAction<string>) {
			state.genre = state.genre.filter(f => f !== action.payload)
			localStorage.setItem(GENRE_KEY, JSON.stringify(state.genre))
		},
	},
})

export const genreActions = genreSlice.actions
export const genreReducer = genreSlice.reducer
