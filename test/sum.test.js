const sum = require('../app/sum.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 40 + 3 to equal 43', () => {
  expect(sum(40, 3)).toBe(43);
});
