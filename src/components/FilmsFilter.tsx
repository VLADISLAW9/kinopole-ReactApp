import React from 'react'

const FilmsFilter = () => {
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
			<div className='flex'>
				<h1>Raiting</h1>
			</div>
		</div>
	)
}

export default FilmsFilter
