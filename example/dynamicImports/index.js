export default async () => {
  const sumModule = import('./sumModule')
  sumModule
    .then(module => {
      console.log('### DYNAMIC IMPORTS')
      console.log('Result of SUM modules', module.default(1, 1))
    })
    .catch(error => {
      console.error('Problem occurred when import', error)
    })

  // console.log('Working with imported module:', sumModule(1, 1))
}