import React from 'react'
import { Link } from 'react-router-dom'
import { api } from '../store/data/api'
import FilmItem from './FilmItem'

const Films = () => {
	const { data: films } = api.useFetchNewFilmsQuery('')
	const handleClick = () => {
		window.scrollTo(0, 0)
	}
	return (
		<div>
			<div className='flex justify-between items-center'>
				<h1 className='text-3xl text-white font-semibold'>New films</h1>
				<Link onClick={handleClick} to='/films'>
					<button className='moreFilms__button hover:opacity-75 transition-opacity px-7 py-3 bg-red-700 rounded-2xl text-white text-lg font-semibold flex items-center'>
						More films
					</button>
				</Link>
			</div>

			<ul className='films-grid mt-10 list-none'>
				{films?.map(film => (
					<FilmItem key={film.id} film={film} />
				))}
			</ul>
		</div>
	)
}

export default Films
