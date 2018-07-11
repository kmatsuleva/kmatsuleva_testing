const { calculator } = require('./calculator');

afterEach(() => {
	calculator.reset();
});

describe('Calculator', () => {
	test('should return the sum of two numbers', () => {
		calculator.onNumberPress(2.8);
		calculator.onSignPress('+');
		calculator.onNumberPress(3);
		calculator.calculate();
		expect(calculator.expression).toEqual('5.8');
	});

	test('should return the difference of two numbers', () => {
		calculator.onNumberPress(2.8);
		calculator.onSignPress('-');
		calculator.onNumberPress(3);
		calculator.calculate();
		expect(calculator.expression).toEqual('-0.2');
	});

	test('should ignore leading operands', () => {
		calculator.onSignPress('/');
		calculator.onSignPress('*');
		calculator.onNumberPress('9');
		calculator.onSignPress('*');
		calculator.onNumberPress('4');
		expect(calculator.expression).toEqual('9*4');
	});

	test('should allow only one minus at the start', () => {
		calculator.onSignPress('-');
		calculator.onSignPress('-');
		calculator.onNumberPress('9');
		expect(calculator.expression).toEqual('-9');
	});

	test('should clear last element from input', () => {
		calculator.onNumberPress(8);
		calculator.onSignPress('+');
		calculator.onNumberPress(9);
		calculator.clearLastChar();
		expect(calculator.expression).toEqual('8+');
	});

	test('should reset the expression', () => {
		calculator.onNumberPress(5);
		calculator.onSignPress('+');
		calculator.onSignPress('+');
		calculator.reset();
		expect(calculator.expression).toEqual('');
	});

	test('should ignore repeating operators', () => {
		calculator.onNumberPress(5);
		calculator.onSignPress('+');
		calculator.onSignPress('+');
		expect(calculator.expression).toEqual('5+');
	});

	test('should ignore decimal when called after a number', () => {
		calculator.onNumberPress(6);
		calculator.onDot();
		calculator.onNumberPress(9);
		expect(calculator.expression).toEqual('6.9');
	});

	test('should ignore decimal when called after a number', () => {
		calculator.onNumberPress(6);
		calculator.onDot();
		calculator.onDot();
		expect(calculator.expression).toEqual('6.');
	});

	test('should add zero before decimal point when called after an operand', () => {
		calculator.onNumberPress(6);
		calculator.onSignPress('+');
		calculator.onDot();
		calculator.onNumberPress(9);
		expect(calculator.expression).toEqual('6+0.9');
	});
});
