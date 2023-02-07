import React from 'react'
import { IFilms } from '../models/IFilms'
import { useSnapCarousel } from 'react-snap-carousel'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { CardMedia } from '@mui/material'

interface FilmInfoProps {
	filmInfo?: IFilms
}

const CarouselActors: React.FC<FilmInfoProps> = ({ filmInfo }) => {
	const { scrollRef, pages, activePageIndex, next, prev, goTo } =
		useSnapCarousel()
	return (
		<div className='mt-5 mb-10'>
			<div className='flex items-center justify-between'>
				<h1 className='text-white text-2xl font-medium'>
					Actors
					<span className='font-light text-gray-400 ml-3'>
						({filmInfo?.actors.length})
					</span>
				</h1>
				<div className=''>
					<button
						className='px-2 py-2 bg-stone-600 rounded-full  mr-4'
						onClick={() => prev()}
					>
						<MdKeyboardArrowRight className='w-7 h-7 text-white rotate-180' />
					</button>
					<button
						className='px-2 py-2 bg-stone-600 text-white rounded-full '
						onClick={() => next()}
					>
						<MdKeyboardArrowRight className='w-7 h-7' />
					</button>
				</div>
			</div>

			<ul
				className='mt-7 pt-4'
				ref={scrollRef}
				style={{
					display: 'flex',
					overflow: 'hidden',
					scrollSnapType: 'x mandatory',
				}}
			>
				{filmInfo?.actors.map(actor => (
					<li className='silmilar__item hover:-translate-y-1 w-[250px] mr-5 last:mr-0  cursor-pointer transition-transform flex items-start justify-center  flex-shrink-0'>
						<div>
							<div>
								<CardMedia
									className='semilar__image hover:opacity-75 transition-opacity'
									image={actor.image}
									title={actor.name}
								/>
							</div>
							<h1 className='mt-3 text-white font-medium'>{actor.name}</h1>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default CarouselActors
