// Iterator Example
function nameIterator(names) {
  let nextIndex = 0

  return {
    next: function () {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true }
    },
    prev: function () {
      return nextIndex > 0
        ? { value: names[--nextIndex], done: false }
        : { done: true }
    },
    reset: function () {
      nextIndex = 0
    },
    update: function (value) {
      names[nextIndex] = value
    },
  }
}

let namesArr = ['jack', 'jill', 'john']

let names = nameIterator(namesArr)

// console.log(names)
console.log(names.next().value)
console.log(names.next().value)
console.log(names.next().value)
console.log(names.prev().value)
console.log(names.prev().value)
console.log(names.prev().value)

names.update('ali')
names.reset()
console.log(names.next().value)
console.log(names.next().value)
console.log(names.next().value)

names.reset()
console.log(names.next().value)
console.log(names.next().value)
console.log(names.next().value)
