//maps = key values pair
const map1 = new Map()

//set keys

const key1 = 'some string'
key2 = {}
key3 = function () {}

//set map values by key

map1.set(key1, 'Value of Key 1')
map1.set(key2, 'Value of Key 2')
map1.set(key3, 'Value of Key 3')

console.log(map1.get(key1))
console.log(map1.get(key2))
console.log(map1.get(key3))

console.log(map1.size)

//loop in maps

//lopp for..of
for (let [key, val] of map1) {
  console.log(`${key} : ${val}`)
}

for (let key of map1.keys()) {
  console.log(key)
}

for (let val of map1.values()) {
  console.log(val)
}

map1.forEach(function (value, key) {
  console.log(`${key} : ${value}`)
})

const keyvalArr = Array.from(map1)
console.log(keyvalArr)

const valArr = Array.from(map1.values())
console.log(valArr)

const keyArr = Array.from(map1.keys())
console.log(keyArr)
