// some arrays

let Numbers = [45, 22, 34, 76, 11, 12]
let Numbers2 = new Array(19, 2, 12, 45, 23, 11, 4)
let fruits = ['Apple', 'Banana', 'Orange', 'Pear']
let Mixed = ['ahmad', 30, 'Ghanbarian', 'Tehran Majidieh']
let val

console.log(Numbers)
val = Numbers.length
val = Array.isArray(Numbers2)
val = Numbers[3]
Numbers[2] = 100
val = Numbers.indexOf(12)
Numbers.push(44)

Numbers.unshift(999)
Numbers.pop()

console.log(Numbers)
console.log(val)
