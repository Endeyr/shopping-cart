import { ShoppingCart } from '../components/ShoppingCart'

export function ShopPage({
	cartItems,
	handleAddProduct,
	handleRemoveProduct,
	handleCartClearance,
}) {
	return (
		<div>
			<ShoppingCart
				cartItems={cartItems}
				handleAddProduct={handleAddProduct}
				handleRemoveProduct={handleRemoveProduct}
				handleCartClearance={handleCartClearance}
			/>
		</div>
	)
}
