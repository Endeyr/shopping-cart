import { ShoppingCart } from '../components/ShoppingCart'

export function ShopPage({ cartItems }) {
	return (
		<div>
			<ShoppingCart cartItems={cartItems} />
		</div>
	)
}
