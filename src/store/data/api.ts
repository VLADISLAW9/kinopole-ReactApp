import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IFilms } from '../../models/IFilms'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
	tagTypes: ['api'],
	refetchOnFocus: true,
	endpoints: build => ({
		fetchCarouselFilms: build.query<IFilms[], string>({
			query: () => ({
				url: '/films?_limit=3',
			}),
			providesTags: result => ['api'],
		}),
		fetchNewFilms: build.query<IFilms[], string>({
			query: () => ({
				url: '/films?_limit=10',
			}),
			providesTags: result => ['api'],
		}),
		fetchFilmInfo: build.query<IFilms, number>({
			query: (fimlId: number) => ({
				url: `/films/${fimlId}`,
			}),
		}),
	}),
})
