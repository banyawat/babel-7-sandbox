//PART OF PRESET STAGE 3

export default () => {
  console.log('### OBJECT REST SPREAD IMPLEMENTATION')
  const originObject = { x: 1, y: 2, a: 3, b: 4 }
  console.log('REST PROPERTIES')
  console.log('ORGINAL OBJECT:', originObject)
  // Rest Properties
  let { x, y, ...z } = originObject
  console.log('z:', x) // 1
  console.log('y:', y) // 2
  console.log('z:', z) // { a: 3, b: 4 }

  // Spread Properties
  console.log('SPREAD PROPERTIES')
  let n = { x, y, ...z };
  console.log('n:', n); // { x: 1, y: 2, a: 3, b: 4 }
}