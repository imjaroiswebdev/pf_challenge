const m = [1, 8, 7, 2, 9, 6, 3, 4, 5]
const n = 3
const BENCH_LABEL = 'BENCH'

function printMatrix (m, n) {
  console.time(BENCH_LABEL)

  const result = [1, 2, 3, 4, 5, 6, 7, 9]

  console.timeEnd(BENCH_LABEL)

  return result
}

function extractEdge (m, n) {
  const extractor = m => (row, col) => {
    const rowReturn = (row - 1) * n
    const colOffset = col - 1
    const index = rowReturn + colOffset

    return m[index]
  }

  const indexListByEdge = n => {
    /**
     * Generates an array of index pairs formed by natural numbers
     * ascendant ordered from an starting index, representing a secuences
     * of indexes with a fixed row or column.
     * @param {Array} arr - Entry array
     * @param {Number} n - Size
     * @param {Number} startAt - Starting index (1 based indexes, like natural arrays)
     * @param {Object} options - genOnlyForRow:Boolean and fixedIndex:Number
     * @returns {Array}
     */
    const genIndexes = (arr, n, startAt, options) => {
      const {
        genOnlyForRow,
        fixedIndex
      } = options
      const needToReturn = (startAt - 1) === n

      if (needToReturn) {
        return arr
      }

      const indexPair = genOnlyForRow
        ? [fixedIndex, startAt]
        : [startAt, fixedIndex]

      return genIndexes(arr.concat([indexPair]), n, startAt + 1, options)
    }

    const till = n - 1

    return {
      left: genIndexes([], till, 1, { // All first numbers of every row, except the last and fixed col 1
        genOnlyForRow: false,
        fixedIndex: 1
      }),
      bottom: genIndexes([], till, 1, { // All numbers of last row, except the last and fixed row n (last)
        genOnlyForRow: true,
        fixedIndex: n
      }),
      right: genIndexes([], n, 2, { // All of righter column column except the first
        genOnlyForRow: false,
        fixedIndex: n
      }),
      top: genIndexes([], n, 2, { // All first column numbers except the first
        genOnlyForRow: true,
        fixedIndex: 1
      })
    }
  }

  console.log('extracted edges::> left::>', JSON.stringify(indexListByEdge(n).left, null, 2))
  console.log('extracted edges::> bottom::>', JSON.stringify(indexListByEdge(n).bottom, null, 2))
  console.log('extracted edges::> right::>', JSON.stringify(indexListByEdge(n).right, null, 2))
  console.log('extracted edges::> top::>', JSON.stringify(indexListByEdge(n).top, null, 2))

  return {
    left: [1, 2],
    bottom: [3, 4],
    right: [5, 6],
    top: [7, 8]
  }
}

extractEdge(m, n)

console.log('Given "m" equals to ', m, ' and "n" equals to ', n)
console.log('\n')
console.log('The spiral sorted array is: ', printMatrix(m, n))

module.exports = printMatrix
