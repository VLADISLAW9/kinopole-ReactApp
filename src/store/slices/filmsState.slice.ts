import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilms } from '../../models/IFilms'

const WILL_KEY = 'will_k'
const NOW_KEY = 'now_k'
const WAS_KEY = 'was_k'

interface WillState {
	will: any[]
	now: any[]
	was: any[]
}

const initialState: WillState = {
	will: JSON.parse(localStorage.getItem(WILL_KEY) ?? '[]'),
	now: JSON.parse(localStorage.getItem(NOW_KEY) ?? '[]'),
	was: JSON.parse(localStorage.getItem(WAS_KEY) ?? '[]'),
}

export const filmStateSlice = createSlice({
	name: 'willItem',
	initialState,
	reducers: {
		addWill(state, action: PayloadAction<IFilms | undefined>) {
			state.will.push(action.payload)
			localStorage.setItem(WILL_KEY, JSON.stringify(state.will))
		},
		removeWill(state, action: PayloadAction<IFilms | undefined>) {
			state.will = state.will.filter(f => f.id !== action.payload?.id)
			localStorage.setItem(WILL_KEY, JSON.stringify(state.will))
		},

		addNow(state, action: PayloadAction<IFilms | undefined>) {
			state.now.push(action.payload)
			localStorage.setItem(NOW_KEY, JSON.stringify(state.now))
		},
		removeNow(state, action: PayloadAction<IFilms | undefined>) {
			state.now = state.now.filter(f => f.id !== action.payload?.id)
			localStorage.setItem(NOW_KEY, JSON.stringify(state.now))
		},

		addWas(state, action: PayloadAction<IFilms | undefined>) {
			state.was.push(action.payload)
			localStorage.setItem(WAS_KEY, JSON.stringify(state.was))
		},
		removeWas(state, action: PayloadAction<IFilms | undefined>) {
			state.was = state.was.filter(f => f.id !== action.payload?.id)
			localStorage.setItem(WAS_KEY, JSON.stringify(state.was))
		},
	},
})

export const filmStateActions = filmStateSlice.actions
export const filmStateReducer = filmStateSlice.reducer


