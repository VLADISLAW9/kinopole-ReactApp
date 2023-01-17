import React from 'react'
import CinemaCarousel from '../components/CinemaCarousel'
import Sections from '../components/Sections'

const Home = () => {
	return (
		<div>
			<CinemaCarousel />
			<div className='px-20 mt-10 mb-10'>
				<Sections />
			</div>
		</div>
	)
}

export default Home
