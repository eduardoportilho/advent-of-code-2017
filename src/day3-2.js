
const matrix = {}

function solve(input) {
  let position = [0, 0]  
  let value = 1

  while (value <= input) {
    matrix[position] = value
    position = getNextPosition(position)
    value = calculateValue(position)
  }
  return value
}

function calculateValue(position) {
  const x = position[0]
  const y = position[1]

  return (
    (matrix[[x+1,  y+1]]  || 0) +
    (matrix[[x,    y+1]]  || 0) +
    (matrix[[x-1,  y+1]]  || 0) +
    (matrix[[x+1,  y]  ]  || 0) +
    (matrix[[x-1,  y]  ]  || 0) +
    (matrix[[x+1,  y-1]]  || 0) +
    (matrix[[x,    y-1]]  || 0) +
    (matrix[[x-1,  y-1]]  || 0))
}

function getNextPosition(position) {
  const x = position[0]
  const y = position[1]
  const radius = Math.max(Math.abs(x), Math.abs(y))

  if (x === 0 && y === 0) {
    return [1, 0]
  }

  // right edge
  if (x === radius && y > -radius) {
    if (y < radius)
      return [x, y+1]
    else //top-right
      return [x-1, y]
  }
  //top
  else if (y === radius) {
    if (x > -radius)
      return [x-1, y]
    else //top-left
      return [x, y-1]
  }
  //left
  else if (x === -radius) {
    if (y > -radius)
      return [x, y-1]
    else //bottom-left
      return [x+1, y]
  }
  //bottom
  else {
    // if bottom-right => next radius
    return [x+1, y]
  }
}

console.log(`>>>`, solve(parseInt(process.argv.slice(2)[0])))