document.getElementById('button1').addEventListener('click', loadCustomer)
document.getElementById('button2').addEventListener('click', loadCustomers)

function loadCustomer(e) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'customer.json', true)
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(xhr.responseText)
      const customer = JSON.parse(this.responseText)
      let output = `
      <ul>
      <li>ID : ${customer.id}</li>
      <li>Name : ${customer.name}</li>
      <li>Lats Name : ${customer.lastName}</li>
      <li>Name : ${customer.age}</li>
      </ul>
      `
      console.log(output)
      document.getElementById('customer').innerHTML = output
    }
  }

  xhr.send()
}

function loadCustomers(e) {
  const xhr = new XMLHttpRequest()

  xhr.open('GET', 'customers.json', true)

  xhr.onload = function () {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText)
      let output = ''
      customers.forEach(function (customer) {
        output += `
        <ul>
        <li>ID : ${customer.id}</li>
        <li>Name : ${customer.name}</li>
        <li>Lats Name : ${customer.lastName}</li>
        <li>Name : ${customer.age}</li>
        </ul> `
      })
      document.getElementById('customers').innerHTML = output
    }
  }
  xhr.send()
}
