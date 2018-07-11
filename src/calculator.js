var operand = /^[-+*/]$/;
var calculator = {
	expression: '',
	onNumberPress: function(num) {
		this.expression += num;
	},

	onSignPress: function(sign) {
		if (this.expression.length == 0 && sign != '-') {
			return;
		}
		if (this.lastChar().match(operand) || this.lastChar == '.') {
			return;
		}

		this.expression += sign;
	},

	calculate: function() {
		if (this.expression.length != 0 && !this.lastChar().match(operand)) {
			var res = eval(this.expression);
			res = Math.round(res * 100) / 100;

			this.expression = res.toString();
		}
	},

	reset: function() {
		this.expression = '';
	},

	clearLastChar: function() {
		var exp = this.expression;
		this.expression = exp.slice(0, exp.length - 1);
	},

	onDot: function() {
		if (this.expression.length == 0 || this.lastChar().match(operand)) {
			this.expression += '0.';
		}

		if (this.lastChar() != '.') {
			this.expression += '.';
		}
	},

	lastChar: function() {
		if (this.expression.length == 0) return this.expression;
		return this.expression[this.expression.length - 1].toString();
	}
};

module.exports = {
	calculator
};
