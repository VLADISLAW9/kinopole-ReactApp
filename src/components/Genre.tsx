import { Chip } from '@mui/material'
import React from 'react'

const Genre = () => {
	const handleClick = () => {
		console.info('You clicked the Chip.')
	}

	const handleDelete = () => {
		console.info('You clicked the delete icon.')
	}
	return (
		<ul className='grid '>
			<li>
				<Chip
					label='Green'
					sx={{ backgroundColor: '#44403C', color: '#A8A29E' }}
					// variant='outlined'
					onClick={handleClick}
					onDelete={handleDelete}
				/>
			</li>
		</ul>
	)
}

export default Genre
