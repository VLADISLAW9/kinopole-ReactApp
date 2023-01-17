import React from 'react'
import { Carousel, Image } from 'antd'
import { api } from '../store/data/api'
import CardMedia from '@mui/material/CardMedia'
import CarouselItem from './CarouselItem'

const CinemaCarousel: React.FC = () => {
	const { data: films } = api.useFetchCarouselFilmsQuery('')
	return (
		<Carousel autoplay>
			{films?.map(film => (
				<CarouselItem key={film.id} film={film}/>
			))}
		</Carousel>
	)
}

export default CinemaCarousel
