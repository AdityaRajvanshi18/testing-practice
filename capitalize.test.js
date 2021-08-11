const capitalize = require('./capitalize');

test('Capitalize test 1', () => {
    expect(capitalize("some type of sentence")).toBe("Some type of sentence");
});
