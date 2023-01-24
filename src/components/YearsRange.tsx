import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { Slider } from 'antd'

export default function YearsRange() {
	const [inputValue, setInputValue] = useState<any>([1960, 2023])

	const onChange = (e: any) => {
		// console.log(e)
		setInputValue(e)
	}

	const onAfterChange = (e: any) => {
		// console.log(e)
		setInputValue(e)
	}

	const onChangeInput = (e: any) => {
		let copy = Object.assign([], inputValue)
		copy[0] = Number(e.target.value)
		setInputValue(copy)
		// console.log(inputValue)
	}

	const onAfterChangeInput = (e: any) => {
		let copy = Object.assign([], inputValue)
		copy[1] = Number(e.target.value)
		setInputValue(copy)
		// console.log(inputValue)
	}

	return (
		<Box>
			<div className='flex justify-between mb-7'>
				<input
					type='number'
					min='1960'
					max='2023'
					value={inputValue[0]}
					onChange={onChangeInput}
					className='bg-stone-800 w-14 border-b-2 py-2 text-lg border-stone-700 text-stone-400 font-bold  text-center'
				/>
				<input
					type='number'
					min='1960'
					max='2023'
					value={inputValue[1]}
					onChange={onAfterChangeInput}
					className='bg-stone-800 w-14 border-b-2 py-2 text-lg border-stone-700 text-stone-400 font-bold  text-center'
				/>
			</div>
			<Slider
				range
				min={1960}
				max={2023}
				value={inputValue}
				defaultValue={inputValue}
				onChange={onChange}
				onAfterChange={onAfterChange}
			/>
		</Box>
	)
}
