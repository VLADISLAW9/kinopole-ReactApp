import React, { useState } from 'react'
import { useAppSelector } from '../hooks/redux.hook'
import { api } from '../store/data/api'
import { BsFillPlayFill } from 'react-icons/bs'
import { RiFlag2Line, RiFlag2Fill } from 'react-icons/ri'
import { Segmented } from 'antd'

const FilmPage = () => {
	const [fav, setFav] = useState(false)
	const [value, setValue] = useState<string | number>('Сохраненные')
	const { filmId } = useAppSelector(state => state.getFilmId)
	const { data: filmInfo } = api.useFetchFilmInfoQuery(filmId)

	const addFav = () => {
		setFav(true)
	}

	const removeFav = () => {
		setFav(false)
	}

	return (
		<div className='px-20 mt-10'>
			<div className='flex'>
				<img className='w-1/5 rounded-md' src={filmInfo?.image} />
				<div className='ml-28'>
					<h1 className='text-white text-4xl font-bold'>
						{filmInfo?.name} ({filmInfo?.data})
					</h1>
					<div className='flex mt-10'>
						<button className='px-5 py-3 bg-red-700  rounded-2xl text-white text-lg font-semibold flex items-center'>
							<BsFillPlayFill className=' w-6 h-6 translate-y-[0px]' />
							<span className='ml-1'>Watch</span>
						</button>
						{!fav && (
							<button
								onClick={addFav}
								className='ml-10 px-5 py-3 bg-stone-600  rounded-2xl text-white text-lg font-semibold flex items-center'
							>
								<RiFlag2Line className=' w-6 h-6 translate-y-[0px]' />
								<span className='ml-2'>Will watch</span>
							</button>
						)}
						{fav && (
							<button
								onClick={removeFav}
								className='ml-10 px-5 py-3 bg-stone-600 rounded-2xl text-white text-lg font-semibold flex items-center'
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
			{/* <Segmented
				className='mt-20 bg-stone-800'
				options={['Description', 'Actors', 'Image']}
				value={value}
				onChange={setValue}
			/> */}
			
		</div>
	)
}

export default FilmPage
