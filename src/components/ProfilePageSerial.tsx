import React from 'react'
import { Link } from 'react-router-dom'
import { useActions } from '../hooks/actions.hook'
import { IFilms } from '../models/IFilms'

interface ProfilePageSerialProps {
	film: IFilms
}

const ProfilePageSerial: React.FC<ProfilePageSerialProps> = ({ film }) => {
	const { getSerialId } = useActions()

	const handleFilmId = () => {
		getSerialId(film.id)
		window.scrollTo(0, 0)
	}

	return (
		<Link
			className='hover:-translate-y-1 cursor-pointer transition-transform flex justify-center  '
			to={`/serial/${film.id}`}
		>
			<li>
				<div>
					<img
						className='hover:opacity-75 transition-opacity rounded-md'
						src={film.image}
					/>
					<h1 className='mt-3 text-white font-medium'>{film.name}</h1>
				</div>
			</li>
		</Link>
	)
}

export default ProfilePageSerial
