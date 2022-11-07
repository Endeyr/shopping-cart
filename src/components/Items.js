export function Items({ productItems, handleAddProduct }) {
	const myImgStyle = { width: '14rem', height: '90%' }

	return (
		<div className="container">
			<div className="row row-cols-1 row-cols-md-3 g-4 mb-3 mt-2">
				{productItems.map((productItem) => (
					<div className="col">
						<div className="card mb-1 ms-1 text-bg-dark" style={myImgStyle}>
							<img
								src={productItem.image}
								alt={productItem.name}
								className="card-img-top img-thumbnail"
							/>
							<div className="card-body text-start">
								<h3 className="card-text">{productItem.name}</h3>
								<p className="fs-4 mb-0">${productItem.price}</p>
								<button
									className="btn btn-primary"
									onClick={() => handleAddProduct(productItem)}
								>
									Add to Cart
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
