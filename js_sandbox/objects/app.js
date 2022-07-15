class Person {
  constructor(firstName, LastName, bod) {
    this.firstName = firstName
    this.LastName = LastName
    this.birthDay = new Date(bod)
  }

  greeting() {
    return `Hello There ${this.firstName} ${this.LastName}`
  }

  getsMarried(newLastname) {
    this.LastName = newLastname
  }

  calculateAge() {
    const diff = Date.now() - this.birthDay.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  static addNumbers(a, b) {
    return a + b
  }
}

mary = new Person('mary', 'johnson', '10-2-1983')

console.log('====================================')
console.log(mary)
console.log(mary.greeting())
mary.getsMarried('Tompson')
console.log(mary.greeting())
console.log(mary.calculateAge())
console.log('====================================')

console.log(Person.addNumbers(1, 2))

class Customer extends Person {
  constructor(name, family, bod, phone, membership) {
    super(name, family, bod)

    this.phone = phone
    this.membership = membership
  }

  greeting() {
    return `Hello There ${this.firstName} ${this.LastName} welcome to our company`
  }

  static getMembershipCost() {
    return 500
  }
}

const aCustomer = new Customer(
  'ahmad',
  'jefferson',
  '10-10-1990',
  '565-789-8989',
  'standard'
)

console.log(aCustomer)

console.log(aCustomer.greeting())

console.log(Customer.getMembershipCost())
