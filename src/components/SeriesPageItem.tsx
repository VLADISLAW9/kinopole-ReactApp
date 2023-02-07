import { CardMedia } from '@mui/material'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useActions } from '../hooks/actions.hook'
import { IFilms } from '../models/IFilms'

interface FilmProps {
	serial: IFilms
}

const SeriesPageItem: FC<FilmProps> = ({ serial }) => {
	const { getSerialId } = useActions()

	const handleSerialId = () => {
		getSerialId(serial.id)
		window.scrollTo(0, 0)
	}

	return (
		<Link
			className=' fillPage__block hover:bg-stone-700 hover:shadow-lg hover:shadow-stone-700 transition-all cursor-pointer'
			onClick={handleSerialId}
			to={`/serial/${serial.id}`}
		>
			<li className='filmPage__film flex px-2 py-7 cursor-pointer border-t-2 border-t-stone-700'>
				<div>
					<CardMedia
						className='film__image rounded-md mr-5'
						image={serial.image}
						title={serial.name}
					/>
				</div>
				<div className='filmPage__info'>
					<h1 className='text-white font-medium text-xl'>{serial.name}</h1>
					<p className='text-white font-light mt-3 text-lg'>
						{serial.data}
						<span className='film__time'>, {serial.time} min.</span>
					</p>
					<p className='film__title mt-5 line-clamp-2 text-stone-400 font-extralight'>
						{serial.title}
					</p>
				</div>
			</li>
		</Link>
	)
}

export default SeriesPageItem
