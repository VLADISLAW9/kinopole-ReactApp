import React from 'react'
import { useActions } from '../hooks/actions.hook'
import { useAppSelector } from '../hooks/redux.hook'
import { pink } from '@mui/material/colors'
import Radio from '@mui/material/Radio'

const Sorted = () => {
	// const [sort, setSort] = React.useState('')
	const { sorted } = useAppSelector(state => state.filter)
	const { addSorted } = useActions()

	const [selectedValue, setSelectedValue] = React.useState('new')

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedValue(event.target.value)
		addSorted(event.target.value)
	}

	const controlProps = (item: string) => ({
		checked: selectedValue === item,
		onChange: handleChange,
		value: item,
		name: 'color-radio-button-demo',
		inputProps: { 'aria-label': item },
	})

	return (
		<ul className='flex flex-col'>
			<li className='flex items-center'>
				<Radio
					{...controlProps('new')}
					sx={{
						color: '#B91C1C',
						'&.Mui-checked': {
							color: '#B91C1C',
						},
					}}
				/><span className='text-stone-400 font-medium text-lg'>New first</span>
			</li>
			<li className='flex items-center'>
				<Radio
					{...controlProps('old')}
					sx={{
						color: '#B91C1C',
						'&.Mui-checked': {
							color: '#B91C1C',
						},
					}}
				/><span className='text-stone-400 font-medium text-lg'>Old first</span>
			</li>
		</ul>
	)
}

export default Sorted
