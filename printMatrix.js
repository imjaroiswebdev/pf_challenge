/* eslint-disable operator-linebreak */
const m = [1, 8, 7, 2, 9, 6, 3, 4, 5]
// const m = [1, 8, 7, 2, 9, 6, 3, 4, 5, 11, 22, 33, 44, 55, 66, 77]
const n = 3
// const n = 4
const BENCH_LABEL = 'BENCH'

function printMatrix (m, n) {
  const result = spiralify(m, n, [])

  return result
}

function spiralify (m, n, acummulator) {
  const needToReturn = n === 0
  const isTooTinyMatrix = n === 1

  if (needToReturn) {
    return acummulator
  }

  if (isTooTinyMatrix) {
    return acummulator.concat(m)
  }

  const extractedEdges = extractEdge(m, n)

  const updatedAccum = acummulator.concat(
    Object.values(extractedEdges).reduce(function (result, edge) {
      return result.concat(edge)
    })
  )

  const subM = genSubmatrix(m, n, 1)
  const submatrixSize = Math.ceil(subM.length / (n - 1))

  return spiralify(subM, submatrixSize, updatedAccum)
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
      left: n === 2
        ? [[1, 1]]
        : genIndexes([], till, 1, { // All first numbers of every row, except the last and fixed col 1
          genOnlyForRow: false,
          fixedIndex: 1
        }),

      bottom: n === 2
        ? [[2, 1]]
        : genIndexes([], till, 1, { // All numbers of last row, except the last and fixed row n (last)
          genOnlyForRow: true,
          fixedIndex: n
        }),

      right: n === 2
        ? [[2, 2]]
        : genIndexes([], n, 2, { // All of righter column column except the first
          genOnlyForRow: false,
          fixedIndex: n
        }).reverse(),

      top: n === 2
        ? [[1, 2]]
        : genIndexes([], n, 2, { // All first column numbers except the first
          genOnlyForRow: true,
          fixedIndex: 1
        }).reverse()
    }
  }

  const matrixIndexExtractor = extractor(m)
  const indexList = indexListByEdge(n)
  const generateEdge = edge => indexList[edge].map(indexPair => matrixIndexExtractor.apply(null, indexPair))

  return {
    left: generateEdge('left'),
    bottom: generateEdge('bottom'),
    right: generateEdge('right'),
    top: generateEdge('top')
  }
}

/**
 * Generates a submatrix from a supplied matrix and an offset
 * @param {Array} m Source matrix
 * @param {Number} n Size of source matrix
 * @param {Number} offset Offset of penetration in source matrix order
 */
function genSubmatrix (m, n, offset) {
  const returnVoidArray = n === 1 || n === 2
  const returnM1x1 = n === 3

  if (returnVoidArray) {
    return []
  }

  if (returnM1x1) {
    return [m[4]]
  }

  const submatrix = m.filter(function (_, index) {
    const row = Math.ceil((index + 1) / n)
    const col = index + 1 - (row - 1) * n
    const isSubmatrixRow = (row > offset) && row <= (n - offset)
    const isSubmatrixCol = (col > offset) && col <= (n - offset)
    const canPass = isSubmatrixRow && isSubmatrixCol

    return canPass
  })

  return submatrix
}

console.time(BENCH_LABEL)
console.log('Given "m" equals to ', m, ' and "n" equals to ', n)
console.log('\n')
console.log('The spiral sorted array is: ', printMatrix(m, n))

console.timeEnd(BENCH_LABEL)

module.exports = printMatrix
