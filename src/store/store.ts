import { configureStore } from '@reduxjs/toolkit'
import { getDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { api } from './data/api'
import { filmStateReducer } from './slices/filmsState.slice'
import { filterReducer } from './slices/filter.slice'
import { cartoonIdReducer } from './slices/getCartoonId'
import { filmIdReducer } from './slices/getFilmId.slice'
import { serialIdReducer } from './slices/getSerialId.slice'

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		getFilmId: filmIdReducer,
		getCartoonId: cartoonIdReducer,
		getSerialId: serialIdReducer,
		filter: filterReducer,
		filmState: filmStateReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
