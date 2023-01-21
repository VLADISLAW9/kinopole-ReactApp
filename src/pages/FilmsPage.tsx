import React from 'react'
import FilmsFilter from '../components/FilmsFilter'
import { api } from '../store/data/api'

const FilmsPage = () => {
	const {isError, isLoading, data: films } = api.useFetchAllFilmsQuery('')

	return (
		<div className='px-20 mt-10'>
			<h1 className='text-stone-500 text-[63px] font-bold'>All films</h1>
			<p className='text-stone-400 text-[13.2px]'>
				Selection of films from all over the world
			</p>
			<div className='flex justify-between mt-10'>
				<FilmsFilter/>
				<div>
					<ul className='flex flex-col '>
						{films?.map(film => (
							<li className='flex px-2 py-7 border-t-2 border-t-stone-700 '>
								<img
									className='w-[10%] h-[10%] rounded-md mr-5'
									src={film.image}
								/>
								<div>
									<h1 className='text-white font-medium text-xl'>
										{film.name}
									</h1>
									<p className='text-white font-light mt-3 text-lg'>
										{film.data}, {film.time} min.
									</p>
									<p className='mt-5 line-clamp-2 text-stone-400 font-extralight'>
										{film.title}
									</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default FilmsPage
