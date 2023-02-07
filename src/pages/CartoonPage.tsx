import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../hooks/redux.hook'
import { api } from '../store/data/api'
import { BsFillPlayFill } from 'react-icons/bs'
import { RiFlag2Line, RiFlag2Fill } from 'react-icons/ri'
import CarouselActors from '../components/CarouselActors'
import FilmPicture from '../components/FilmPicture'
import MoreFilms from '../components/MoreFilms'
import Comments from '../components/Commenst'
import { Link } from 'react-router-dom'
import { useActions } from '../hooks/actions.hook'
import MoreCartoons from '../components/MoreCartoons'
import { CardMedia } from '@mui/material'

const CartoonPage = () => {
	const { cartoonId } = useAppSelector(state => state.getCartoonId)
	const { addWill, removeWill } = useActions()
	const { will } = useAppSelector(state => state.filmState)
	const { data: cartoonInfo } = api.useFetchCartoonInfoQuery(cartoonId)
	const [fav, setFav] = useState(false)
	const { getCartoonId } = useActions()
	const [value, setValue] = useState<string | number>('Description')

	useEffect(() => {
		for (let i = 0; i < will.length; i++) {
			if (will[i].name === cartoonInfo?.name) {
				setFav(true)
			} else {
				setFav(false)
			}
		}
	})

	const handleCartoonmId = () => {
		getCartoonId(cartoonInfo?.id)
		window.scrollTo(0, 0)
	}

	const addFav = () => {
		addWill(cartoonInfo)
		setFav(true)
	}

	const removeFav = () => {
		removeWill(cartoonInfo)
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
		<div className='container__filmPage px-20 mt-10 mb-20	'>
			<div className='filmPage flex mt-14'>
				<div className=''>
					<CardMedia
						className='filmPage__image hover:opacity-75 transition-opacity'
						image={cartoonInfo?.image}
						title={cartoonInfo?.name}
					/>
				</div>
				<div className='filmPage__info ml-28'>
					<h1 className='info__name text-white text-4xl font-bold'>
						{cartoonInfo?.name} ({cartoonInfo?.data})
					</h1>
					<div className='info__btns flex mt-10'>
						<Link
							onClick={handleCartoonmId}
							to={`/CartoonPlayer/${cartoonInfo?.id}`}
						>
							<button className='info__btn hover:opacity-75 transition-opacity px-5 py-3 bg-red-700  rounded-2xl text-white text-lg font-semibold flex items-center'>
								<BsFillPlayFill className=' w-6 h-6 translate-y-[0px]' />
								<span className='ml-1'>Watch</span>
							</button>
						</Link>
						{!fav && (
							<div>
								<button
									onClick={addFav}
									className='info__btn info__btn_fav hover:opacity-75 transition-opacity ml-10 px-5 py-3 bg-stone-600  rounded-2xl text-white text-lg font-semibold flex items-center'
								>
									<RiFlag2Line className=' w-6 h-6 translate-y-[0px]' />
									<span className='ml-2'>Will watch</span>
								</button>
							</div>
						)}
						{fav && (
							<div>
								<button
									onClick={removeFav}
									className='info__btn info__btn_fav hover:opacity-75 transition-opacity ml-10 px-5 py-3 bg-stone-600 rounded-2xl text-white text-lg font-semibold flex items-center'
								>
									<RiFlag2Fill className=' w-6 h-6 translate-y-[0px]' />
									<span className='ml-2'>Won't watch</span>
								</button>
							</div>
						)}
					</div>
					<h1 className='mt-10 text-white font-bold text-xl'>About the film</h1>
					<ul className='mt-7'>
						<li className='mt-4 flex'>
							<span className='block   w-36  text-gray-400'>Country</span>
							<span className='relative text-white '>
								{cartoonInfo?.country}
							</span>
						</li>
						<li className='mt-4 flex'>
							<span className='block flex-initial w-36  text-gray-400'>
								Kind
							</span>
							<span className='relative text-white '>
								{cartoonInfo?.kind.map(i => (
									<span className='mr-2'>{i}</span>
								))}
							</span>
						</li>
						<li className='mt-4 flex'>
							<span className='block flex-initial w-36  text-gray-400'>
								Age
							</span>
							<span className='relative text-white '>{cartoonInfo?.age}+</span>
						</li>
						<li className='mt-4 flex'>
							<span className='block flex-initial w-36  text-gray-400'>
								Time
							</span>
							<span className='relative text-white '>
								{cartoonInfo?.time} min
							</span>
						</li>
						<li className='mt-4 flex'>
							<span className='block flex-initial w-36  text-gray-400'>
								Budget
							</span>
							<span className='relative text-white '>
								{cartoonInfo?.budget}
							</span>
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
			</ul>
			{value === 'Description' && (
				<div className='mt-5 mb-20 '>
					<p className='text-white font-light leading-8'>
						{cartoonInfo?.title}
					</p>
				</div>
			)}
			<MoreCartoons cartoonInfo={cartoonInfo} />
			<Comments filmInfo={cartoonInfo} />
		</div>
	)
}

export default CartoonPage
