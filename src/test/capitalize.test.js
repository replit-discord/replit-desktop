const path = require('path');
const capitalizeFn = require(path.join('..', 'lib', 'functions', 'capitalize'));
const { test, describe } = require('mocha');
const expect = require('chai').expect;
describe('capitalize', function() {
    test('one word', function() {
        let text = 'iota';
        let capitalizedText = capitalizeFn(text);
        expect(capitalizedText).to.eq('Iota');
    });

    test('two words', function() {
        let text = 'delta echo';
        let newString = capitalizeFn(text);
        expect(newString).to.eq('Delta Echo');
    });
});