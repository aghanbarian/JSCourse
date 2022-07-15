const personPrototype = {
  greeting: function () {
    return `Hello there ${this.firstName} ${this.lastName}`
  },

  getsMarried: function (newLastName) {
    this.lastName = newLastName
  },
}

const mary = Object.create(personPrototype)
mary.firstName = 'mary'
mary.lastName = 'johnson'
mary.age = 30

console.log('====================================')
console.log(mary)
console.log(mary.greeting())
mary.getsMarried('Davidson')
console.log(mary.greeting())

console.log('====================================')

const brad = Object.create(personPrototype, {
  firstName: { value: 'Brad' },
  lastName: { value: 'traversy' },
  age: { value: 40 },
})

console.log(brad)
console.log(brad.greeting())
