import React, { useState } from 'react'
import CartoonsPageItem from '../components/CartoonsPageItem'
import FilmsFilter from '../components/FilmsFilter'
import FilmsPageItem from '../components/FilmsPageItem'
import { useAppSelector } from '../hooks/redux.hook'
import { api } from '../store/data/api'

const CartoonsPage = () => {
	const { isError, isLoading, data: cartoons } = api.useFetchAllCartoonsQuery('')
	const { genre, raiting, sorted, years } = useAppSelector(
		state => state.filter
	)

	// console.log(
	// 	films
	// 		?.map(f => f)
	// 		.sort((a, b) => Number(a.data) - Number(b.data))
	// 		.map(f => f.data)
	// )

	return (
		<div className='container__filmPage px-20 mt-10 mb-10'>
			<h1 className='filmPage__header text-stone-500 text-[63px] font-bold'>
				All cartoons
			</h1>
			<p className='filmPage__title text-stone-400 text-[13.2px]'>
				Selection of cartoons from all over the world
			</p>
			<div className='filmPage__block flex justify-between mt-10'>
				<FilmsFilter />
				<div className='filmPage__films '>
					<ul className='films__list flex flex-col '>
						{genre === 'all' ? (
							<>
								{sorted === 'new' ? (
									<>
										{cartoons
											?.filter(
												c =>
													Number(c.data) >= years[0] &&
													Number(c.data) <= years[1]
											)
											.map(cartoon => cartoon)
											.sort((a, b) => Number(b.data) - Number(a.data))
											.map(cartoon => (
												<CartoonsPageItem cartoon={cartoon} />
											))}
									</>
								) : (
									<>
										{cartoons
											?.filter(
												c =>
													Number(c.data) >= years[0] &&
													Number(c.data) <= years[1]
											)
											.map(cartoon => cartoon)
											.sort((a, b) => Number(a.data) - Number(b.data))
											.map(cartoon => (
												<CartoonsPageItem cartoon={cartoon} />
											))}
									</>
								)}
							</>
						) : (
							<>
								{sorted === 'new' ? (
									<>
										{cartoons
											?.filter(
												c =>
													Number(c.data) >= years[0] &&
													Number(c.data) <= years[1] &&
													c.kind.some(c => c === genre)
											)
											.map(cartoon => cartoon)
											.sort((a, b) => Number(b.data) - Number(a.data))
											.map(cartoon => (
												<CartoonsPageItem cartoon={cartoon} />
											))}
									</>
								) : (
									<>
										{cartoons
											?.filter(
												c =>
													Number(c.data) >= years[0] &&
													Number(c.data) <= years[1] &&
													c.kind.some(c => c === genre)
											)
											.map(cartoon => cartoon)
											.sort((a, b) => Number(a.data) - Number(b.data))
											.map(cartoon => (
												<CartoonsPageItem cartoon={cartoon} />
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

export default CartoonsPage
