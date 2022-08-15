document.getElementById('name').addEventListener('blur', validateName)
document.getElementById('email').addEventListener('blur', validateEmail)
document.getElementById('zip').addEventListener('blur', validateZip)
document.getElementById('phone').addEventListener('blur', validatePhone)

function validateName() {
  let name = document.getElementById('name')
  re = /^[a-zA-Z]{2,15}$/
  if (!re.test(name.value)) {
    name.classList.add('is-invalid')
  } else {
    name.classList.remove('is-invalid')
  }
}

function validateEmail() {
  let email = document.getElementById('email')
  re = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/

  if (!re.test(email.value)) {
    email.classList.add('is-invalid')
  } else {
    console.log('test is valid')
    email.classList.remove('is-invalid')
  }
}

function validateZip() {
  let zip = document.getElementById('zip')
  re = /^\d{5}(?:[-\s]\d{4})?$/

  if (!re.test(zip.value)) {
    zip.classList.add('is-invalid')
  } else {
    console.log('test is valid')
    zip.classList.remove('is-invalid')
  }
}

function validatePhone() {
  let phone = document.getElementById('phone')
  re = /^[1-9]\d{2}-\d{3}-\d{4}/

  if (!re.test(phone.value)) {
    phone.classList.add('is-invalid')
  } else {
    console.log('test is valid')
    phone.classList.remove('is-invalid')
  }
}
