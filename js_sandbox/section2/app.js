let name = 'John Doe'
let age = 40
let job = 'Web developer'
let city = 'Tehran'

let html
//without template string
html =
  '<ul>' +
  '<li>Name : ' +
  name +
  '</li><li>Age : ' +
  age +
  '</li><li>Job : ' +
  job +
  '</li><li>City : ' +
  city +
  '</li></ul>'
//with template string

function helloToName(name) {
  return 'hello ' + name
}
html = `<h1>The Template String</h1>
        <ul>
        <li>name : ${name}</li>
        <li>age : ${age}</li>
        <li>job : ${job}</li>
        <li>city : ${city}</li>
        <li>${5 + 9}</li>
        <li>${helloToName(name)}</li>
        <li>${age > 30 ? 'Over 30' : 'Under or equal to 30'}</li>
</ul>`

document.body.innerHTML = html
