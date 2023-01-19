import React from 'react'
import { IFilms } from '../models/IFilms'
import { useSnapCarousel } from 'react-snap-carousel'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { api } from '../store/data/api'
import { Link } from 'react-router-dom'
import { useActions } from '../hooks/actions.hook'

interface FilmInfoProps {
	filmInfo?: IFilms
}

const MoreFilms: React.FC<FilmInfoProps> = ({ filmInfo }) => {
	const { getFilmId } = useActions()
	const { data: films } = api.useFetchSimilarFilmsQuery(filmInfo)
	const { scrollRef, pages, activePageIndex, next, prev, goTo } =
		useSnapCarousel()

	return (
		<div className='mt-5 mb-10'>
			<div className='flex items-center justify-between'>
				<h1 className='text-white text-2xl font-medium'>
					Similar films
					<span className='font-light text-gray-400 ml-3'>
						({films?.length})
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
				{films?.map(film => (
					<Link
						onClick={() => (getFilmId(film.id), window.scrollTo(0, 0))}
						className='hover:-translate-y-1 cursor-pointer transition-transform flex justify-center  flex-shrink-0 w-1/6 mr-5'
						to=''
					>
						<li>
							<div>
								<img
									className='hover:opacity-75 transition-opacity rounded-md'
									src={film.image}
								/>
								<h1 className='mt-3 text-white font-medium'>{film.name}</h1>
							</div>
						</li>
					</Link>
				))}
			</ul>
		</div>
	)
}

export default MoreFilms
