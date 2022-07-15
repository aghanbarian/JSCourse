const brad = {
  name: 'brad',
  age: 30,
}

console.log(brad)
console.log(brad.age)

//construcor function

function Person(name, dob) {
  this.name = name
  this.birthday = new Date(dob)
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
}

let bradPerson = new Person('brad', '9-10-1966')
let johnPerson = new Person('John', '10-02-1988')

console.log(bradPerson, bradPerson.calculateAge())
console.log(johnPerson, johnPerson.calculateAge())
