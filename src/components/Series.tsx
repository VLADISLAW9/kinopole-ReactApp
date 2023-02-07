import React from 'react'
import { Link } from 'react-router-dom'
import { api } from '../store/data/api'
import FilmItem from './FilmItem'
import SerialItem from './SerialItem'

const Series = () => {
	const { data: series } = api.useFetchNewSeriesQuery('')
	// console.log(series)
	const handleClick = () => {
		window.scrollTo(0, 0)
	}
	return (
		<div className='mt-20 mb-20'>
			<div className='flex justify-between items-center'>
				<h1 className='text-3xl text-white font-semibold'>New series</h1>
				<Link onClick={handleClick} to='/series'>
					<button className='moreFilms__button hover:opacity-75 transition-opacity px-7 py-3 bg-red-700 rounded-2xl text-white text-lg font-semibold flex items-center'>
						More series
					</button>
				</Link>
			</div>
			<ul className='films-grid mt-10 list-none'>
				{series?.map(serial => (
					<SerialItem key={serial.id} serial={serial} />
				))}
			</ul>
		</div>
	)
}

export default Series
