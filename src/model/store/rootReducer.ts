import { combineReducers } from '@reduxjs/toolkit'

// Reducers
import GameSlice from '../slices/GameSlice'

export const rootReducer = combineReducers({
	game: GameSlice,
})
