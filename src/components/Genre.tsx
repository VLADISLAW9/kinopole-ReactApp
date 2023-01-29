import { Chip } from '@mui/material'
import React, { useState } from 'react'
import { api } from '../store/data/api'
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai'
import { useActions } from '../hooks/actions.hook'
import { useSelector } from 'react-redux'
import { useAppSelector } from '../hooks/redux.hook'
import { Select } from 'antd'

const Genre = () => {
	const { genre } = useAppSelector(state => state.filter)
	const { addGenre} = useActions()
	const handleChange = (value: string) => {
		addGenre(value)
	}
	return (
		<div className='flex justify-center'>
			<Select
				defaultValue='all'
				showSearch
				onChange={handleChange}
				style={{ width: '100%'}}
				placeholder='Search to Select'
				optionFilterProp='children'
				filterOption={(input, option) => (option?.label ?? '').includes(input)}
				// filterSort={(optionA, optionB) =>
				// 	(optionA?.value ?? '')
				// 		.toLowerCase()
				// 		.localeCompare((optionB?.value ?? '').toLowerCase())
				// }
				options={[
					{
						value: 'all',
						label: 'All',
					},
					{
						value: 'action',
						label: 'Action',
					},
					{
						value: 'fantasy',
						label: 'Fantasy',
					},
					{
						value: 'horror',
						label: 'Horror',
					},
					{
						value: 'сombat',
						label: 'Combat',
					},
					{
						value: 'comedy',
						label: 'Comedy',
					},
					{
						value: 'science fantasy',
						label: 'Science fantasy',
					},
					{
						value: 'thriller',
						label: 'Thriller',
					},
					{
						value: 'drama',
						label: 'Drama',
					},
					{
						value: 'crime',
						label: 'Crime',
					},
					{
						value: 'detective',
						label: 'Detective',
					},
					{
						value: 'adventure',
						label: 'Adventure',
					},
				]}
			/>
		</div>
	)
}

export default Genre
