const generateAvatar = (first, last) => {
	let firstHash = 0
	let lastHash = 0
	let firstColor = "#"
	let lastColor = "#"
	if (first.length) {
		for (let i = 0; i < first.length; i++) {
			firstHash = first.charCodeAt(i) + ((firstHash << 5) - firstHash)
		}
		for (let i = 0; i < 3; i++) {
			const value = (firstHash >> (i * 8)) & 0xff
			firstColor += ('00' + value.toString(16)).substr(-2)
		}
	}
	if (last.length) {
		for (let i = 0; i < last.length; i++) {
			lastHash = last.charCodeAt(i) + ((lastHash << 5) - lastHash)
		}
		for (let i = 0; i < 3; i++) {
			const valueLast = (lastHash >> (i * 8)) & 0xff
			lastColor += ('00' + valueLast.toString(16)).substr(-2)
		}
  }
  return { firstColor, lastColor }
}
export default generateAvatar