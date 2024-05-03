import { Dispatch } from '@reduxjs/toolkit'

import { TImprovement } from '../../../constants/shop'
import { reduceMoney, upLvl } from '../../../model/slices/GameSlice'

type TProps = {
	dispatch: Dispatch
	money: number
	product: TImprovement
	scale: number
}

/**
 * Покупка улучшения
 */
export const buyImprovement = ({ dispatch, money, product, scale }: TProps) => {
	const price = product.price * scale

	if (price > money) {
		console.error(
			`Error: Не хватает кислорода для покупки. Ещё нужно ${price - money} кислорода`
		)
		return
	}

	dispatch(reduceMoney(price))
	dispatch(upLvl({ product: product, scale: scale }))
}
