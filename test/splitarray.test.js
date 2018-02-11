const splitarray = require('../app/splitarray.js');

test('splits an array', () => {
  let chocolate = "Chocoloate is the best of things";
  expect(splitarray(chocolate)).toContain('things');
});
