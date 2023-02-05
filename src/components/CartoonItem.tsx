import { CardMedia } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useActions } from '../hooks/actions.hook'
import { IFilms } from '../models/IFilms'

interface CartoontemProps {
	cartoon: IFilms
}

const CartoonItem: React.FC<CartoontemProps> = ({ cartoon }) => {
	const { getCartoonId } = useActions()

	const handleCartoonId = () => {
		getCartoonId(cartoon.id)
		window.scrollTo(0, 0)
	}

	return (
		<Link onClick={handleCartoonId} to={`/cartoon/${cartoon.id}`}>
			<li className='hover:-translate-y-1 transition-all'>
				<div className=''>
					<CardMedia
						className='hover:opacity-75 transition-opacity'
						sx={{ height: 400, borderRadius: 2 }}
						image={cartoon.image}
						title='green iguana'
					/>
				</div>
				<h1 className='text-white mt-4 font-semibold'>{cartoon.name}</h1>
				<p className='text-gray-400 mt-2 font-extralight'>
					{cartoon.data}, Cartoon
				</p>
			</li>
		</Link>
	)
}

export default CartoonItem
