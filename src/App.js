import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import data from './components/Data'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { HomePage } from './pages/HomePage'
import { ShopPage } from './pages/ShopPage'

function App() {
	const [cartItems, setCartItems] = useState([])
	const { productItems } = data

	function handleAddProduct(product) {
		const ProductExist = cartItems.find((item) => item.id === product.id)
		if (ProductExist) {
			setCartItems(
				cartItems.map((item) => item.id === product.id)
					? { ...ProductExist, quantity: ProductExist.quantity + 1 }
					: product
			)
		} else {
			setCartItems([...cartItems, { ...product, quantity: 1 }])
		}
	}

	return (
		<main className="container-fluid">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route
						path="/"
						element={
							<HomePage
								productItems={productItems}
								handleAddProduct={handleAddProduct}
							/>
						}
					/>
					<Route path="/cart" element={<ShopPage cartItems={cartItems} />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</main>
	)
}

export default App
