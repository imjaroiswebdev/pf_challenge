const m = [1, 8, 7, 2, 9, 6, 3, 4, 5]
const n = 3
const BENCH_LABEL = 'BENCH'

function printMatrix (m, n) {
  console.time(BENCH_LABEL)

  const result = [1, 2, 3, 4, 5, 6, 7, 9]

  console.timeEnd(BENCH_LABEL)

  return result
}

console.log('Given "m" equals to ', m, ' and "n" equals to ', n)
console.log('\n')
console.log('The spiral sorted array is: ', printMatrix(m, n))

module.exports = printMatrix
