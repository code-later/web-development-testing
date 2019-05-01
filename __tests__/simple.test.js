const adder = (x, y) => x + y

test.only('add two numbers', () => {
  expect(adder(2, 1)).toBe(3)
})
