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
today = new Date()
switch (today.getDay()) {
  case 0:
    day = 'monday'
    break
  case 1:
    day = 'tuesday'
    break
  case 2:
    day = 'wendsday'
    break
  case 3:
    day = 'tursday'
    break
  case 4:
    day = 'friday'
    break
  case 5:
    day = 'saturday'
    break
  case 6:
    day = 'sunday'
    break
  default:
    day = 'not available'
}

console.log(day)
