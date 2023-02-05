import React from 'react'
import { Link } from 'react-router-dom'
import { api } from '../store/data/api'
import CartoonItem from './CartoonItem'
import FilmItem from './FilmItem'

const Cartoons = () => {
	const { data: cartoons } = api.useFetchNewCartoonsQuery('')
	const handleClick = () => {
		window.scrollTo(0, 0)
	}
	return (
		<div>
			<div className='flex justify-between items-center mt-20'>
				<h1 className='text-3xl text-white font-semibold'>New cartoons</h1>
				<Link onClick={handleClick} to='/cartoons'>
					<button className='moreFilms__button hover:opacity-75 transition-opacity px-7 py-3 bg-red-700 rounded-2xl text-white text-lg font-semibold flex items-center'>
						More cartoons
					</button>
				</Link>
			</div>

			<ul className='films-grid mt-10 list-none'>
				{cartoons?.map(cartoon => (
					<CartoonItem key={cartoon.id} cartoon={cartoon} />
				))}
			</ul>
		</div>
	)
}

export default Cartoons
