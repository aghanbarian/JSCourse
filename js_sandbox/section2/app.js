let val

const today = new Date()
val = today

console.log(val)
console.log(typeof val)

const birthDate = new Date()
birthDate.setFullYear(1968, 1, 11)

val = birthDate.getMonth()
val = birthDate.getDay()
val = birthDate.toJSON()
val = birthDate.getFullYear()
val = birthDate.getHours()
val = birthDate.getMinutes()
val = birthDate.getSeconds()
val = birthDate.getMilliseconds()
val = birthDate.getTime()

birthDate.setDate(12)
birthDate.setFullYear(1970)
birthDate.setHours(23)
birthDate.setMinutes(23)
birthDate.setSeconds(23)

console.log(birthDate)
console.log(val)
console.log(typeof val)
