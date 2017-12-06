const fs = require('fs')
const path = require('path')

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'utf8').trim()

const part1 = [...input].reduce((sum, c, i, arr) =>
  sum + (c === arr[(i + 1) % arr.length] ? +c : 0), 0)
const part2 = [...input].reduce((sum, c, i, arr) =>
  sum + (c === arr[(i + arr.length / 2) % arr.length] ? +c : 0), 0)

console.log(part1, part2)
