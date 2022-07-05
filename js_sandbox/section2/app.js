let color = 'blue'

switch (color) {
  case 'red':
    console.log(`the color is ${color} and is my favorit`)
    break
  case 'blue':
    console.log(`the color is ${color} and is the best`)
    break
  default:
    console.log(`Colorful World `)
}

let day
today = new Date(2022, 06, 02)
console.log(today)
switch (today.getDay()) {
  case 1:
    day = 'monday'
    break
  case 2:
    day = 'tuesday'
    break
  case 3:
    day = 'wendsday'
    break
  case 4:
    day = 'tursday'
    break
  case 5:
    day = 'friday'
    break
  case 6:
    day = 'saturday'
    break
  case 0:
    day = 'sunday'
    break
  default:
    day = 'not available'
}

console.log(day)
