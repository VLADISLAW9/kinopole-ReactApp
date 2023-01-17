import React from 'react'
import { Link } from 'react-router-dom'
import { api } from '../store/data/api'
import FilmItem from './FilmItem'

const Films = () => {
	const { data: films } = api.useFetchNewFilmsQuery('')

	return (
		<div>
			<h1 className='text-3xl text-white font-semibold'>Новые фильмы</h1>
			<ul className='grid grid-cols-5 gap-8 mt-10 list-none'>
				{films?.map(film => (
						<FilmItem key={film.id} film={film} />
				))}
			</ul>
		</div>
	)
}

export default Films
