const { counter } = require('./counter');

describe('Counter is', () => {
	test('incrementing from 0 to 1', () => {
		expect(counter(0, 'increment')).toBe(1);
	});

	test('incrementing from 1 to 2', () => {
		expect(counter(1, 'increment')).toBe(2);
	});

	test('decrementing from 4 to 3', () => {
		expect(counter(4, 'decrement')).toBe(3);
	});

	test('decrementing from 3 to 2', () => {
		expect(counter(3, 'decrement')).toBe(2);
	});

	test('passed undefined, returns 0', () => {
		expect(counter(undefined)).toEqual(0);
	});
});
