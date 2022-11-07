import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import data from './components/Data'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Items } from './components/Items'
import { HomePage } from './pages/HomePage'
import { ShopPage } from './pages/ShopPage'

function App() {
	const [cartItems, setCartItems] = useState([])
	const { productItems } = data

	useEffect(() => {}, [])

	function handleAddProduct(product) {
		if (cartItems.length === 0) {
			setCartItems([product])
		} else {
			setCartItems([...cartItems, product])
		}
	}

	function handleRemoveProduct(product) {}

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
					<Route
						path="/cart"
						element={
							<ShopPage
								cartItems={cartItems}
								handleAddProduct={handleAddProduct}
								handleRemoveProduct={handleRemoveProduct}
							/>
						}
					/>
				</Routes>
				<Footer />
			</BrowserRouter>
		</main>
	)
}

export default App
