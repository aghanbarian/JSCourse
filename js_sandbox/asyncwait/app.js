async function myFunc() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('hello ahmad'), 5000)
  })

  const error = false

  if (!error) {
    const res = await promise
    return res
  } else {
    await Promise.reject(new Error('something goes wrong'))
  }
}

myFunc()
  .then((res) => console.log(res))
  .catch((res) => console.log(res))
