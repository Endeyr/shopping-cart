export function Footer() {
	var today = new Date()

	return (
		<footer className="container">
			<div>
				<div className="text-light">
					<h5>Shopping Cart App - {today.getFullYear()}</h5>
					<p>
						By Aaron Thompson. Found at{' '}
						<a href="https://github.com/Endeyr/shopping-cart" alt="Github">
							Github
						</a>
						.
					</p>
				</div>
			</div>
		</footer>
	)
}
