import { height } from '@mui/system'
import { url } from 'inspector'
import React from 'react'
import ReactPlayer from 'react-player'
import MoreFilms from '../components/MoreFilms'
import { useAppSelector } from '../hooks/redux.hook'
import { api } from '../store/data/api'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useActions } from '../hooks/actions.hook'

const PlayFilmPage = () => {
	const { filmId } = useAppSelector(state => state.getFilmId)
	const { data: filmInfo } = api.useFetchFilmInfoQuery(filmId)
	const { now, will, was } = useAppSelector(state => state.filmState)
	const { addNow, removeNow, addWas, removeWas, removeWill } = useActions()

	console.log(now.includes(filmInfo))

	const bgStyle = {
		backgroundImage: `url('${filmInfo?.background}')`,
		backgroundPosition: 'bottom',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backdropFilter: `blur(8px)`,
		height: '100vh',
		width: '100%',
	}
	const blur = {
		backdropFilter: `blur(16px)`,
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	}
	const contentStyle = {
		borderRadius: '16px',
		background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${filmInfo?.background}')  center center no-repeat`,
		backgroundSize: 'cover',
	}

	const goBack = () => {
		window.history.back()
	}

	const addFilmToWatching = () => {
		for (let i = 0; i < will.length; i++) {
			if (will[i].id === filmId) {
				removeWill(filmInfo)
			}
		}
		if (now.includes(filmInfo) === false) {
			addNow(filmInfo)
		}
	}

	const removeFilmFromWatching = () => {
		removeNow(filmInfo)
		if (was.includes(filmInfo) !== true) {
			addWas(filmInfo)
		}
	}

	return (
		<div className='absolute z-20' style={bgStyle}>
			<div style={blur}>
				<div className='flex flex-col justify-center'>
					<button
						className='flex items-center mb-5 hover:opacity-75 transition-opacity'
						onClick={goBack}
					>
						<AiOutlineArrowLeft className='text-white mr-1 w-6 h-6' />
						<span className='text-white text-xl'>Back</span>
					</button>
					<ReactPlayer
						onPlay={addFilmToWatching}
						onEnded={removeFilmFromWatching}
						style={contentStyle}
						light
						controls
						playing
						className='shadow-xl'
						width={1200}
						height={600}
						url={filmInfo?.video}
					/>
				</div>
			</div>
		</div>
	)
}

export default PlayFilmPage
