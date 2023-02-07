import { CardMedia } from '@mui/material'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useActions } from '../hooks/actions.hook'
import { IFilms } from '../models/IFilms'

interface FilmProps {
	cartoon: IFilms
}

const CartoonsPageItem: FC<FilmProps> = ({ cartoon }) => {
	const { getCartoonId } = useActions()

	const handleFilmId = () => {
		getCartoonId(cartoon.id)
		window.scrollTo(0, 0)
	}

	return (
		<Link
			className=' fillPage__block hover:bg-stone-700 hover:shadow-lg hover:shadow-stone-700 transition-all cursor-pointer'
			onClick={handleFilmId}
			to={`/cartoon/${cartoon.id}`}
		>
			<li className='filmPage__film flex px-2 py-7 cursor-pointer border-t-2 border-t-stone-700'>
				<div>
					<CardMedia
						className='film__image rounded-md mr-5'
						image={cartoon.image}
						title={cartoon.name}
					/>
				</div>
				<div className='filmPage__info'>
					<h1 className='text-white font-medium text-xl'>{cartoon.name}</h1>
					<p className='text-white font-light mt-3 text-lg'>
						{cartoon.data}
						<span className='film__time'>, {cartoon.time} min.</span>
					</p>
					<p className='film__title mt-5 line-clamp-2 text-stone-400 font-extralight'>
						{cartoon.title}
					</p>
				</div>
			</li>
		</Link>
	)
}

export default CartoonsPageItem
