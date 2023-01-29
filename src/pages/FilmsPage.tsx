import React, { useState } from 'react'
import FilmsFilter from '../components/FilmsFilter'
import FilmsPageItem from '../components/FilmsPageItem'
import { useAppSelector } from '../hooks/redux.hook'
import { api } from '../store/data/api'

const FilmsPage = () => {
	const { isError, isLoading, data: films } = api.useFetchAllFilmsQuery('')
	const { genre, raiting, sorted, years } = useAppSelector(
		state => state.filter
	)

	console.log(
		films
			?.map(f => f)
			.sort((a, b) => Number(a.data) - Number(b.data))
			.map(f => f.data)
	)

	return (
		<div className='px-20 mt-10'>
			<h1 className='text-stone-500 text-[63px] font-bold'>All films</h1>
			<p className='text-stone-400 text-[13.2px]'>
				Selection of films from all over the world
			</p>
			<div className='flex justify-between mt-10'>
				<FilmsFilter />
				<div className='w-[300%]'>
					<ul className='flex flex-col '>
						{genre === 'all' ? (
							<>
								{sorted === 'new' ? (
									<>
										{films
											?.filter(
												f =>
													Number(f.data) >= years[0] &&
													Number(f.data) <= years[1]
											)
											.map(film => film)
											.sort((a, b) => Number(b.data) - Number(a.data))
											.map(film => (
												<FilmsPageItem film={film} />
											))}
									</>
								) : (
									<>
										{films
											?.filter(
												f =>
													Number(f.data) >= years[0] &&
													Number(f.data) <= years[1]
											)
											.map(film => film)
											.sort((a, b) => Number(a.data) - Number(b.data))
											.map(film => (
												<FilmsPageItem film={film} />
											))}
									</>
								)}
							</>
						) : (
							<>
								{sorted === 'new' ? (
									<>
										{films
											?.filter(
												f =>
													Number(f.data) >= years[0] &&
													Number(f.data) <= years[1] &&
													f.kind.some(f => f === genre)
											)
											.map(film => film)
											.sort((a, b) => Number(b.data) - Number(a.data))
											.map(film => (
												<FilmsPageItem film={film} />
											))}
									</>
								) : (
									<>
										{films
											?.filter(
												f =>
													Number(f.data) >= years[0] &&
													Number(f.data) <= years[1]
											)
											.map(film => film)
											.sort((a, b) => Number(a.data) - Number(b.data))
											.map(film => (
												<FilmsPageItem film={film} />
											))}
									</>
								)}
							</>
						)}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default FilmsPage
