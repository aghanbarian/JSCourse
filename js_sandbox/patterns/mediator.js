const User = function (name) {
  this.name = name
  this.chatroom = null
}

User.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to)
  },
  recieve: function (message, from) {
    console.log(`${from.name} to ${this.name} : ${message}`)
  },
}

const Chatroom = function () {
  let users = []

  return {
    register: function (user) {
      users[user.name] = user
      user.chatroom = this
    },

    send: function (message, from, to) {
      if (to) {
        to.recieve(message, from)
      } else {
        for (key in users) {
          if (users[key] !== from) {
            users[key].recieve(message, from)
          }
        }
      }
    },
  }
}

const brad = new User('Brad')
const john = new User('John')
const sara = new User('Sara')

const chatroom = new Chatroom()

chatroom.register(brad)
chatroom.register(john)
chatroom.register(sara)

brad.send('Hello john', john)
sara.send('hello brad, the best dev ever', brad)
john.send('hi every one !')
