import { FormControl, InputLabel, NativeSelect } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import InputBase from '@mui/material/InputBase'

const Sorted = () => {
	const [sort, setSort] = React.useState('')
	const handleChange = (event: any) => {
		setSort(event.target.value)
	}

	return (
		<FormControl sx={{ m: 1 }} variant='standard'>
			<InputLabel
				sx={{ color: 'rgb(168 162 158 / 1)'}}
				htmlFor='demo-customized-select-native'
			>
				Selected
			</InputLabel>
			<NativeSelect
				className='text-stone-400'
				id='demo-customized-select-native'
				value={sort}
				onChange={handleChange}
			>
				<option aria-label='None' value='' />
				<option className='text-stone-500' value={'New'}>
					New First
				</option>
				<option className='text-stone-500' value={'Old'}>
					Old First
				</option>
			</NativeSelect>
		</FormControl>
	)
}

export default Sorted
