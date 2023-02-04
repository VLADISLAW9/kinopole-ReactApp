import React from 'react'
import Logo from './Logo'

const Footer = () => {
	return (
		<div className='footer flex justify-between items-center w-full px-20 py-14 bg-stone-900 '>
			<Logo />
			<ul className='footer__navlist flex items-center '>
				<li className='hover:opacity-75 navlist__item mr-10 cursor-pointer text-white font-medium  '>
					Films
				</li>
				<li className='hover:opacity-75 mr-10 navlist__item cursor-pointer text-white font-medium  '>
					Serials
				</li>
				<li className='hover:opacity-75 cursor-pointer navlist__item text-white font-medium '>
					Cartons
				</li>
			</ul>
			<p className=' text-stone-600'>© 2023 Kinopole</p>
		</div>
	)
}

export default Footer