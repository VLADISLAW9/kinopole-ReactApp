import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const SERIES_ID_KEY = 'sik.'

interface SerialIdState {
	serialId: number
}

const initialState: SerialIdState = {
	serialId: JSON.parse(localStorage.getItem(SERIES_ID_KEY) ?? '0'),
}

export const serialIdSlice = createSlice({
	name: 'serialId',
	initialState,
	reducers: {
		getSerialId(state, action: PayloadAction<any>) {
			state.serialId = action.payload
			localStorage.setItem(SERIES_ID_KEY, JSON.stringify(state.serialId))
		},
	},
})

export const serialIdAction = serialIdSlice.actions
export const serialIdReducer = serialIdSlice.reducer
