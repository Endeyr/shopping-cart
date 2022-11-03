import { Items } from '../components/Items'

export function HomePage({ productItems, handleAddProduct }) {
	return (
		<div>
			<Items productItems={productItems} handleAddProduct={handleAddProduct} />
		</div>
	)
}
