import React from 'react'

const NavSearch = () => {
	return (
		<div className='w-3/5'>
			<input
				placeholder="I'm searching for..."
				className='navSearch px-5 py-3 bg-stone-800 text-white w-4/5 rounded-3xl'
				type='text'
			/>
		</div>
	)
}

export default NavSearch
