var testUnit = require('../js/script.js');

describe('testUnit', function() {
    it('pow() test #1', function () {
        var result;
        result = testUnit.pow(2, 2);
        expect(result).toBe(4);
    });

    it('pow() test #2', function () {
        var result;
        result = testUnit.pow(3, -2);
        expect(result).toBe(0.1111111111111111);
    });
});