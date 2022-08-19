const SingletonObject = (function () {
  let instance

  function createInstance() {
    const object = new Object({ name: 'ahmad' })
    return object
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance()
        console.log('in getInstance')
      }
      return instance
    },
  }
})()

const instanceA = SingletonObject.getInstance()
const instanceB = SingletonObject.getInstance()

console.log(instanceA)
console.log(instanceB)
console.log(instanceA === instanceB)
