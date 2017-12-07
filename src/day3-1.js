
const expect = {
  1: 0,
  12: 3,
  23: 2,
  1024: 31
}


function solve(square) {
  let {x, y} = getPosition(square)
  console.log(`{x, y}`, {x, y})
  return Math.abs(x) + Math.abs(y)
}

function getPosition(square) {
  const radius = getRadius(square)
  if (radius <= 0) {
    return {x:0, y:0}
  }
  const {min} = getMinMax(radius)
  const delta = square - min

  const edgeSize = 2 * radius
  const fullEdges = delta / edgeSize
  const edgeSteps = delta % edgeSize

  let edge = 'right'
  if (fullEdges > 3) {
    edge = 'bottom'
  } else if (fullEdges > 2) {
    edge = 'left'
  } else if (fullEdges > 1) {
    edge = 'top'
  }

  let x, y

  if (edge === 'right') {
    x = radius
    y = -radius + 1 + edgeSteps
  } else if (edge === 'top') {
    y = radius
    x = radius - 1 - edgeSteps
  } else if (edge === 'left') {
    x = -radius
    y = radius - 1 - edgeSteps
  } else if (edge === 'bottom') {
    y = -radius
    x = -radius + 1 + edgeSteps
  }

  return {x, y}
}

function getRadius(square) {
  let radius = 0
  let currentSquare = 1

  while (currentSquare < square) {
    radius++
    currentSquare += (8*radius) // bottom-right
  }
  return radius
}

function getMinMax(radius) {
  let min = Math.pow((2 * (radius-1)) + 1, 2) + 1
  let max = Math.pow((2 * radius) + 1, 2)
  return {min, max}
}

console.log(`>>>`, solve(parseInt(process.argv.slice(2)[0])))