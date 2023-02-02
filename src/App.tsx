import React, { Suspense } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Router from './components/Router'
import Spinner from './components/Spinner'

function App() {
	return (
		<div className='App flex flex-col justify-between'>
			<Navbar />
			<Router />
			<Footer />
		</div>
	)
}

export default App
