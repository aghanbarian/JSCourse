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
