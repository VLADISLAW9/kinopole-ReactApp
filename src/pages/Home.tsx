import React from 'react'
import CinemaCarousel from '../components/CinemaCarousel'
import Sections from '../components/Sections'
import Spiner from '../components/Spinner'
import { api } from '../store/data/api'

const Home = () => {
	const { isLoading: newFilmsLoading } = api.useFetchNewFilmsQuery('')
	const { isLoading: carouselFilmsLoading } = api.useFetchCarouselFilmsQuery('')

	return (
		<div>
			{newFilmsLoading && carouselFilmsLoading ? (
				<Spiner />
			) : (
				<>
					<CinemaCarousel />
					<div className='container__home px-20 mt-12 mb-10'>
						<Sections />
					</div>
				</>
			)}
		</div>
	)
}

export default Home
