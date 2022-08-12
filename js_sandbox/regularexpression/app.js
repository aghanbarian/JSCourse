let re = /hello/

console.log(re)
console.log(re.source)

let result
result = re.exec('hello World')
console.log(result) // ok index = 0

result = re.exec('Hello World')
console.log(result) // null

result = re.exec('hell World')
console.log(result) // null

result = re.exec('helloBrad World')
console.log(result) // ok index=0

result = re.exec('Ahmad say hello World')
console.log(result) // ok index=10
console.log(result.index)
console.log(result.input)

// test () return true or false
result = re.test('hello world')
console.log(result) // true

result = re.test('Hello')
console.log(result) // false

re = /hello/i //case intensitive
result = re.test('Hello')
console.log(result) // true

//match() return the regular expression in an str
re = /hello/i
let str = 'Hello There'
result = str.match(re)
console.log(result) //Ok

re = /hello/i
str = 'ahmad Hello There'
result = str.search(re)
console.log(result) // 6

//replace
str = 'ahmad Hello There'
result = str.replace(re, 'hi')
console.log(result) // ahmad hi there

// Section 2 regular expression

re = /hello/
str = 'hello there' //matches

re = /hello/i
str = 'Hello there world' //matches

re = /^h/i
re = / world$/i
re = /^hello$/i
re = /h.llo/i
str = 'Hoeeellllo there world' //matches
re = /h*llo/i

str = 'gry?'
re = /gre?a?y/i
re = /gre?a?y\?/i

//log result

result = re.exec(str)
console.log(result)

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`)
  } else {
    console.log(`${str} does NOT matche ${re.source}`)
  }
}

reTest(re, str)
