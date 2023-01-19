import React from 'react'
import { IFilms } from '../models/IFilms'
import { Image } from 'antd'

interface FilmInfoProps {
	filmInfo?: IFilms
}

const FilmPicture: React.FC<FilmInfoProps> = ({ filmInfo }) => {
	console.log(filmInfo?.pictures)

	return (
		<div className='mt-[26px] mb-10'>
			<h1 className='text-white text-2xl font-medium'>
				Images
				<span className='font-light text-gray-400 ml-3'>
					({filmInfo?.pictures.length})
				</span>
			</h1>
			<ul className='mt-7 pt-3 grid grid-cols-5 gap-2 mt-10 list-none'>
				{filmInfo?.pictures.map(img => (
					<li>
						<Image className='rounded-md' src={img} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default FilmPicture
