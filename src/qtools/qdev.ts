export const wait = async (ms: number = 1000) => {
	return new Promise<boolean>(resolve => {
		setTimeout(() => {
			resolve(true)
		}, ms)
	})
}