import React from 'react'
import { IFilms } from '../models/IFilms'
import { useSnapCarousel } from 'react-snap-carousel'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { api } from '../store/data/api'
import { Link } from 'react-router-dom'
import { useActions } from '../hooks/actions.hook'
import { CardMedia } from '@mui/material'

interface SerialInfoProps {
	serialInfo?: IFilms
}

const MoreSeries: React.FC<SerialInfoProps> = ({ serialInfo }) => {
	const { getSerialId } = useActions()
	const { data: serials } = api.useFetchSimilarSeriesQuery(serialInfo)
	const { scrollRef, pages, activePageIndex, next, prev, goTo } =
		useSnapCarousel()

	return (
		<div className='mt-5 mb-10'>
			<div className='similar__header flex items-center justify-between'>
				<h1 className='text-white text-2xl font-medium'>
					Similar series
					<span className='font-light text-gray-400 ml-3'>
						({serials?.length})
					</span>
				</h1>
				<div className='similar__btns'>
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
				className='similar__list mt-7 pt-4'
				ref={scrollRef}
				style={{
					display: 'flex',
					overflow: 'hidden',
					scrollSnapType: 'x mandatory',
				}}
			>
				{serials?.map(serial => (
					<Link
						onClick={() => (getSerialId(serial.id), window.scrollTo(0, 0))}
						className='silmilar__item hover:-translate-y-1 w-[250px] mr-5 last:mr-0  cursor-pointer transition-transform flex items-start justify-center  flex-shrink-0'
						to='/film/:id'
					>
						<li className='similar__film'>
							<div>
								<CardMedia
									className='semilar__image hover:opacity-75 transition-opacity'
									image={serial.image}
									title={serial.name}
								/>
							</div>
							<h1 className='mt-3 text-white font-medium'>{serial.name}</h1>
						</li>
					</Link>
				))}
			</ul>
		</div>
	)
}

export default MoreSeries
