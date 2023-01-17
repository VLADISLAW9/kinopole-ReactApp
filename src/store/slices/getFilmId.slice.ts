import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const FILM_ID_KEY = 'fik.'

interface FilmIdState {
	filmId: number
}

const initialState: FilmIdState = {
	filmId: JSON.parse(localStorage.getItem(FILM_ID_KEY) ?? '0'),
}

export const filmIdSlice = createSlice({
	name: 'filmId',
	initialState,
	reducers: {
		getFilmId(state, action:PayloadAction<number>) {
			state.filmId = action.payload
			localStorage.setItem(FILM_ID_KEY, JSON.stringify(state.filmId))
		}
	}
})

export const filmIdAction = filmIdSlice.actions
export const filmIdReducer = filmIdSlice.reducer