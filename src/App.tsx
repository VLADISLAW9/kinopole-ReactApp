import React from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import FilmPage from './pages/FilmPage'
import FilmsPage from './pages/FilmsPage'
import Home from './pages/Home'

function App() {
	
	return (
		<div className='App flex flex-col justify-between'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/film/:id' element={<FilmPage />} />
				<Route path='/films' element={<FilmsPage/>}/>
			</Routes>
			<Footer/>
		</div>
	)
}

export default App
