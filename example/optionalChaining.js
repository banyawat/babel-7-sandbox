export default () => {
  const a = {
    b: 42
  }

  console.log('### OPTIONAL CHAINING')
  console.log('RESULT OF a?.b === 42', a?.b === 42)
  // console.log('RESULT OF a?.b=42', a?.b = 42)
}