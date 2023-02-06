import React from 'react'
import { Route, Routes } from 'react-router'
import CartoonPage from '../pages/CartoonPage'
import CartoonsPage from '../pages/CartoonsPage'
import FilmPage from '../pages/FilmPage'
import FilmsPage from '../pages/FilmsPage'
import Home from '../pages/Home'
import PlayCartoonPage from '../pages/PlayCartoonPage'
import PlayFilmPage from '../pages/PlayFilmPage'
import ProfilePage from '../pages/ProfilePage'
import SerialPage from '../pages/SerialPage'

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/film/:id' element={<FilmPage />} />
			<Route path='/serial/:id' element={<SerialPage />} />
			<Route path='/films' element={<FilmsPage />} />
			<Route path='/cartoons' element={<CartoonsPage />} />
			<Route path='/FilmPlayer/:id' element={<PlayFilmPage />} />
			<Route path='/CartoonPlayer/:id' element={<PlayCartoonPage />} />
			<Route path='/profile' element={<ProfilePage />} />
			<Route path='/cartoon/:id' element={<CartoonPage />} />
		</Routes>
	)
}

export default Router
