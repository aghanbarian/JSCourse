function Person(firstname, lastname, bod) {
  this.firstName = firstname
  this.lastName = lastname
  this.birthDay = new Date(bod)
  // this.calculateAge = function () {
  //   const diff = Date.now() - this.birthDay.getTime()
  //   const ageDate = new Date(diff)
  //   return Math.abs(ageDate.getUTCFullYear() - 1970)
  // }
}

Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthDay.getTime()
  const ageDate = new Date(diff)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}
Person.prototype.getBirthDate = function () {
  return `${this.firstName} borned in ${this.birthDay}`
}

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

john = new Person('john', 'lizard', '2-11-1968')
mary = new Person('mary', 'johnson', '10 sep  1978')

console.log(john)
console.log(mary)
console.log(mary.calculateAge())
console.log(mary.getFullName())
console.log(mary.getBirthDate())

console.log(mary.hasOwnProperty('lastName'))
console.log(mary.hasOwnProperty('getFullName'))
console.log(mary.hasOwnProperty('calculateAge'))
