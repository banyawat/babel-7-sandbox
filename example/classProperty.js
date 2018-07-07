//PART OF PRESET STAGE 3

class Dog {
  static legs = 4
  name = 'Johnny'
}

export default () => {
  console.log('### CLASS PROPERTY DEFINING....')
  const myDog = new Dog()
  console.log(`My dog has name ${myDog.name}`)
  console.log(`My dog has ${Dog.legs} legs`)
}