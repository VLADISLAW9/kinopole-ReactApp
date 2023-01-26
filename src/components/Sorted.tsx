import React from 'react'

const Sorted = () => {
	const [sort, setSort] = React.useState('')
	const handleChange = (event: any) => {
		setSort(event.target.value)
	}

	return (
		<select
			className='px-4 py-4 mt-5 rounded-3xl text-xl bg-stone-800 text-stone-400 border border-stone-400'
			onChange={handleChange}
		>
			<option disabled value={''}>Selected</option>
			<option value={'new'}>New First</option>
			<option value={'old'}>Old First</option>
		</select>
	)
}

export default Sorted
