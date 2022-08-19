function MemberFactory() {
  this.createMember = function (name, type) {
    let member

    if (type === 'simple') {
      member = new SimpleMemberShip(name)
    } else if (type === 'standard') {
      member = new StandardMemberShip(name)
    } else if (type === 'super') {
      member = new SuperMemberShip(name)
    }

    member.type = type

    member.define = function () {
      console.log(`${this.name} ${this.type} ${this.cost}`)
    }

    return member
  }
}

const SimpleMemberShip = function (name) {
  this.name = name
  this.cost = '$5'
}
const StandardMemberShip = function (name) {
  this.name = name
  this.cost = '$15'
}
const SuperMemberShip = function (name) {
  this.name = name
  this.cost = '$35'
}

const members = []
const Factory = new MemberFactory()

members.push(Factory.createMember('jogn doe', 'simple'))
members.push(Factory.createMember('mark tao', 'standard'))
members.push(Factory.createMember('john grisham', 'simple'))
members.push(Factory.createMember('jahan salamt', 'super'))
members.push(Factory.createMember('ali ahmadi', 'standard'))

members.forEach(function (member) {
  member.define()
})
