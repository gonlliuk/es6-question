/**
 * ES5 syntax
 */
var expense = {
	type : 'Business',
	amount: '$50'
}
// Statements
var type = expense.type;
var amount = expense. amount;

/**
 * ES6+ syntax
 */
const expense = {
	type: 'Business',
	amount: '$50',
};

// Statements
const { type, amount } = expense;
