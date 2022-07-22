document.getElementById('button').addEventListener('click', loadData)

function loadData() {
  //create XHR

  const xhr = new XMLHttpRequest()

  xhr.open('GET', 'data.txt', true)

  // xhr.onload = function () {
  //   if (this.status === 200) {
  //     console.log(xhr.responseText)
  //     document.getElementById('output').innerHTML = xhr.responseText
  //   }
  // }

  //HTTP Request statuses
  // 200: ok
  // 403:forbiddenn
  // 404:not found

  xhr.onreadystatechange = function () {
    if (xhr.status === 200 && xhr.readyState === 4) {
      let resStr = ''
      for (let i = 0; i < 10; i++) {
        resStr += `<h1>
        ${xhr.responseText}</h1>,<br />`
      }
      document.getElementById('output').innerHTML = resStr
    }
  }

  // readyState values
  // 0 : request not initialized
  // 1 : server connection stablished
  // 2 : request recieved
  // 3 : processing request
  // 4 : request finished and response is ready

  xhr.send()
}
