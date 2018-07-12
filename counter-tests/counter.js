const counter = (state = 0, action) => {
	switch (action) {
		case 'increment':
			return state + 1;
		case 'decrement':
			return state - 1;
		default:
			return state;
	}
};

module.exports = {
	counter
};
