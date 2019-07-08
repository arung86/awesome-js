const TestKeys = require("../Array.prototype.@@unscopable")

test('unScopable Test', () => {
    expect(TestKeys.firstScopable()).toBe("['something']");
});