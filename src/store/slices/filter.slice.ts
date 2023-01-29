import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Action } from '@remix-run/router'

const FILTER_KEY = 'fk'

interface GenreState {
	raiting: number[]
	years: number[]
	genre: string
	sorted: string
}

const initialState: GenreState = {
	genre: 'all',
	raiting: [0, 10],
	years: [1960, 2023],
	sorted: 'new',
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		addGenre(state, action: PayloadAction<string>) {
			state.genre = action.payload
		},
		addRaiting(state, action: PayloadAction<number[]>) {
			state.raiting = action.payload
		},
		addYears(state, action: PayloadAction<number[]>) {
			state.years = action.payload
		},
		addSorted(state, action: PayloadAction<string>) {
			state.sorted = action.payload
		},
	},
})

export const filterActions = filterSlice.actions
export const filterReducer = filterSlice.reducer
