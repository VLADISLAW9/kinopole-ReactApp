import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useActions } from '../hooks/actions.hook'
import { useDebounce } from '../hooks/debounce'
import { api } from '../store/data/api'

const NavSearch = () => {
	const [search, setSearch] = useState('')
	const [dropdown, setDropdown] = useState(false)
	const { getFilmId } = useActions()
	const debounced = useDebounce(search)
	const {
		isLoading,
		isError,
		data: films,
	} = api.useSearchFilmsQuery(debounced, {
		skip: debounced.length < 1,
		refetchOnFocus: true,
	})

	useEffect(() => {
		setDropdown(debounced.length > 0 && films?.length! > 0)
	}, [debounced, films])

	return (
		<div className='z-10 relative w-3/5'>
			<input
				placeholder="I'm searching for..."
				className={`
				${films?.length! > 0 && 'rounded-b-none  '} 
				relative	navSearch px-5 py-3 bg-stone-800 text-white w-4/5 rounded-t-3xl
				 rounded-b-3xl outline-none
				`}
				type='text'
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>

			{dropdown && (
				<ul className='w-[80%] text-white list-none absolute top-[45px] left-0  right-0 max-h-[200px] overflow-y-scroll rounded-b-3xl  bg-stone-800'>
					{isLoading && <p className='text-center'>Loading...</p>}
					{films?.map(film => (
						<Link
							onClick={() => (
								getFilmId(film.id), window.scrollTo(0, 0), setSearch('')
							)}
							to={`/film/${film.id}`}
						>
							<li
								key={film.id}
								className='py-2 px-4 hover:bg-stone-700 flex transition-colors cursor-pointer'
							>
								<img className='mr-4 w-[40px] h-[55px]' src={film.image} />
								<div className=''>
									<p className=''>{film.name}</p>
									<p className=''>{film.data}</p>
								</div>
							</li>
						</Link>
					))}
				</ul>
			)}
		</div>
	)
}

export default NavSearch
