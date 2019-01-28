const printMatrix = require('./printMatrix')

/* eslint-disable no-undef */
test('Given an square matrix and its size, should print each element in a counterclockwise spiral', () => {
  const given = {
    m: [1, 8, 7, 2, 9, 6, 3, 4, 5],
    n: 3
  }

  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const actual = printMatrix(given.m, given.n)

  expect(actual).toEqual(expected)
})

test('Given an 4x4 matrix of letters. Should print each letter in a counterclockwise spiral', () => {
  const given = {
    m: ['a', 'l', 'k', 'j', 'b', 'm', 'p', 'i', 'c', 'n', 'o', 'h', 'd', 'e', 'f', 'g'],
    n: 4
  }

  const expected = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p']
  const actual = printMatrix(given.m, given.n)

  expect(actual).toEqual(expected)
})

test('Given a void array. Should print a void array', () => {
  const given = {
    m: [],
    n: 0
  }

  const expected = []
  const actual = printMatrix(given.m, given.n)

  expect(actual).toEqual(expected)
})

test('Given a void array and any value for n. Should print a void array', () => {
  const given = {
    m: [],
    n: 100
  }

  const expected = []
  const actual = printMatrix(given.m, given.n)

  expect(actual).toEqual(expected)
})

test('Given an one element array. Should print an one element array', () => {
  const given = {
    m: [1],
    n: 1
  }

  const expected = [1]
  const actual = printMatrix(given.m, given.n)

  expect(actual).toEqual(expected)
})

test('Given an one element array and any value for n. Should print an one element array', () => {
  const given = {
    m: [1],
    n: 100
  }

  const expected = [1]
  const actual = printMatrix(given.m, given.n)

  expect(actual).toEqual(expected)
})
