//PART OF PRESET STAGE 3

export default () => {
  console.log('### UNICODE PROPERTY REGULAR EXPRESSION')
  const thaiRegexp = /\p{Script_Extensions=Thai}/u
  console.log(thaiRegexp.test('hello'))
  console.log(thaiRegexp.test('สวัสดี'))
}