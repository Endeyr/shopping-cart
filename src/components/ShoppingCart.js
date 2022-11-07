export function ShoppingCart({
	cartItems,
	handleAddProduct,
	handleRemoveProduct,
	handleCartClearance,
	handleOrder,
}) {
	const totalPrice = cartItems.reduce(
		(price, item) => price + item.quantity * item.price,
		0
	)

	return (
		<div className="container-fluid">
			<h2 className="text-center">Cart Items</h2>
			<div className="text-center">
				{cartItems.length >= 1 && (
					<button
						className="btn btn-primary"
						onClick={() => handleCartClearance()}
					>
						Clear Cart
					</button>
				)}
			</div>
			{cartItems.length === 0 && (
				<div className="text-center">No items are added.</div>
			)}
			<div className="row row-cols-1 row-cols-md-6 g-4 mb-3 mt-2">
				{cartItems.map((item) => (
					<div className="col">
						<div className="card mb-1 ms-1 text-bg-dark" key={item.id}>
							<img
								src={item.image}
								alt={item.name}
								className="card-img-top img-thumbnail"
							/>
							<div className="card-body text-center">
								<h3 className="card-text">{item.name}</h3>
								<div className="d-flex justify-content-around">
									<button
										className="btn btn-primary"
										onClick={() => handleAddProduct(item)}
									>
										+
									</button>
									<button
										className="btn btn-primary"
										onClick={() => handleRemoveProduct(item)}
									>
										-
									</button>
								</div>
								<div className="d-flex justify-content-around">
									<p className="fs-4 mb-1">
										{item.quantity} @ ${item.price}
									</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="text-center">Total Price: ${totalPrice}</div>
			<div className="text-center">
				{cartItems.length >= 1 && (
					<button className="btn btn-primary" onClick={() => handleOrder()}>
						Order
					</button>
				)}
			</div>
		</div>
	)
}
