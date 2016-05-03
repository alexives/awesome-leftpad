var expect = require('chai').expect;
var awesomeLeftpad = require('../lib/awesome-leftpad');

describe('awesome-leftpad', function() {
	describe('#pad', function() {
		it('should return a string when provided with valid args', function() {
			expect(awesomeLeftpad.pad('foo', 'x', 10)).to.be.a('string');
		});

		it('should pad the left side of a string with a provided letter', function() {
			expect(awesomeLeftpad.pad('foo', 'x', 10)).to.eq('xxxxxxxfoo');
		});

		it('should pad the string with repeated characters and abide by the limit', function() {
			expect(awesomeLeftpad.pad('foo', 'bar', 10)).to.eq('barbarbfoo');
		});

		it('truncates the provided string if longer than the size', function() {
			expect(awesomeLeftpad.pad('bannanana', 'x', 4)).to.eq('bann');
		});

		it('accepts 0 as the padding character', function() {
			expect(awesomeLeftpad.pad('foo', 0, 10)).to.eq('0000000foo');
		});

		it('uses " " if the character is empty or undefined', function() {
			expect(awesomeLeftpad.pad('foo', '', 10)).to.eq('       foo');
		});
	});
});