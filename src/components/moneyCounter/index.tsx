import { useEffect } from 'react'

import { buildPrefix } from '../../helpers/buildPrefix'
import { addMoney } from '../../model/slices/GameSlice'
import { useAppDispatch, useAppSelector } from '../../model/store'

import styles from './index.module.scss'

/**
 * Счетчик денег
 */
export const MoneyCounter = () => {
	const dispatch = useAppDispatch()
	const increment = useAppSelector((state) => state.game.increment)
	const money = useAppSelector((state) => state.game.money)

	// Интервал подсчета денег
	useEffect(() => {
		const timer = setInterval(() => {
			dispatch(addMoney(increment))
		}, 1000)

		// очистка интервала
		return () => clearInterval(timer)
	}, [dispatch, increment])

	return (
		<div className={styles.wrapper}>
			<span>{buildPrefix({ value: increment })} в cекунду</span>
			<br />
			<span>{buildPrefix({ value: money })} Кислорода</span>
		</div>
	)
}
