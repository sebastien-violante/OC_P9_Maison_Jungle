import '../styles/Categories.css'
import type { PlantCategory } from '../types/plant'

type CategoryProps = {
	categories: PlantCategory[];
	activeCategory: PlantCategory | null;
	setActiveCategory: React.Dispatch<React.SetStateAction<PlantCategory | null>>
}

function Categories({ setActiveCategory, categories, activeCategory }: CategoryProps) {
	return (
		<div className='lmj-categories'>
			<div className='lmj-categories-tags'>
				<button 
					className={`lmj-category-tag ${activeCategory === null ? 'active' : ''}`}
					onClick={() => setActiveCategory(null)}
				>
					Toutes
				</button>
				{categories.map((cat) => (
					<button
						key={cat}
						className={`lmj-category-tag ${activeCategory === cat ? 'active' : ''}`}
						onClick={() => setActiveCategory(cat)}
					>
						{cat}
					</button>
				))}
			</div>
		</div>
	)
}

export default Categories
