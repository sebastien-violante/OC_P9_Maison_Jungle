import { useState } from 'react'
import { plantList } from '../datas/plantList'
import PlantItem from './ui/PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'
import type { PlantCategory, Plant} from '../types/plant'

type ShoppingProps = {
	addToCart: (plant: Plant) => void;
}

function ShoppingList({ addToCart }: ShoppingProps) {
	const [activeCategory, setActiveCategory] = useState<PlantCategory | null >(null)
	const categories = plantList.reduce<PlantCategory[]>(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	const handleAddToCart = (plant: Plant): void => {
		addToCart(plant)
	}

	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
				{plantList.map((plant) =>
					!activeCategory || activeCategory === plant.category ? (
						<li key={plant.id}>
							<PlantItem
								plant={plant}
								onAddToCart={() => handleAddToCart(plant)}
							/>
						</li>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList
