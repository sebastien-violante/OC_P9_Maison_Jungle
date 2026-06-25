import Sun from '../../assets/sun.svg'
import Water from '../../assets/water.svg'
import type { ScaleValue, CareType } from '../../types/plant'

type Props = {
	scaleValue: ScaleValue;
	careType: CareType;
}

function CareScale({ scaleValue, careType }: Props) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
