import React from 'react'
import { Route, Routes } from 'react-router'
import FilmPage from '../pages/FilmPage'
import FilmsPage from '../pages/FilmsPage'
import Home from '../pages/Home'
import PlayFilmPage from '../pages/PlayFilmPage'
import ProfilePage from '../pages/ProfilePage'

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/film/:id' element={<FilmPage />} />
			<Route path='/films' element={<FilmsPage />} />
			<Route path='/player/:id' element={<PlayFilmPage />} />
			<Route path='/profile' element={<ProfilePage />} />
		</Routes>
	)
}

export default Router
