//PART OF PRESET STAGE 3

export default () => {
  console.log('### OPTIONAL TRY-CATCH')
  try {
    throw 0
  } catch {
    console.log('Error catched without any arguments')
  }
}