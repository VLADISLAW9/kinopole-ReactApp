import React, { useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Genre from './Genre'
import RaitingRange from './RaitingRange'
import YearsRange from './YearsRange'

const FilmsFilter = () => {
	const [onRaiting, setOnRaiting] = useState(true)
	const [onYears, setOnYears] = useState(true)

	const handleRaiting = () => {
		setOnRaiting(prev => !prev)
	}

	const handleYears = () => {
		setOnYears(prev => !prev)
	}

	return (
		<div className='w-[80%] mr-10'>
			<h1 className='px-2 py-1 border-2 text-stone-400 border-stone-600 rounded-md text-center font-bold'>
				<span className='font-medium text-stone-400'>Raiting:</span> 1 - 10
			</h1>
			<h1 className='px-2 py-1 border-2 text-stone-400 border-stone-600 rounded-md text-center mt-2 font-bold'>
				<span className='font-medium'>Years of production:</span> 1960 - 2023
			</h1>
			<h1 className='px-2 py-1 border-2 text-stone-400 border-stone-600 rounded-md text-center  mt-2 font-bold'>
				<span className='font-medium'>Genre:</span> All genres
			</h1>
			<h1 className='px-2 py-1 border-2 text-stone-400 border-stone-600 rounded-md text-center  mt-2 font-bold'>
				<span className='font-medium'>Release year:</span> New first
			</h1>
			<ul className='flex flex-col mt-7'>
				<li className='mb-4 flex flex-col py-3'>
					<div className='flex items-center mb-5'>
						<h1 className='block flex-initial w-48 text-xl font-bold text-stone-400'>
							Raiting
						</h1>
						<MdKeyboardArrowRight
							onClick={handleRaiting}
							className={
								onRaiting
									? 'text-stone-400 rotate-90 w-8 h-8'
									: 'text-stone-400 -rotate-90 w-8 h-8'
							}
						/>
					</div>
					{onRaiting && <RaitingRange />}
				</li>
				<li className='mb-4 flex flex-col py-3'>
					<div className='flex items-center mb-5'>
						<h1 className='block flex-initial w-48 text-xl font-bold text-stone-400'>
							Years
						</h1>
						<MdKeyboardArrowRight
							onClick={handleYears}
							className={
								onYears
									? 'text-stone-400 rotate-90 w-8 h-8'
									: 'text-stone-400 -rotate-90 w-8 h-8'
							}
						/>
					</div>
					{onYears && <YearsRange />}
				</li>
				<li className='mb-4 flex flex-col py-3'>
					<div className='flex items-center mb-5'>
						<h1 className='block flex-initial w-48 text-xl font-bold text-stone-400'>
							Genre
						</h1>
						<MdKeyboardArrowRight
							onClick={handleRaiting}
							className={
								onRaiting
									? 'text-stone-400 rotate-90 w-8 h-8'
									: 'text-stone-400 -rotate-90 w-8 h-8'
							}
						/>
					</div>
					{onRaiting && <Genre />}
				</li>
				<li className='mb-4 flex flex-col py-3'>
					<div className='flex items-center mb-5'>
						<h1 className='block flex-initial w-48 text-xl font-bold text-stone-400'>
							Genre
						</h1>
						<MdKeyboardArrowRight
							onClick={handleRaiting}
							className={
								onRaiting
									? 'text-stone-400 rotate-90 w-8 h-8'
									: 'text-stone-400 -rotate-90 w-8 h-8'
							}
						/>
					</div>
					{/* {onRaiting && <Genre/>} */}
				</li>
			</ul>
		</div>
	)
}

export default FilmsFilter
