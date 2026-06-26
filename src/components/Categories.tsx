import '../styles/Categories.css'
import type { PlantCategory } from '../types/plant'

type CategoryProps = {
	categories: PlantCategory[];
}

function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='lmj-categories'>
			<div className='lmj-categories-tags'>
				<button 
					className={`lmj-category-tag ${activeCategory === '' ? 'active' : ''}`}
					onClick={() => setActiveCategory('')}
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
