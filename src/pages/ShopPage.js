import { ShoppingCart } from '../components/ShoppingCart'

export function ShopPage({
	cartItems,
	handleAddProduct,
	handleRemoveProduct,
	handleCartClearance,
	handleOrder,
}) {
	return (
		<div>
			<ShoppingCart
				cartItems={cartItems}
				handleAddProduct={handleAddProduct}
				handleRemoveProduct={handleRemoveProduct}
				handleCartClearance={handleCartClearance}
				handleOrder={handleOrder}
			/>
		</div>
	)
}
