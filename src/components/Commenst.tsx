import React from 'react'
import { IFilms } from '../models/IFilms'
import { api } from '../store/data/api'
import {FaRegSadCry} from 'react-icons/fa'

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
					{comments?.length === 0 && (
						<li className='flex mt-10 flex-col justify-center items-center'>
							<FaRegSadCry className='text-stone-700 w-32 h-32' />
							<p className='font-bold mt-3 text-stone-700 text-xl'>
								Not a comments
							</p>
						</li>
					)}
					{comments?.map(com => (
						<li
							className={` ${
								com.mark === 'good' && ' border-4 border-emerald-600 '
							}, ${com.mark === 'bad' && 'border-4 border-red-600  '},
						${
							com.mark === 'none' && 'border-4 border-stone-600 '
						} px-10 bg-stone-800  py-10 mb-10 rounded-xl`}
						>
							<h1
								className={` 
									${com.mark === 'good' && ' text-emerald-500'} 
									${com.mark === 'bad' && 'text-red-600'}
									${com.mark === 'none' && 'text-stone-600 '} 
									font-semibold text-lg mb-5 
								`}
							>
								{com.name}
							</h1>
							<p
								className={`
									${com.mark === 'good' && ' text-emerald-500 border-emerald-500'} 
									${com.mark === 'bad' && 'text-red-600 border-red-500'}
									${com.mark === 'none' && 'text-stone-500 border-stone-600'}
									text-white font-light mb-6 border-b-2 pb-3`}
							>
								{com.body}
							</p>
							<p
								className={`
									${com.mark === 'good' && ' text-emerald-500 '} 
									${com.mark === 'bad' && 'text-red-600 '}
									${com.mark === 'none' && 'text-stone-500 '}
									font-extralight text-sm`}
							>
								{com.data}
							</p>
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
					<div>
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
