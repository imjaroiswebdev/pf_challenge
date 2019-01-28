# PF Challenge

## Excute

```shell
$ npm i
$ npm run printMatrix
$ npm test
```

## 1. Spiral Matrix

__Def:__ Write a function named printMatrix, that takes an array of integers representing a 2d square matrix and the number of elements on each side as parameters. This function should start at the upper left hand corner of the matrix and print each element in a counterclockwise spiral.

__Example:__ The 3x3 matrix

Is represented by the array m, and the size n:
The result of executing the function printMatrix with m and n as parameters is: 123456789

|1 8 7| |2 9 6| |3 4 5|

m = [1, 8, 7, 2, 9, 6, 3, 4, 5] n=3
Valid values for the elements of m and n are: 0 <= a ∈ m <= 2^31-1 1 <= n <= 2^15
