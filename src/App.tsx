import React from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import FilmPage from './pages/FilmPage'
import Home from './pages/Home'

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/film/:id' element={<FilmPage/>} />
			</Routes>
		</div>
	)
}

export default App
