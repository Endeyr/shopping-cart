export function ShoppingCart({
	cartItems,
	handleAddProduct,
	handleRemoveProduct,
}) {
	return (
		<div className="container">
			<h2>Cart Items</h2>
			<div className="row row-cols-1 row-cols-md-3 g-4 mb-3 mt-2">
				{cartItems.length === 0 && <div>No items are added.</div>}
				<div className="col">
					{cartItems.map((item) => (
						<div className="card mb-1 ms-1 text-bg-dark" key={item.id}>
							<img
								src={item.image}
								alt={item.name}
								className="card-img-top img-thumbnail"
							/>
							<div className="card-body text-start">
								<h3 className="card-text">{item.name}</h3>
								<p className="fs-4 mb-1">${item.price}</p>
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
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
