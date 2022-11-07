import { ShoppingCart } from '../components/ShoppingCart'

export function ShopPage({ cartItems, handleAddProduct, handleRemoveProduct }) {
	return (
		<div>
			<ShoppingCart
				cartItems={cartItems}
				handleAddProduct={handleAddProduct}
				handleRemoveProduct={handleRemoveProduct}
			/>
		</div>
	)
}
