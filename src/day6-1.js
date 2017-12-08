
function solve(input) {
  let redistCount = 0
  let state = input.replace(/\s+/g, '.')
  const states = new Set()
  while (!states.has(state)) {
    states.add(state)
    state = redistribute(state)
    redistCount++
  }

  let count2 = 1
  const repeatedState = state 
  state = redistribute(state)

  while (state !== repeatedState) {
    count2++
    state = redistribute(state)
  }

  // console.log(`>>>`, states)
  return count2
}

function redistribute(currState) {
  const state = currState.split('.').map(x => parseInt(x))
  let index = findMaxIndex(state)
  let redist = state[index]
  state[index] = 0

  while (redist > 0) {
    index++
    if (index === state.length) {
      index = 0
    }
    state[index] = state[index] + 1
    redist--
  }
  return state.join('.')
}

function findMaxIndex(arr) {
  let index = 0
  let max = arr[index]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      index = i
      max = arr[index]
    }
  }
  return index
}

const input = `5  1 10  0 1 7 13  14  3 12  8 10  7 12  0 6`.trim()

console.log(`>>>`, solve(input))