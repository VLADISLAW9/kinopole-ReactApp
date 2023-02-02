import React from 'react'
import { IFilms } from '../models/IFilms'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useActions } from '../hooks/actions.hook'

interface FilmItemProps {
	film: IFilms
}

const CarouselItem: React.FC<FilmItemProps> = ({ film }) => {
	const contentStyle: React.CSSProperties = {
		background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${film.background}')  center center no-repeat`,
		backgroundSize: 'cover',
	}

	const {getFilmId} = useActions()

	const handleFilmId = () => {
		getFilmId(film.id)
		window.scrollTo(0, 0)
	}

	return (
		<div
			className='bg-cover h-[500px] flex items-center px-20'
			style={contentStyle}
		>
			<div className='filter-none w-1/3'>
				<h1 className='text-5xl font-bold text-white'>{film.name}</h1>
				<p className='font-normal text-white mt-5'>{film.title}</p>
				<Link onClick={handleFilmId} to={`/film/${film.id}`}>
					<button className='hover:opacity-75 transition-opacity mt-7 px-7 py-3 bg-red-700 rounded-2xl text-white text-lg font-semibold flex items-center'>
						More
						<AiOutlineArrowRight className='ml-5 translate-y-px' />
					</button>
				</Link>
			</div>
		</div>
	)
}

export default CarouselItem
