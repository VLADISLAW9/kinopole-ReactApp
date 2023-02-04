import React from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Logo = () => {
	return (
		<div className='flex items-center'>
			<BsFillPlayCircleFill className='text-red-700 w-7	h-7' />
			<h1 className='logo text-red-700 text-2xl font ml-2'>KINOPOLE</h1>
		</div>
	)
}

export default Logo
