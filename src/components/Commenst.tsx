import React from 'react'
import { IFilms } from '../models/IFilms'
import { api } from '../store/data/api'

interface FilmInfoProps {
	filmInfo?: IFilms
}

const Comments: React.FC<FilmInfoProps> = ({ filmInfo }) => {
	const { data: comments } = api.useFetchFilmCommentsQuery(filmInfo?.id)
	const { data: commentsGood } = api.useFetchFilmCommentsGoodQuery(filmInfo?.id)
	const { data: commentsBad } = api.useFetchFilmCommentsBadQuery(filmInfo?.id)
	const { data: commentsNone } = api.useFetchFilmCommentsNoneQuery(filmInfo?.id)

	return (
		<div className='mt-16'>
			<h1 className='text-white text-2xl mb-10 font-medium'>
				Review of film critics
			</h1>
			<div className='flex'>
				<ul className='w-[65%]'>
					{comments?.map(com => (
						<li
							className={` ${
								com.mark === 'good' && ' border-4 border-emerald-600 '
							}, ${com.mark === 'bad' && 'border-4 border-red-600  '},
						${
							com.mark === 'none' && 'border-4 border-stone-600 '
						} px-10 bg-stone-800  py-10 mb-5 rounded-xl`}
						>
							<h1 className='text-white font-semibold text-xl font-semibold mb-3'>
								{com.name}
							</h1>
							<p className='text-white font-light mb-6 border-b-2 pb-3 border-white'>
								{com.body}
							</p>
							<p className='text-white font-extralight'>{com.data}</p>
						</li>
					))}
				</ul>
				<div className='flex flex-col ml-36'>
					<div className='mb-2'>
						<h1 className='text-white text-3xl font-semibold'>
							{comments?.length}
						</h1>
						<p className='text-stone-300 text-sm font-extralight '>All</p>
					</div>
					<div className='mb-2'>
						<h1 className='text-emerald-600 text-3xl font-semibold'>
							{commentsGood?.length}
						</h1>
						<p className='text-stone-300 text-sm font-extralight '>Positive</p>
					</div>
					<div className='mb-2'>
						<h1 className='text-red-600 text-3xl font-semibold'>
							{commentsBad?.length}
						</h1>
						<p className='text-stone-300 text-sm font-extralight '>Negative</p>
					</div>
					<div className='mb-2'>
						<h1 className='text-stone-500 text-3xl font-semibold'>
							{commentsNone?.length}
						</h1>
						<p className='text-stone-300 text-sm font-extralight '>Neutral</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Comments
