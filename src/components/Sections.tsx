import React from 'react'
import Cartoons from './Cartoons'
import Films from './Films'
import Series from './Series'

const Sections = () => {
	return (
		<div>
			<Films />
			<Cartoons/>
			<Series/>
		</div>
	)
}

export default Sections