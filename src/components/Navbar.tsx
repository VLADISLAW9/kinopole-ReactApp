import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import NavSearch from './NavSearch'

const Navbar = () => {
	return (
		<ul className='navbar flex justify-between items-center w-full px-20 py-4 bg-stone-900 '>
			<li className='flex justify-start'>
				<Link to='/'>
					<Logo />
				</Link>
			</li>
			<li className='navbar__search w-[65%] '>
				<NavSearch />
			</li>
			<li className='flex justify-end w-[7%]'>
				<Link to='/profile'>
					<Avatar />
				</Link>
			</li>
		</ul>
	)
}

export default Navbar
