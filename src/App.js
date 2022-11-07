import React, { useEffect, useState } from 'react'
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
				cartItems.map((item) =>
					item.id === product.id
						? { ...ProductExist, quantity: ProductExist.quantity + 1 }
						: item
				)
			)
		} else {
			setCartItems([...cartItems, { ...product, quantity: 1 }])
		}
	}

	function handleRemoveProduct(product) {
		const ProductExist = cartItems.find((item) => item.id === product.id)
		if (ProductExist.quantity === 1) {
			setCartItems(cartItems.filter((item) => item.id !== product.id))
		} else {
			setCartItems(
				cartItems.map((item) =>
					item.id === product.id
						? { ...ProductExist, quantity: ProductExist.quantity - 1 }
						: item
				)
			)
		}
	}

	function handleCartClearance() {
		setCartItems([])
	}

	function handleOrder() {
		setCartItems([])
		alert('Thank you for your order!')
	}

	return (
		<main className="container-fluid">
			<BrowserRouter>
				<Header cartItems={cartItems} />
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
								handleCartClearance={handleCartClearance}
								handleOrder={handleOrder}
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
