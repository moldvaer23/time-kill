type TProps = {
	value: number
}

/**
 * Сборка префикса кол-во денег
 */
export const buildPrefix = ({ value }: TProps) => {
	if (value >= 1000000000) {
		return (value / 1000000000).toFixed(1) + 'млрд.'
	} else if (value >= 1000000) {
		return (value / 1000000).toFixed(1) + 'млн.'
	} else if (value >= 10000) {
		return (value / 1000).toFixed(0) + 'к.'
	} else if (value >= 1000) {
		return (value / 1000).toFixed(1) + 'к.'
	} else {
		return value
	}
}
