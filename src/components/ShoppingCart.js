export function ShoppingCart({ cartItems }) {
	console.log(cartItems)
	return (
		<div>
			<div>Cart Items</div>
			{cartItems.length === 0 && <div>No items are added.</div>}
			<div>
				{cartItems.map((item) => (
					<div key={item.id}>
						<img src={item.image} alt={item.name} />
						<div>{item.name}</div>
					</div>
				))}
			</div>
		</div>
	)
}
