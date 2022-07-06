//global variables
var a = 1
let b = 2
const c = 3

function test() {
  var a = 3
  let b = 6
  const c = 10

  console.log('local of function : ', a, b, c)
}

test()

if (true) {
  var a = 7
  let b = 8
  const c = 12
  console.log('if scope : ', a, b, c)
}

console.log('Global variables : ', a, b, c)
