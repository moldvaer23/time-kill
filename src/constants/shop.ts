export type TImprovement = {
	increment: number
	localName: string
	lvl: number
	name: string
	price: number
}

/**
 * Конфигурация улучшений в магазине
 */
export const ConfigShop: Record<string, TImprovement> = {
	pot: {
		increment: 1,
		localName: 'pot',
		lvl: 1,
		name: 'Горшочек',
		price: 500,
	},
	lamp: {
		increment: 10,
		localName: 'lamp',
		lvl: 0,
		name: 'Лампа',
		price: 10000,
	},
	watering: {
		increment: 30,
		localName: 'watering',
		lvl: 0,
		name: 'Автоматический полив',
		price: 30000,
	},
}
