// import chai, declare expect variable
const expect = require('chai').expect;
// import fizzBuzzer
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for Fizzbuzzer function
describe('fizzBuzzer', function() {

	it('should return "fizzbuzz" if the num is divisible by 3 and 5', function() {
		const normalCases = [15, 30, 45];
		normalCases.forEach(function(input) {
			expect(fizzBuzzer(input)).to.equal('fizz-buzz');
		});
	});
	it('should return "buzz" if num is divisible by 5', function() {
		const normalCases = [5, 20, 25];
		normalCases.forEach(function(input) {
			expect(fizzBuzzer(input)).to.equal('buzz');
		});
	});
	it('should return "fizz" if num is divisible by 3', function() {
		const normalCases = [3, 9, 12];
		normalCases.forEach(function(input) {
			expect(fizzBuzzer(input)).to.equal('fizz');
		});
	});
	it('should return number if not divisible by 3 or 5', function() {
		const normalCases = [2, 4, 11];
		normalCases.forEach(function(input) {
			expect(fizzBuzzer(input)).to.equal(input);
		});
	});
	it('shoul return Error if input isn\'t a number', function() {
		const badInputs = ['1', 'cat', true, false, function() {}, [1,2,3]];
		badInputs.forEach(function(input) {
			expect(function() {fizzBuzzer(input);
			}).to.throw(Error);
		});
	});
});