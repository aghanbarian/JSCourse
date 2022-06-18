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
// let price = 16.345678

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

sentence = 'I am ahmad Ghanbarian'
console.log(sentence.includes('ahmad'))
console.log(sentence.slice(3, 7))
console.log(sentence.slice(5, 10))
console.log(sentence.slice(-10))
console.log(sentence.substring(1, 10))
console.log(sentence.substr(10, 10))
sen2 = sentence.replace('ahmad', 'ali')
console.log(sen2)

console.log(sen2.charCodeAt(6))
sen2[1] = 'b'
console.log(sen2)

console.log(sen2.search('ali'))
console.log(sen2.startsWith('I am'))
console.log(sen2.endsWith('ghanbarian'))
console.log(sen2.concat(' , I am well, are you?').concat(' che jaleb'))
console.log(name.concat(' ', lastname, ' ', ' student of math'))
console.log(`Welcome ${name} \n ${lastname}`)

let price = 120000
let VAT = 0.25

console.log(`Total Price : ${price * (1 + VAT)}`)
