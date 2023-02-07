import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useAppSelector } from '../hooks/redux.hook'
import { api } from '../store/data/api'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useActions } from '../hooks/actions.hook'

const PlayFilmPage = () => {
	const { serialId } = useAppSelector(state => state.getSerialId)
	const { data: serialInfo } = api.useFetchSerialInfoQuery(serialId)
	const { now, will, was } = useAppSelector(state => state.filmState)
	const { addNow, removeNow, addWas, removeWas, removeWill } = useActions()

	// console.log(now.includes(filmInfo))

	const bgStyle = {
		backgroundImage: `url('${serialInfo?.background}')`,
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
		background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${serialInfo?.background}')  center center no-repeat`,
		backgroundSize: 'cover',
	}

	const goBack = () => {
		window.history.back()
	}

	const addFilmToWatching = () => {
		for (let i = 0; i < will.length; i++) {
			if (will[i].name === serialInfo?.name) {
				removeWill(serialInfo)
			}
		}

		if (now.includes(serialInfo) === false) {
			addNow(serialInfo)
		}
	}

	const removeFilmFromWatching = () => {
		removeNow(serialInfo)
		if (was.length === 0) {
			addWas(serialInfo)
		} else {
			for (let i = 0; i < was.length; i++) {
				if (was[i].name !== serialInfo?.name) {
					addWas(serialInfo)
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
						<h1 className='font-bold  text-white'>{serialInfo?.name}</h1>
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
							url={serialInfo?.video}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PlayFilmPage
