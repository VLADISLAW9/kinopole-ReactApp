import React, { useState } from 'react'
import { useAppSelector } from '../hooks/redux.hook'
import { api } from '../store/data/api'
import { BsFillPlayFill } from 'react-icons/bs'
import { RiFlag2Line, RiFlag2Fill } from 'react-icons/ri'
import CarouselActors from '../components/CarouselActors'
import FilmPicture from '../components/FilmPicture'
import MoreFilms from '../components/MoreFilms'
import Comments from '../components/Commenst'

const FilmPage = () => {
	const [fav, setFav] = useState(false)
	const [value, setValue] = useState<string | number>('Description')
	const { filmId } = useAppSelector(state => state.getFilmId)
	const { data: filmInfo } = api.useFetchFilmInfoQuery(filmId)

	const addFav = () => {
		setFav(true)
	}

	const removeFav = () => {
		setFav(false)
	}

	const onDescription = () => {
		setValue('Description')
	}

	const onActors = () => {
		setValue('Actors')
	}

	const onImage = () => {
		setValue('Image')
	}

	

	return (
		<div className='px-20 mt-10'>
			<div className='flex mt-14'>
				<img className='w-1/4 h-1/4 rounded-md' src={filmInfo?.image} />
				<div className='ml-28'>
					<h1 className='text-white text-4xl font-bold'>
						{filmInfo?.name} ({filmInfo?.data})
					</h1>
					<div className='flex mt-10'>
						<button className='hover:opacity-75 transition-opacity px-5 py-3 bg-red-700  rounded-2xl text-white text-lg font-semibold flex items-center'>
							<BsFillPlayFill className=' w-6 h-6 translate-y-[0px]' />
							<span className='ml-1'>Watch</span>
						</button>
						{!fav && (
							<button
								onClick={addFav}
								className='hover:opacity-75 transition-opacity ml-10 px-5 py-3 bg-stone-600  rounded-2xl text-white text-lg font-semibold flex items-center'
							>
								<RiFlag2Line className=' w-6 h-6 translate-y-[0px]' />
								<span className='ml-2'>Will watch</span>
							</button>
						)}
						{fav && (
							<button
								onClick={removeFav}
								className='hover:opacity-75 transition-opacity ml-10 px-5 py-3 bg-stone-600 rounded-2xl text-white text-lg font-semibold flex items-center'
							>
								<RiFlag2Fill className=' w-6 h-6 translate-y-[0px]' />
								<span className='ml-2'>Won't watch</span>
							</button>
						)}
					</div>
					<h1 className='mt-10 text-white font-bold text-xl'>About the film</h1>
					<ul className='mt-7'>
						<li className='mt-4 flex'>
							<span className='block flex-initial w-36  text-gray-400'>
								Country
							</span>
							<span className='relative text-white '>{filmInfo?.country}</span>
						</li>
						<li className='mt-4 flex'>
							<span className='block flex-initial w-36  text-gray-400'>
								Kind
							</span>
							<span className='relative text-white '>
								{filmInfo?.kind.map(i => (
									<span className='mr-2'>{i}</span>
								))}
							</span>
						</li>
						<li className='mt-4 flex'>
							<span className='block flex-initial w-36  text-gray-400'>
								Age
							</span>
							<span className='relative text-white '>{filmInfo?.age}+</span>
						</li>
						<li className='mt-4 flex'>
							<span className='block flex-initial w-36  text-gray-400'>
								Time
							</span>
							<span className='relative text-white '>{filmInfo?.time} min</span>
						</li>
						<li className='mt-4 flex'>
							<span className='block flex-initial w-36  text-gray-400'>
								Budget
							</span>
							<span className='relative text-white '>{filmInfo?.budget}</span>
						</li>
					</ul>
				</div>
			</div>
			<ul className='flex mt-28'>
				<li
					onClick={onDescription}
					className={` ${
						value === 'Description'
							? 'border-b-2 border-red-700 pb-1 text-white font-semibold mr-10 cursor-pointer'
							: 'text-white font-semibold mr-10 pb-1 cursor-pointer'
					} `}
				>
					Description
				</li>
				<li
					onClick={onActors}
					className={` ${
						value === 'Actors'
							? 'border-b-2 border-red-700 pb-1 text-white font-semibold mr-10 cursor-pointer'
							: 'text-white font-semibold mr-10 pb-1 cursor-pointer '
					} `}
				>
					Actors
				</li>
				<li
					onClick={onImage}
					className={` ${
						value === 'Image'
							? 'border-b-2 border-red-700 pb-1 text-white font-semibold mr-10 cursor-pointer'
							: 'text-white font-semibold mr-10 pb-1 cursor-pointer'
					} `}
				>
					Image
				</li>
			</ul>
			{value === 'Description' && (
				<div className='mt-5 mb-20 '>
					<p className='text-white font-light leading-8'>{filmInfo?.title}</p>
				</div>
			)}
			{value === 'Actors' && <CarouselActors filmInfo={filmInfo} />}
			{value === 'Image' && <FilmPicture filmInfo={filmInfo} />}
			<MoreFilms filmInfo ={filmInfo}/>
			<Comments filmInfo={filmInfo}/>
		</div>
	)
}

export default FilmPage
