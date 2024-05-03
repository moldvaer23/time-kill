import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ConfigShop, TImprovement } from '../../constants/shop'

type TState = {
	increment: number
	money: number
	shop: Record<string, TImprovement>
}

const initialState: TState = {
	increment: 0,
	money: 0,
	shop: ConfigShop,
}

const gameSlice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		// Число инкремент
		addIncrement(state, action: PayloadAction<number>) {
			state.increment += action.payload
		},

		// Деньги
		setMoney(state, action: PayloadAction<number>) {
			state.money = action.payload
		},
		addMoney(state, action: PayloadAction<number>) {
			state.money += action.payload

			localStorage.setItem('money', state.money.toString())
		},
		reduceMoney(state, action: PayloadAction<number>) {
			state.money -= action.payload

			localStorage.setItem('money', state.money.toString())
		},

		// Улучшения
		setLvl(
			state,
			action: PayloadAction<{ product: TImprovement; scale: number }>
		) {
			state.shop[action.payload.product.localName].lvl = action.payload.scale
		},
		upLvl(
			state,
			action: PayloadAction<{ product: TImprovement; scale: number }>
		) {
			state.shop[action.payload.product.localName].lvl += action.payload.scale

			state.increment +=
				state.shop[action.payload.product.localName].increment *
				action.payload.scale

			localStorage.setItem(
				state.shop[action.payload.product.localName].localName,
				state.shop[action.payload.product.localName].lvl.toString()
			)
		},
	},
})

export const { addIncrement, setMoney, addMoney, reduceMoney, setLvl, upLvl } =
	gameSlice.actions

export default gameSlice.reducer
