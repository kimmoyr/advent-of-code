const fs = require('fs')
const path = require('path')

function* pairs(row) {
  for (let i = 0; i < row.length; i++) {
    for (let j = i + 1; j < row.length; j++) {
      yield [row[i], row[j]]
    }
  }
}

function findEvenlyDivisible(row) {
  for (let [a, b] of pairs(row.slice().sort((l, r) => r - l))) {
    if (a % b === 0) {
      return a / b
    }
  }

  throw new Error('Evenly divisible values not found in row.')
}

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
  .trim().split('\n')
  .map(row => row.split('\t').map(val => +val))

const part1 = input.reduce((sum, row) => sum + Math.max(...row) - Math.min(...row), 0)

const part2 = input.reduce((sum, row) => sum + findEvenlyDivisible(row), 0)

console.log(part1, part2)
