import React from 'react'
import { Link } from 'react-router-dom'

export function Header({ cartItems }) {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<h1 className="navbar-brand text-light d-flex justify-content-start">
					<div>
						<Link to="/" className="nav-link">
							Fishing Shop
						</Link>
					</div>
					<div className="ms-5">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</div>
				</h1>
				<div>
					{cartItems.length >= 1 && (
						<div className="d-flex justify-content-start">
							{cartItems.map((item) => (
								<img
									src={item.image}
									alt={item.name}
									className="img-thumbnail ms-4"
									width={75}
									height={75}
								/>
							))}
						</div>
					)}
				</div>
				<div className="navbar-brand text-light d-flex justify-content-end">
					<div className="ms-3">
						<Link to="/cart" className="nav-link material-symbols-outlined">
							shopping_cart
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}
