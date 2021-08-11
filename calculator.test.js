
const calculator = require("./calculator");

test("Calculator test 1", () => {
    expect(calculator.add(12, 4)).toBe(16);
});

test("Calculator test 2", () => {
    expect(calculator.sub(12, 4)).toBe(8);
});

test("Calculator test 3", () => {
    expect(calculator.div(12, 4)).toBe(3);
});

test("Calculator test 4", () => {
    expect(calculator.mul(12, 4)).toBe(48);
});