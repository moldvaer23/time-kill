import { useEffect } from 'react'

import { Shop } from '../components/shop'
import { Character } from '../components/character'
import { MoneyCounter } from '../components/moneyCounter'
import { useAppDispatch, useAppSelector } from '../model/store'
import { addIncrement, setLvl, setMoney } from '../model/slices/GameSlice'

import styles from '../styles/index.module.scss'

const App = () => {
	const dispatch = useAppDispatch()
	const shop = useAppSelector((state) => state.game.shop)

	useEffect(() => {
		const money = localStorage.getItem('money')
		if (money) dispatch(setMoney(Number(money)))

		// Инициализируем lvl-а улучшений и добавляем инкремент
		Object.values(shop).map((product) => {
			const localLvl = localStorage.getItem(product.localName)

			// Добавляем изменения
			if (localLvl) {
				dispatch(setLvl({ product: product, scale: Number(localLvl) }))
				dispatch(addIncrement(Number(localLvl) * product.increment))
			}
		})
	}, [])

	return (
		<>
			<header className={styles.header}>
				<MoneyCounter />
			</header>

			<main className={styles.main}>
				<Character />
				<Shop />
			</main>
		</>
	)
}

export default App
