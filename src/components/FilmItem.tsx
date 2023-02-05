import { CardMedia } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useActions} from '../hooks/actions.hook'
import { IFilms } from '../models/IFilms'

interface FilmItemProps {
	film: IFilms
}

const FilmItem: React.FC<FilmItemProps> = ({ film }) => {
	const { getFilmId } = useActions()

	const handleFilmId = () => {
		getFilmId(film.id) 
		window.scrollTo(0, 0)
	}

	return (
		<Link onClick={handleFilmId} to={`/film/${film.id}`}>
			<li className='hover:-translate-y-1 transition-all'>
				<div className=''>
				
					<CardMedia
						className='hover:opacity-75 transition-opacity'
						sx={{ height: 400 , borderRadius: 2 }}
						image={film.image}
						title='green iguana'
					/>
				</div>
				<h1 className='text-white mt-4 font-semibold'>{film.name}</h1>
				<p className='text-gray-400 mt-2 font-extralight'>{film.data}, Film</p>
			</li>
		</Link>
	)
}

export default FilmItem
