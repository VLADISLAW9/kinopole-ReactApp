import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useActions } from '../hooks/actions.hook'
import { useAppSelector } from '../hooks/redux.hook'
import { useSnapCarousel } from 'react-snap-carousel'
import { FaRegSadCry } from 'react-icons/fa'
import ProfilePageFilm from '../components/ProfilePageFilm'
import ProfilePageCartoon from '../components/ProfilePageCartoon'
import ProfilePageSerial from '../components/ProfilePageSerial'

const ProfilePage = () => {
	const [value, setValue] = useState<string | number>('will')
	const { will, was, now } = useAppSelector(state => state.filmState)
	const { getFilmId, getCartoonId, getSerialId } = useActions()
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

	return (
		<div className='px-20 mt-20 mb-20'>
			<div className='flex flex-col justify-center items-center'>
				<Avatar sx={{ width: 100, height: 100 }} />
				<span className='text-3xl font-medium text-stone-400 mt-5'>
					Сinephile
				</span>
			</div>
			<ul className='flex mt-20 justify-center '>
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
				<>
					{will.length > 0 && (
						<ul className='profile__list mt-7'>
							{will.map(film => (
								<>
									{film.type === 'film' && (
										<ProfilePageFilm key={film.name} film={film} />
									)}
									{film.type === 'cartoon' && (
										<ProfilePageCartoon key={film.name} film={film} />
									)}
									{film.type === 'serial' && (
										<ProfilePageSerial key={film.name} film={film} />
									)}
								</>
							))}
						</ul>
					)}
					{will.length === 0 && (
						<ul>
							<li className='flex flex-col mt-20 mb-20 justify-center items-center'>
								<FaRegSadCry className='text-stone-700 w-32 h-32' />
								<p className='font-bold mt-3 text-stone-700 text-xl'>
									Not a films
								</p>
							</li>
						</ul>
					)}
				</>
			)}
			{value === 'now' && (
				<>
					{now.length > 0 && (
						<ul className='profile__list mt-7'>
							{now.map(film => (
								<>
									{film.type === 'film' && (
										<ProfilePageFilm key={film.name} film={film} />
									)}
									{film.type === 'cartoon' && (
										<ProfilePageCartoon key={film.name} film={film} />
									)}
									{film.type === 'serial' && (
										<ProfilePageSerial key={film.name} film={film} />
									)}
								</>
							))}
						</ul>
					)}
					{now.length === 0 && (
						<ul>
							<li className='flex flex-col mt-20 mb-20 justify-center items-center'>
								<FaRegSadCry className='text-stone-700 w-32 h-32' />
								<p className='font-bold mt-3 text-stone-700 text-xl'>
									Not a films
								</p>
							</li>
						</ul>
					)}
				</>
			)}
			{value === 'was' && (
				<>
					{was.length > 0 && (
						<ul className='mt-7 profile__list'>
							{now.map(film => (
								<>
									{film.type === 'film' && (
										<ProfilePageFilm key={film.name} film={film} />
									)}
									{film.type === 'cartoon' && (
										<ProfilePageCartoon key={film.name} film={film} />
									)}
									{film.type === 'serial' && (
										<ProfilePageSerial key={film.name} film={film} />
									)}
								</>
							))}
						</ul>
					)}
					{was.length === 0 && (
						<ul>
							<li className='flex flex-col mt-20 mb-20 justify-center items-center'>
								<FaRegSadCry className='text-stone-700 w-32 h-32' />
								<p className='font-bold mt-3 text-stone-700 text-xl'>
									Not a films
								</p>
							</li>
						</ul>
					)}
				</>
			)}
		</div>
	)
}

export default ProfilePage
