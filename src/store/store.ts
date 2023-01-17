import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { api } from "./data/api";
import { filmIdReducer } from "./slices/getFilmId.slice";

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		getFilmId: filmIdReducer,
	},
	middleware: getDefaultMiddleware => 
		getDefaultMiddleware().concat(api.middleware)
})

setupListeners(store.dispatch)

export type  RootState = ReturnType<typeof store.getState>