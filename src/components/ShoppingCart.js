import { useState } from 'react'

export function ShoppingCart() {
	const [cartItems, setCartItems] = useState([])
	console.log(cartItems)
	return (
		<div>
			<div>Cart Items</div>
			{cartItems.length === 0 && <div>No items are added.</div>}
		</div>
	)
}
