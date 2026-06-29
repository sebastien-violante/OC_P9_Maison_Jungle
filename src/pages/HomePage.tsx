import Footer from '../components/layout/Footer'
import ShoppingList from '../components/ShoppingList'
import '../styles/Layout.css'
import type { Plant } from '../types/plant'

type CartProps = {
	addToCart: (plant: Plant) => void
}
function HomePage({ addToCart }: CartProps) {
	return (
		<div>
			<div className='lmj-layout-inner'>
				<ShoppingList addToCart={addToCart} />
			</div>
			<Footer />
		</div>
	)
}

export default HomePage 