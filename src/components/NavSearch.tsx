import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useActions } from '../hooks/actions.hook'
import { useDebounce } from '../hooks/debounce'
import { api } from '../store/data/api'

const NavSearch = () => {
	const [search, setSearch] = useState('')
	const [dropdown, setDropdown] = useState(false)
	const { getFilmId, getCartoonId, getSerialId } = useActions()
	const debounced = useDebounce(search)
	const {
		isLoading: loadingFilms,
		isError: errorFilms,
		data: films,
	} = api.useSearchFilmsQuery(debounced, {
		skip: debounced.length < 1,
		refetchOnFocus: true,
	})
	const {
		isLoading: loadingCartoons,
		isError: errorCartoons,
		data: cartoons,
	} = api.useSearchCartoonsQuery(debounced, {
		skip: debounced.length < 1,
		refetchOnFocus: true,
	})
	const {
		isLoading: loadingSeries,
		isError: errorSeries,
		data: series,
	} = api.useSearchSeriesQuery(debounced, {
		skip: debounced.length < 1,
		refetchOnFocus: true,
	})

	useEffect(() => {
		setDropdown(
			debounced.length > 0 &&
				films?.length! > 0 ||
				series?.length! > 0 ||
				cartoons?.length! > 0
		)
	}, [debounced, films, series, cartoons])
	return (
		<div className='z-10 relative flex justify-center'>
			<input
				placeholder="I'm searching for..."
				className={
					films?.length! > 0 || cartoons?.length! > 0 || series?.length! > 0
						? ' relative	navSearch px-5 py-3 bg-stone-800 text-white w-[100%] rounded-t-3xl rounded-b-none outline-none '
						: ' relative	navSearch px-5 py-3 bg-stone-800 text-white w-[100%] rounded-t-3xl rounded-b-3xl outline-none'
				}
				type='text'
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>

			{dropdown && (
				<ul className='navbar__dropdown w-[100%] text-white list-none absolute top-[45px] left-0  right-0 max-h-[200px] overflow-y-scroll rounded-bl-3xl bg-stone-800'>
					{loadingFilms && <p className='text-center'>Loading...</p>}
					{loadingCartoons && <p className='text-center'>Loading...</p>}
					{loadingSeries && <p className='text-center'>Loading...</p>}
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
					{series?.map(film => (
						<Link
							onClick={() => (
								getSerialId(film.id), window.scrollTo(0, 0), setSearch('')
							)}
							to={`/serial/${film.id}`}
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
					{cartoons?.map(film => (
						<Link
							onClick={() => (
								getCartoonId(film.id), window.scrollTo(0, 0), setSearch('')
							)}
							to={`/cartoon/${film.id}`}
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
