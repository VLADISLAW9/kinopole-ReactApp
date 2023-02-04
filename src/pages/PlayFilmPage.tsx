import React from 'react'
import ReactPlayer from 'react-player'
import { useAppSelector } from '../hooks/redux.hook'
import { api } from '../store/data/api'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useActions } from '../hooks/actions.hook'

const PlayFilmPage = () => {
	const { filmId } = useAppSelector(state => state.getFilmId)
	const { data: filmInfo } = api.useFetchFilmInfoQuery(filmId)
	const { now, will, was } = useAppSelector(state => state.filmState)
	const { addNow, removeNow, addWas, removeWas, removeWill } = useActions()

	// console.log(now.includes(filmInfo))

	const bgStyle = {
		backgroundImage: `url('${filmInfo?.background}')`,
		backgroundPosition: 'bottom',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		height: '100vh',
		width: '100%',
	}
	const blur = {
		backdropFilter: `blur(32px)`,
		height: '100vh',
		// display: 'flex',
		// justifyContent: 'center',
		// alignItems: 'center',
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

		if (now.length === 0) {
			addNow(filmInfo)
		} else {
			for (let i = 0; i < now.length; i++) {
				if (now[i].id !== filmId) {
					addNow(filmInfo)
				}
			}
		}
	}

	const removeFilmFromWatching = () => {
		removeNow(filmInfo)
		if (was.length === 0) {
			addWas(filmInfo)
		} else {
			for (let i = 0; i < was.length; i++) {
				if (was[i].id !== filmId) {
					addWas(filmInfo)
				}
			}
		}
	}

	return (
		<div className='absolute z-20' style={bgStyle}>
			<div style={blur}>
				<div className='pt-5 px-10'>
					<div className='flex'>
						<button
							className='flex items-center mb-5 mr-3 hover:opacity-75 transition-opacity'
							onClick={goBack}
						>
							<AiOutlineArrowLeft className='text-white w-6 h-6' />
						</button>
						<h1 className='font-bold  text-white'>{filmInfo?.name}</h1>
					</div>
					<div className='flex justify-center items-center'>
						<ReactPlayer
							onPlay={addFilmToWatching}
							onEnded={removeFilmFromWatching}
							style={contentStyle}
							light
							controls
							height={600}
							width={1200}
							playing
							className='shadow-xl'
							url={filmInfo?.video}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PlayFilmPage
