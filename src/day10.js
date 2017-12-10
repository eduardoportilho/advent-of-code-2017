
function solve(input) {
  // const listSize = 5
  const listSize = 256
  let list = mklist(listSize)
  let pos = 0
  let skip = 0
  while (input.length > 0) {
    let size = input.shift()
    list = twist(list, pos, size)
    pos = (pos + size + skip) % listSize
    skip++
  }
  const [x, y] = list
  return x * y
}

function twist(list, pos, size) {
  if (size > list.length) 
    return list
  list = rotate(list, pos)

  let select = list.slice(0, size)
  let tail = list.slice(size)
  list = select.reverse().concat(tail)
  return rotate(list, -pos)
}

function rotate(list, offset) {
  const a = list.slice(offset)
  const b = list.slice(0, offset)
  return a.concat(b)
}

function mklist(size) {
  const list = []
  for (let i = 0; i < size; i++)
    list.push(i)
  return list
}

// const input = [3, 4, 1, 5]
const input = [97,167,54,178,2,11,209,174,119,248,254,0,255,1,64,190]

console.log(`>>>`, solve(input))