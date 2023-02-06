import React, { useState } from 'react'
import FilmsFilter from '../components/FilmsFilter'
import FilmsPageItem from '../components/FilmsPageItem'
import { useAppSelector } from '../hooks/redux.hook'
import { api } from '../store/data/api'

const SeriesPage = () => {
	const { isError, isLoading, data: series } = api.useFetchAllSeriesQuery('')
	const { genre, raiting, sorted, years } = useAppSelector(
		state => state.filter
	)

	return (
		<div className='container__filmPage px-20 mt-10 mb-10'>
			<h1 className='filmPage__header text-stone-500 text-[63px] font-bold'>
				All films
			</h1>
			<p className='filmPage__title text-stone-400 text-[13.2px]'>
				Selection of films from all over the world
			</p>
			<div className='filmPage__block flex justify-between mt-10'>
				<FilmsFilter />
				<div className='filmPage__films '>
					<ul className='films__list flex flex-col '>
						{genre === 'all' ? (
							<>
								{sorted === 'new' ? (
									<>
										{series
											?.filter(
												f =>
													Number(f.data) >= years[0] &&
													Number(f.data) <= years[1]
											)
											.map(serial => serial)
											.sort((a, b) => Number(b.data) - Number(a.data))
											.map(serial => (
												<FilmsPageItem serial={serial} />
											))}
									</>
								) : (
									<>
										{series
											?.filter(
												f =>
													Number(f.data) >= years[0] &&
													Number(f.data) <= years[1]
											)
											.map(serial => serial)
											.sort((a, b) => Number(a.data) - Number(b.data))
											.map(serial => (
												<SerialPageItem serial={serial} />
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
													Number(f.data) <= years[1] &&
													f.kind.some(f => f === genre)
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

export default SeriesPage
