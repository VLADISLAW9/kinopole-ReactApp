import { Avatar } from '@mui/material'
import React from 'react'
import Logo from './Logo'
import NavSearch from './NavSearch'

const Navbar = () => {
	return (
		<div className='flex justify-between items-center w-full px-20 py-4 bg-stone-900 '>
			<Logo/>
			<NavSearch/>
			<Avatar/>
		</div>
	)
}

export default Navbar