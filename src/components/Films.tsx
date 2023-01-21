import React from 'react'
import { Link } from 'react-router-dom'
import { api } from '../store/data/api'
import FilmItem from './FilmItem'

const Films = () => {
	const { data: films } = api.useFetchNewFilmsQuery('')

	return (
		<div>
			<div className='flex justify-between items-center'>
				<h1 className='text-3xl text-white font-semibold'>Новые фильмы</h1>
				<Link to='/films'>
					<button className='hover:opacity-75 transition-opacity px-7 py-3 bg-red-700 rounded-2xl text-white text-lg font-semibold flex items-center'>
						More films
					</button>
				</Link>
			</div>

			<ul className='films-grid grid grid-cols-5 gap-8 mt-10 list-none'>
				{films?.map(film => (
					<FilmItem key={film.id} film={film} />
				))}
			</ul>
		</div>
	)
}

export default Films
