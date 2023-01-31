import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useActions } from '../hooks/actions.hook'
import { IFilms } from '../models/IFilms'

interface FilmProps {
	film: IFilms
}

const FilmsPageItem: FC<FilmProps> = ({ film }) => {
	const { getFilmId } = useActions()

	const handleFilmId = () => {
		getFilmId(film.id)
		window.scrollTo(0, 0)
	}

	return (
		<Link
			className='hover:bg-stone-700 hover:shadow-lg hover:shadow-stone-700 transition-all cursor-pointer'
			onClick={handleFilmId}
			to={`/film/${film.id}`}
		>
			<li className='flex  px-2 py-7 cursor-pointer border-t-2 border-t-stone-700 '>
				<img className='w-[10%] h-[10%] rounded-md mr-5' src={film.image} />
				<div>
					<h1 className='text-white font-medium text-xl'>{film.name}</h1>
					<p className='text-white font-light mt-3 text-lg'>
						{film.data}, {film.time} min.
					</p>
					<p className='mt-5 line-clamp-2 text-stone-400 font-extralight'>
						{film.title}
					</p>
				</div>
			</li>
		</Link>
	)
}

export default FilmsPageItem
