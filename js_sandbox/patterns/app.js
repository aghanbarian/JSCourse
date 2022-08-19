//basic structure

// (function() {
//   //declare private variables and functions

//   return {
//     //declare public vars and functions

//   }

// }) () ;

const UICtrl = (function () {
  let text = 'Hello World !'

  const changeText = function () {
    document.querySelector('h1').textContent = text
  }

  return {
    callChangeText: function () {
      changeText()
    },
  }
})()

document.getElementById('changetext').addEventListener('click', function () {
  UICtrl.callChangeText()
})

//reveling module pattern
const ItemCtrl = (function () {
  let data = []

  function add(item) {
    data.push(item)
    console.log('Item added ....')
  }

  function get(id) {
    return data.find((item) => {
      return item.id === id
    })
  }

  return {
    add: add,
    get: get,
  }
})()

ItemCtrl.add({ id: 1, name: 'john' })
console.log(ItemCtrl.get(1))
ItemCtrl.add({ id: 2, name: 'mark' })
console.log(ItemCtrl.get(2))
