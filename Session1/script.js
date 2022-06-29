//alert('hi in Alert')
document.write('hi from document ')
document.getElementById('myId').innerHTML = 'Hi from JS'

let studentCount = 70
let staffCount = 10
var first_name = 'hassan'
const last_name = 'ahmadi'

// console.log('TotalCount : ')
// console.log(studentCount + staffCount)

// console.log(first_name)
// first_name = 'ali'
// console.log(first_name)
// console.log(last_name)
// console.log('github initiated ')
// console.log('github sync')
// document.write('<br/>')
// document.write('new changes in log')

/* Case sensitive */
let age = 30
let AGE = 50
console.log(age)
console.log(AGE)

/*one line var definition */
let name,
  lastname = ''

name = 'david'
lastname = 'robeRtson'

console.log(name)
console.log(lastname)

/*Numbers types */
a = 10
b = 18.5
c = -16.5
d = 3e4
f = 4.2e7
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(f)

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof f)

if (typeof c == 'number') {
  console.log(true)
}

console.log(typeof name)

/* null value */

let n = null
console.log(n)
console.log(typeof n)

let aNan = NaN
/* number object and methods */

// console.log(price.toExponential())
// console.log(price.toFixed(3))
// console.log(price.toPrecision(4))
// console.log((14.789).toFixed(3))
// console.log(Number.isFinite(price / 2))
// console.log(Number.isInteger(b))
// console.log(Number.isNaN(aNan))
// console.log(aNan)
// console.log(Number.isNaN(lastname))

/* Number objects features */

console.log(Number('10'))
console.log(Number('10.5'))
console.log(Number('10.76'))
console.log(Number('10,7'))
console.log(Number('10a'))
console.log(Number('edvin'))

console.log(parseInt('10'))
console.log(parseInt('10.5'))
console.log(parseInt('10 a'))
console.log(parseInt('a 10'))

console.log(lastname.length)
console.log(lastname.toUpperCase())
console.log(lastname.indexOf('t'))
console.log(lastname.replace(/r/g, 'o'))
console.log(lastname.replace(/r/gi, 'o'))

let num1 = 100,
  num2 = 123,
  num3 = 5

console.log(num1)
console.log(num2)

num1 = num2 - num1
console.log(num1)
num1 %= num3
console.log(num1)
console.log(num1, num2)
num2 *= num1++
console.log(num1, num2)

let result
let str1 = 'ali',
  str2 = 'hassan'

result = num2 == num3
console.log(result)
num2 = num3
result = num2 == num3
result = '0' == 0
result = '' == 0
result = null == undefined
result = num2 === num3
result = '' === 0
result = '1' === 1
result = null === undefined
result = num1 != num3
result = true != false
result = 1 != 0
result = str1.length
result = str1.length < str2.length
result = str2.slice(2, 6)
result = str1.replace('l', 'b')
result = String(10)
result = Number(String(28 * 4))
result = String(true)
result = String('10' + null)
result = String('10' - null)
result = '10' * '3'
result = parseInt('11' % '10')
result = true && str1 == str2
result = num1 > num2 || str2 > str1
console.log(result)
console.log(typeof result)
num1 = 99
if (num1 > 100) {
  s1 = `عدد ${num1}`
  s2 = 'بزرگتر از 100 است'
  alert(s1 + s2)
} else {
  alert('No problem')
}

if (num1 > 100) {
  alert('you are lucky')
  if (num1 % 2 == 1) {
    alert('more lock')
  }
} else {
  alert('More effort is needed')
}
