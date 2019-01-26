const printMatrix = require('./printMatrix')

/* eslint-disable no-undef */
test('Given an square matrix and its size, should print each element in a counterclockwise spiral', () => {
  const m = [1, 8, 7, 2, 9, 6, 3, 4, 5]
  const n = 3

  const expected = [1, 2, 3, 4, 5, 6, 7, 9]
  const actual = printMatrix(m, n)

  expect(actual).toEqual(expected)
})
