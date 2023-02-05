import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const CARTOON_ID_KEY = 'cik.'

interface CartoonIdState {
	cartoonId: number
}

const initialState: CartoonIdState = {
	cartoonId: JSON.parse(localStorage.getItem(CARTOON_ID_KEY) ?? '0'),
}

export const cartoonIdSlice = createSlice({
	name: 'cartoonId',
	initialState,
	reducers: {
		getCartoonId(state, action: PayloadAction<any>) {
			state.cartoonId = action.payload
			localStorage.setItem(CARTOON_ID_KEY, JSON.stringify(state.cartoonId))
		},
	},
})

export const cartoonIdAction = cartoonIdSlice.actions
export const cartoonIdReducer = cartoonIdSlice.reducer
