import { buyImprovement } from './helpers/buyProduct'
import { useAppDispatch, useAppSelector } from '../../model/store'

import styles from './index.module.scss'

/**
 * Магазин
 */
export const Shop = () => {
	const dispatch = useAppDispatch()
	const money = useAppSelector((state) => state.game.money)
	const shop = useAppSelector((state) => state.game.shop)

	const maxLvl = 50

	return (
		<div className={styles.wrapper}>
			<ul>
				{Object.values(shop).map((product, index) => {
					return (
						<li key={index}>
							<span>{product.name}</span>
							<span>{product.lvl < maxLvl ? product.lvl : 'Max.'} LVL</span>

							{/* В случае если улучшение не прокачали на максимум */}
							{/* то показываем цену и кнопки для улучшения  */}
							{product.lvl < maxLvl && (
								<>
									<span>Цена {product.price} Кислорода</span>
									<ul>
										<li>
											<button
												onClick={() =>
													buyImprovement({
														dispatch: dispatch,
														money: money,
														product: product,
														scale: 1,
													})
												}
												disabled={
													money < product.price * 1 || maxLvl - product.lvl < 1
												}
											>
												x1
											</button>
										</li>
										<li>
											<button
												onClick={() =>
													buyImprovement({
														dispatch: dispatch,
														money: money,
														product: product,
														scale: 5,
													})
												}
												disabled={
													money < product.price * 5 || maxLvl - product.lvl < 5
												}
											>
												x5
											</button>
										</li>
										<li>
											<button
												onClick={() =>
													buyImprovement({
														dispatch: dispatch,
														money: money,
														product: product,
														scale: 10,
													})
												}
												disabled={
													money < product.price * 10 ||
													maxLvl - product.lvl < 10
												}
											>
												x10
											</button>
										</li>
									</ul>
								</>
							)}
						</li>
					)
				})}
			</ul>
		</div>
	)
}
