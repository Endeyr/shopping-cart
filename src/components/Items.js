import { useState } from 'react'
import bass from '../images/bass.png'
import karambwan from '../images/karambwan.png'
import monkfish from '../images/monkfish.png'
import shark from '../images/shark.png'
import shrimps from '../images/shrimps.png'
import swordfish from '../images/swordfish.png'

const data = {
	productItems: [
		{
			id: '1',
			name: 'shrimps',
			price: 598,
			image: shrimps,
		},
		{
			id: '2',
			name: 'bass',
			price: 2853,
			image: bass,
		},
		{
			id: '3',
			name: 'swordfish',
			price: 319,
			image: swordfish,
		},
		{
			id: '4',
			name: 'shark',
			price: 809,
			image: shark,
		},
		{
			id: '5',
			name: 'monkfish',
			price: 1862,
			image: monkfish,
		},
		{
			id: '6',
			name: 'karambwan',
			price: 7902,
			image: karambwan,
		},
	],
}

export function Items() {
	const [cartItems, setCartItems] = useState([])
	const { productItems } = data
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
								<button className="btn btn-primary">Add to Cart</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
