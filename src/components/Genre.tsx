import { Chip } from '@mui/material'
import React, { useState } from 'react'
import { api } from '../store/data/api'
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'
import { useActions } from '../hooks/actions.hook'
import { useSelector } from 'react-redux'
import { useAppSelector } from '../hooks/redux.hook'

const Genre = () => {
	const { genre } = useAppSelector(state => state.genre)
	const { addGenre, removeGenre } = useActions()
	const [onAction, setOnAction] = useState(false)
	const [onFantasy, setOnFantasy] = useState(false)
	const [onHorror, setOnHorror] = useState(false)
	const [onComedy, setOnComedy] = useState(false)
	const [onCombat, setOnCombat] = useState(false)
	const [onDetective, setOnDetective] = useState(false)
	const [onThriller, setOnThriller] = useState(false)
	const [onDrama, setOnDrama] = useState(false)
	const [onAdventure, setOnAdventure] = useState(false)
	const [onCrime, setOnCrime] = useState(false)
	const [onScience, setOnScience] = useState(false)

	const addAction = () => {
		setOnAction(true)
		addGenre('Action')
	}
	const removeAction = () => {
		setOnAction(false)
		removeGenre('Action')
	}

	const addFantasy = () => {
		setOnFantasy(true)
		addGenre('Fantasy')
	}
	const removeFantasy = () => {
		setOnFantasy(false)
		removeGenre('Fantasy')
	}

	const addHorror = () => {
		setOnHorror(true)
		addGenre('Horror')
	}
	const removeHorror = () => {
		setOnHorror(false)
		removeGenre('Horror')
	}

	const addComedy = () => {
		setOnComedy(true)
		addGenre('Comedy')
	}
	const removeComedy = () => {
		setOnComedy(false)
		removeGenre('Comedy')
	}

	const addCombat = () => {
		setOnCombat(true)
		addGenre('Combat')
	}
	const removeCombat = () => {
		setOnCombat(false)
		removeGenre('Combat')
	}

	const addDetective = () => {
		setOnDetective(true)
		addGenre('Detective')
	}
	const removeDetective = () => {
		setOnDetective(false)
		removeGenre('Detective')
	}

	const addThriller = () => {
		setOnThriller(true)
		addGenre('Thriller')
	}
	const removeThiller = () => {
		setOnThriller(false)
		removeGenre('Thriller')
	}

	const addDrama = () => {
		setOnDrama(true)
		addGenre('Drama')
	}
	const removeDrama = () => {
		setOnDrama(false)
		removeGenre('Drama')
	}

	const addAdventure = () => {
		setOnAdventure(true)
		addGenre('Adventure')
	}
	const removeAdventure = () => {
		setOnAdventure(false)
		removeGenre('Adventure')
	}

	const addCrime = () => {
		setOnCrime(true)
		addGenre('Crime')
	}
	const removeCrime = () => {
		setOnCrime(false)
		removeGenre('Crime')
	}

	const addScience = () => {
		setOnScience(true)
		addGenre('Science')
	}
	const removeScience = () => {
		setOnScience(false)
		removeGenre('Science')
	}

	console.log(genre)

	return (
		<ul className='grid grid-cols-2'>
			<li className='mb-4 mr-4'>
				{!onAction && (
					<div
						onClick={addAction}
						className='px-1 cursor-pointer py-1 border border-stone-400 bg-stone-8800 								text-center text-stone-400 rounded-3xl flex items-center'
					>
						<span className='block w-[100px] flex-initial'>Action</span>
						<AiOutlinePlus className=' relative w-5 h-5 text-stone-400' />
					</div>
				)}
				{onAction && (
					<div
						onClick={removeAction}
						className='px-1 cursor-pointer py-1 border border-stone-400 bg-stone-700 									text-center text-stone-400 rounded-3xl flex items-center'
					>
						<span className='block w-[100px]  flex-initial'>Action</span>
						<AiOutlineClose className='relative  w-5 h-5 text-stone-400' />
					</div>
				)}
			</li>
			<li className='mb-4 mr-4'>
				{!onFantasy && (
					<div
						onClick={addFantasy}
						className='px-1 cursor-pointer py-1 border border-stone-400 bg-stone-8800 								text-center text-stone-400 rounded-3xl flex items-center'
					>
						<span className='block w-[100px] flex-initial'>Fantasy</span>
						<AiOutlinePlus className=' relative w-5 h-5 text-stone-400' />
					</div>
				)}
				{onFantasy && (
					<div
						onClick={removeFantasy}
						className='px-1 cursor-pointer py-1 border border-stone-400 bg-stone-700 									text-center text-stone-400 rounded-3xl flex items-center'
					>
						<span className='block w-[100px]  flex-initial'>Fantasy</span>
						<AiOutlineClose className='relative  w-5 h-5 text-stone-400' />
					</div>
				)}
			</li>
			<li className='mb-4 mr-4'>
				{!onHorror&& (
					<div
						onClick={addHorror}
						className='px-1 cursor-pointer py-1 border border-stone-400 bg-stone-8800 								text-center text-stone-400 rounded-3xl flex items-center'
					>
						<span className='block w-[100px] flex-initial'>Horror</span>
						<AiOutlinePlus className=' relative w-5 h-5 text-stone-400' />
					</div>
				)}
				{onHorror && (
					<div
						onClick={removeHorror}
						className='px-1 cursor-pointer py-1 border border-stone-400 bg-stone-700 									text-center text-stone-400 rounded-3xl flex items-center'
					>
						<span className='block w-[100px]  flex-initial'>Horror</span>
						<AiOutlineClose className='relative  w-5 h-5 text-stone-400' />
					</div>
				)}
			</li>
			<li className='mb-4 mr-4'>
				{!onComedy && (
					<div
						onClick={addComedy}
						className='px-1 cursor-pointer py-1 border border-stone-400 bg-stone-8800 								text-center text-stone-400 rounded-3xl flex items-center'
					>
						<span className='block w-[100px] flex-initial'>Comedy</span>
						<AiOutlinePlus className=' relative w-5 h-5 text-stone-400' />
					</div>
				)}
				{onComedy && (
					<div
						onClick={removeComedy}
						className='px-1 cursor-pointer py-1 border border-stone-400 bg-stone-700 									text-center text-stone-400 rounded-3xl flex items-center'
					>
						<span className='block w-[100px]  flex-initial'>Comedy</span>
						<AiOutlineClose className='relative  w-5 h-5 text-stone-400' />
					</div>
				)}
			</li>
			<li className='mb-4 mr-4'>
				{!onCombat && (
					<div
						onClick={addCombat}
						className='px-1 cursor-pointer py-1 border border-stone-400 bg-stone-8800 								text-center text-stone-400 rounded-3xl flex items-center'
					>
						<span className='block w-[100px] flex-initial'>Combat</span>
						<AiOutlinePlus className=' relative w-5 h-5 text-stone-400' />
					</div>
				)}
				{onCombat && (
					<div
						onClick={removeCombat}
						className='px-1 cursor-pointer py-1 border border-stone-400 bg-stone-700 									text-center text-stone-400 rounded-3xl flex items-center'
					>
						<span className='block w-[100px]  flex-initial'>Combat</span>
						<AiOutlineClose className='relative  w-5 h-5 text-stone-400' />
					</div>
				)}
			</li>
			<li className='mb-4 mr-4'>
				{!onDetective && (
					<div
						onClick={addDetective}
						className='px-1 cursor-pointer py-1 border border-stone-400 bg-stone-8800 								text-center text-stone-400 rounded-3xl flex items-center'
					>
						<span className='block w-[100px] flex-initial'>Detective</span>
						<AiOutlinePlus className=' relative w-5 h-5 text-stone-400' />
					</div>
				)}
				{onDetective && (
					<div
						onClick={removeDetective}
						className='px-1 cursor-pointer py-1 border border-stone-400 bg-stone-700 									text-center text-stone-400 rounded-3xl flex items-center'
					>
						<span className='block w-[100px]  flex-initial'>Detective</span>
						<AiOutlineClose className='relative  w-5 h-5 text-stone-400' />
					</div>
				)}
			</li>
			<li className='mb-4 mr-4'>
				{!onThriller && (
					<div
						onClick={addThriller}
						className='px-1 cursor-pointer py-1 border border-stone-400 bg-stone-8800 								text-center text-stone-400 rounded-3xl flex items-center'
					>
						<span className='block w-[100px] flex-initial'>Thriller</span>
						<AiOutlinePlus className=' relative w-5 h-5 text-stone-400' />
					</div>
				)}
				{onThriller && (
					<div
						onClick={removeThiller}
						className='px-1 cursor-pointer py-1 border border-stone-400 bg-stone-700 									text-center text-stone-400 rounded-3xl flex items-center'
					>
						<span className='block w-[100px]  flex-initial'>Thriller</span>
						<AiOutlineClose className='relative  w-5 h-5 text-stone-400' />
					</div>
				)}
			</li>
			<li className='mb-4 mr-4'>
				{!onDrama && (
					<div
						onClick={addDrama}
						className='px-1 cursor-pointer py-1 border border-stone-400 bg-stone-8800 								text-center text-stone-400 rounded-3xl flex items-center'
					>
						<span className='block w-[100px] flex-initial'>Drama</span>
						<AiOutlinePlus className=' relative w-5 h-5 text-stone-400' />
					</div>
				)}
				{onDrama && (
					<div
						onClick={removeDrama}
						className='px-1 cursor-pointer py-1 border border-stone-400 bg-stone-700 									text-center text-stone-400 rounded-3xl flex items-center'
					>
						<span className='block w-[100px]  flex-initial'>Drama</span>
						<AiOutlineClose className='relative  w-5 h-5 text-stone-400' />
					</div>
				)}
			</li>
			<li className='mb-4 mr-4'>
				{!onAdventure && (
					<div
						onClick={addAdventure}
						className='px-1 cursor-pointer py-1 border border-stone-400 bg-stone-8800 								text-center text-stone-400 rounded-3xl flex items-center'
					>
						<span className='block w-[100px] flex-initial'>Adventure</span>
						<AiOutlinePlus className=' relative w-5 h-5 text-stone-400' />
					</div>
				)}
				{onAdventure && (
					<div
						onClick={removeAdventure}
						className='px-1 cursor-pointer py-1 border border-stone-400 bg-stone-700 									text-center text-stone-400 rounded-3xl flex items-center'
					>
						<span className='block w-[100px]  flex-initial'>Adventure</span>
						<AiOutlineClose className='relative  w-5 h-5 text-stone-400' />
					</div>
				)}
			</li>
			<li className='mb-4 mr-4'>
				{!onCrime && (
					<div
						onClick={addCrime}
						className='px-1 cursor-pointer py-1 border border-stone-400 bg-stone-8800 								text-center text-stone-400 rounded-3xl flex items-center'
					>
						<span className='block w-[100px] flex-initial'>Crime</span>
						<AiOutlinePlus className=' relative w-5 h-5 text-stone-400' />
					</div>
				)}
				{onCrime && (
					<div
						onClick={removeCrime}
						className='px-1 cursor-pointer py-1 border border-stone-400 bg-stone-700 									text-center text-stone-400 rounded-3xl flex items-center'
					>
						<span className='block w-[100px]  flex-initial'>Crime</span>
						<AiOutlineClose className='relative  w-5 h-5 text-stone-400' />
					</div>
				)}
			</li>
			<li className='mb-4 mr-4'>
				{!onScience && (
					<div
						onClick={addScience}
						className='px-1 cursor-pointer py-1 border border-stone-400 bg-stone-8800 								text-center text-stone-400 rounded-3xl flex items-center'
					>
						<span className='block w-[100px] flex-initial'>Science</span>
						<AiOutlinePlus className=' relative w-5 h-5 text-stone-400' />
					</div>
				)}
				{onScience && (
					<div
						onClick={removeScience}
						className='px-1 cursor-pointer py-1 border border-stone-400 bg-stone-700 									text-center text-stone-400 rounded-3xl flex items-center'
					>
						<span className='block w-[100px]  flex-initial'>Science</span>
						<AiOutlineClose className='relative  w-5 h-5 text-stone-400' />
					</div>
				)}
			</li>
		</ul>
	)
}

export default Genre
