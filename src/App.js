import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { ShopPage } from './pages/ShopPage'

function App() {
	return (
		<main className="container">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/cart" element={<ShopPage />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</main>
	)
}

export default App
