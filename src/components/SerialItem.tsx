import { CardMedia } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useActions } from '../hooks/actions.hook'
import { IFilms } from '../models/IFilms'

interface FilmItemProps {
	serial: IFilms
}

const SerialItem: React.FC<FilmItemProps> = ({ serial }) => {
	const { getSerialId } = useActions()

	const handleFilmId = () => {
		getSerialId(serial.id)
		window.scrollTo(0, 0)
	}

	return (
		<Link onClick={handleFilmId} to={`/serial/${serial.id}`}>
			<li className='hover:-translate-y-1 transition-all'>
				<div className=''>
					<CardMedia
						className='hover:opacity-75 transition-opacity'
						sx={{ height: 400, borderRadius: 2 }}
						image={serial.image}
						title={serial.name}
					/>
				</div>
				<h1 className='text-white mt-4 font-semibold'>{serial.name}</h1>
				<p className='text-gray-400 mt-2 font-extralight'>
					{serial.data}, Film
				</p>
			</li>
		</Link>
	)
}

export default SerialItem
