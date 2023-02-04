import React, { useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useAppSelector } from '../hooks/redux.hook'
import Genre from './Genre'
import RaitingRange from './RaitingRange'
import Sorted from './Sorted'
import YearsRange from './YearsRange'

const FilmsFilter = () => {
	const [onRaiting, setOnRaiting] = useState(true)
	const [onYears, setOnYears] = useState(true)
	const { genre, raiting, sorted, years } = useAppSelector(
		state => state.filter
	)

	const handleRaiting = () => {
		setOnRaiting(prev => !prev)
	}

	const handleYears = () => {
		setOnYears(prev => !prev)
	}

	return (
		<div className=' mr-10'>
			<div className='filter__display'>
				<h1 className='display__header px-2 py-1 border-2 text-stone-400 border-stone-600 rounded-md text-center font-bold'>
					<span className='font-medium text-stone-400'>Raiting:</span>{' '}
					{raiting[0]} - {raiting[1]}
				</h1>
				<h1 className='display__header px-2 py-1 border-2 text-stone-400 border-stone-600 rounded-md text-center mt-2 font-bold'>
					<span className='font-medium'>Years of production:</span> {years[0]} -{' '}
					{years[1]}
				</h1>
				<div className='display__header px-2 py-1 border-2 flex justify-center  text-stone-400 border-stone-600 rounded-md text-center  mt-2 font-bold'>
					<h1 className='font-medium mr-1'>
						Genre: <span className='font-bold'>{genre}</span>
					</h1>
				</div>
				<h1 className='display__header px-2 py-1 border-2 text-stone-400 border-stone-600 rounded-md text-center  mt-2 font-bold'>
					<span className='font-medium display__header'>Release year:</span>{' '}
					{sorted === 'new' && <>New first</>}{' '}
					{sorted === 'old' && <>Old first</>}
				</h1>
			</div>

			<ul className='filter flex flex-col mt-7'>
				<li className='filter__item mb-4 flex flex-col py-3'>
					<div className='filter__content flex justify-between items-center mb-5'>
						<h1 className='filter__header block flex-initial w-48 text-xl font-bold text-stone-400'>
							Raiting
						</h1>
						<MdKeyboardArrowRight
							onClick={handleRaiting}
							className={
								onRaiting
									? 'text-stone-400 filter__arrow rotate-90 w-8 h-8'
									: 'text-stone-400 filter__arrow -rotate-90 w-8 h-8'
							}
						/>
					</div>
					{onRaiting && <RaitingRange />}
				</li>
				<li className='filter__item mb-4 flex flex-col py-3'>
					<div className='filter__content flex justify-between items-center mb-5'>
						<h1 className='filter__header block justify-between flex-initial w-48 text-xl font-bold text-stone-400'>
							Years
						</h1>
						<MdKeyboardArrowRight
							onClick={handleYears}
							className={
								onYears
									? 'text-stone-400 	filter__arrow rotate-90 w-8 h-8'
									: 'text-stone-400 filter__arrow -rotate-90 w-8 h-8'
							}
						/>
					</div>
					{onYears && <YearsRange />}
				</li>
				<li className='filter__item mb-4 flex flex-col py-3'>
					<div className='filter__content flex justify-between items-center mb-5'>
						<h1 className='filter__header block flex-initial w-48 text-xl font-bold text-stone-400'>
							Genres
						</h1>
						<MdKeyboardArrowRight
							onClick={handleRaiting}
							className={
								onRaiting
									? 'filter__arrow text-stone-400 rotate-90 w-8 h-8'
									: 'text-stone-400 filter__arrow -rotate-90 w-8 h-8'
							}
						/>
					</div>
					{onRaiting && <Genre />}
				</li>
				<li className='filter__item mb-4 flex flex-col py-3'>
					<div className='filter__content flex justify-between items-center mb-5'>
						<h1 className='filter__header block flex-initial w-48 text-xl font-bold text-stone-400'>
							Sorted
						</h1>
						<MdKeyboardArrowRight
							onClick={handleRaiting}
							className={
								onRaiting
									? 'text-stone-400 filter__arrow rotate-90 w-8 h-8'
									: 'text-stone-400 filter__arrow -rotate-90 w-8 h-8'
							}
						/>
					</div>
					{onRaiting && <Sorted />}
				</li>
			</ul>
		</div>
	)
}

export default FilmsFilter
