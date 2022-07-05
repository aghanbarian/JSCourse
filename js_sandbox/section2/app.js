let name = 'john doe'
let job = 'Web Developer'
let city = 'Tehran'
let age = 35

literalStr =
  '<ul><li>name :' +
  name +
  '</li>' +
  '<li>Job : ' +
  job +
  '</li>' +
  '<li>City : ' +
  city +
  '</li>' +
  '<li>age : ' +
  age +
  '</li>' +
  '</ul>'

// document.body.innerHTML = literalStr

literalStrTag = `<ul>
              <li>Name : ${name}</li>
              <li>Job : ${job}</li>
              <li>Age : ${age}</li>
              <li>city : ${city}</li>
              </ul>`

document.body.innerHTML = literalStr + '<br />' + literalStrTag
