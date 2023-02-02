import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useActions } from '../hooks/actions.hook'
import { useAppSelector } from '../hooks/redux.hook'
import { useSnapCarousel } from 'react-snap-carousel'
import { FaRegSadCry } from 'react-icons/fa'

const ProfilePage = () => {
	const [value, setValue] = useState<string | number>('will')
	const { will, was, now } = useAppSelector(state => state.filmState)
	const { getFilmId } = useActions()
	const { scrollRef, pages, activePageIndex, next, prev, goTo } =
		useSnapCarousel()

	const onWillWatch = () => {
		setValue('will')
	}

	const onWatching = () => {
		setValue('now')
	}

	const onWasWatch = () => {
		setValue('was')
	}

	useEffect(() => {
		for (let i = 1; i < now.length - 1; i++) {
			if (now[i].id === now[i + 1].id) {
				now.splice(now[i], 1)
			}
		}
	})

	return (
		<div className='px-20 mt-20 mb-20'>
			<div className='flex flex-col justify-center items-center'>
				<Avatar sx={{ width: 100, height: 100 }} />
				<span className='text-3xl font-medium text-stone-400 mt-5'>
					Сinephile
				</span>
			</div>
			<ul className='flex mt-20 justify-center'>
				<li
					onClick={onWillWatch}
					className={` ${
						value === 'will'
							? 'border-b-2 border-red-700 pb-1 text-white font-semibold  cursor-pointer'
							: 'text-white font-semibold  pb-1 cursor-pointer'
					} `}
				>
					Will watch
				</li>
				<li
					onClick={onWatching}
					className={` ${
						value === 'now'
							? 'border-b-2 border-red-700 pb-1 text-white font-semibold ml-10 cursor-pointer'
							: 'text-white font-semibold ml-10 pb-1 cursor-pointer '
					} `}
				>
					Watching
				</li>
				<li
					onClick={onWasWatch}
					className={` ${
						value === 'was'
							? 'border-b-2 border-red-700 pb-1 text-white font-semibold ml-10 cursor-pointer'
							: 'text-white font-semibold ml-10 pb-1 cursor-pointer'
					} `}
				>
					Was watch
				</li>
			</ul>
			{value === 'will' && (
				<ul
					className='mt-7 pt-4'
					ref={scrollRef}
					style={{
						display: 'flex',
						overflow: 'hidden',
						justifyContent: 'center',
						scrollSnapType: 'x mandatory',
					}}
				>
					{will.length > 0 ? (
						<>
							{will.map(film => (
								<Link
									onClick={() => (getFilmId(film.id), window.scrollTo(0, 0))}
									className='hover:-translate-y-1 cursor-pointer transition-transform flex justify-center  flex-shrink-0 w-1/6 mr-5'
									to='/film/:id'
								>
									<li>
										<div>
											<img
												className='hover:opacity-75 transition-opacity rounded-md'
												src={film.image}
											/>
											<h1 className='mt-3 text-white font-medium'>
												{film.name}
											</h1>
										</div>
									</li>
								</Link>
							))}
						</>
					) : (
						<li className='flex flex-col mt-5 justify-center items-center'>
							<FaRegSadCry className='text-stone-700 w-32 h-32' />
							<p className='font-bold mt-3 text-stone-700 text-xl'>
								Not a films
							</p>
						</li>
					)}
				</ul>
			)}
			{value === 'now' && (
				<>
					<ul
						className='mt-7 pt-4'
						ref={scrollRef}
						style={{
							display: 'flex',
							overflow: 'hidden',
							justifyContent: 'center',
							scrollSnapType: 'x mandatory',
						}}
					>
						{now.length > 0 ? (
							<>
								{now.map(film => (
									<Link
										onClick={() => (getFilmId(film.id), window.scrollTo(0, 0))}
										className='hover:-translate-y-1 cursor-pointer transition-transform flex justify-center  flex-shrink-0 w-1/6 mr-5'
										to='/player/:id'
									>
										<li>
											<div>
												<img
													className='hover:opacity-75 transition-opacity rounded-md'
													src={film.image}
												/>
												<h1 className='mt-3 text-white font-medium'>
													{film.name}
												</h1>
											</div>
										</li>
									</Link>
								))}
							</>
						) : (
							<li className='flex flex-col mt-5 justify-center items-center'>
								<FaRegSadCry className='text-stone-700 w-32 h-32' />
								<p className='font-bold mt-3 text-stone-700 text-xl'>
									Not a films
								</p>
							</li>
						)}
					</ul>
				</>
			)}
			{value === 'was' && (
				<>
					<ul
						className='mt-7 pt-4'
						ref={scrollRef}
						style={{
							display: 'flex',
							overflow: 'hidden',
							justifyContent: 'center',
							scrollSnapType: 'x mandatory',
						}}
					>
						{was.length > 0 ? (
							<>
								{was.map(film => (
									<Link
										onClick={() => (getFilmId(film.id), window.scrollTo(0, 0))}
										className='hover:-translate-y-1 cursor-pointer transition-transform flex justify-center  flex-shrink-0 w-1/6 mr-5'
										to='/film/:id'
									>
										<li>
											<div>
												<img
													className='hover:opacity-75 transition-opacity rounded-md'
													src={film.image}
												/>
												<h1 className='mt-3 text-white font-medium'>
													{film.name}
												</h1>
											</div>
										</li>
									</Link>
								))}
							</>
						) : (
							<li className='flex flex-col mt-5 justify-center items-center'>
								<FaRegSadCry className='text-stone-700 w-32 h-32' />
								<p className='font-bold mt-3 text-stone-700 text-xl'>
									Not a films
								</p>
							</li>
						)}
					</ul>
				</>
			)}
		</div>
	)
}

export default ProfilePage
