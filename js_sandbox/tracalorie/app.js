// Storage Controller

// Item Controller
const ItemCtrl = (function () {
  const item = function (id, name, calories) {
    this.id = id
    this.name = name
    this.calories = calories
  }

  // data structure /state
  const data = {
    items: [
      // { id: 0, name: 'Steak Dinner', calories: 1200 },
      // { id: 1, name: 'Cooki', calories: 400 },
      // { id: 2, name: 'Eggs', calories: 300 },
      // { id: 3, name: 'Gurmet', calories: 1300 },
    ],
    currentItem: null,
    totalCalories: 0,
  }

  // public Methods
  return {
    getItems: function () {
      return data.items
    },
    addItem: function (name, calories) {
      let ID

      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1
      } else {
        ID = 0
      }

      let calorie = parseInt(calories)

      const newItem = new item(ID, name, calorie)

      data.items.push(newItem)

      return newItem
    },
    removeItem: function (id) {
      data.items.forEach(function (item, index) {
        if (item.id === id) {
          data.items.splice(index, 1)
        }
      })
    },
    getTotalCalories: function () {
      let total = 0
      data.items.forEach(function (item) {
        total += parseInt(item.calories)
      })

      data.totalCalories = total

      return data.totalCalories
    },

    getItemById: function (id) {
      let found = null
      data.items.forEach(function (item) {
        if (item.id === id) {
          found = item
        }
      })
      return found
    },
    updateItem: function (name, calories) {
      data.currentItem.name = name
      data.currentItem.calories = calories
      return data.currentItem
    },
    setCurrentItem: function (item) {
      data.currentItem = item
    },
    getCurrentItem: function () {
      return data.currentItem
    },
    clearAllItem: function () {
      data.items = []
    },
    logdata: function () {
      return data
    },
  }
})()

// UI Controller
const UICtrl = (function () {
  const UISelectors = {
    itemList: '#item-list',
    listItems: '#item-list li',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    clearAllBtn: '.clear-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCaloriesItem: '.total-calories',
  }
  // public Methods
  return {
    populateItems: function (items) {
      let html = ''

      items.forEach(function (item) {
        html += `
            <li class="collection-item" id="item-${item.id}">
          <strong>${item.name} : </strong><em>${item.calories} calories</em>
          <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
        </li>
        `
      })
      document.querySelector(UISelectors.itemList).innerHTML = html
    },
    getInputItems: function () {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value,
      }
    },
    addListItem: function (item) {
      let li
      document.querySelector(UISelectors.itemList).style.display = 'block'
      li = document.createElement('li')
      li.className = 'collection-item'
      li.id = `item-${item.id}`
      li.innerHTML = `
          <strong>${item.name} : </strong><em>${item.calories} calories</em>
          <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
      `
      document
        .querySelector(UISelectors.itemList)
        .insertAdjacentElement('beforeend', li)

      let totalCalories = ItemCtrl.getTotalCalories()
      UICtrl.showTotalCalories(totalCalories)
    },

    updateListItem: function () {
      const items = document.querySelectorAll(UISelectors.listItems)

      items.forEach(function (item) {
        const itemToUpdate = ItemCtrl.getCurrentItem()
        if (item.id === 'item-' + itemToUpdate.id) {
          console.log('Equity')
          item.innerHTML = `
          <strong>${itemToUpdate.name} : </strong><em>${itemToUpdate.calories} calories</em>
          <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
          `
        }
      })

      let totalCalories = ItemCtrl.getTotalCalories()
      UICtrl.showTotalCalories(totalCalories)
    },

    removeListItem: function (id) {
      const items = document.querySelectorAll(UISelectors.listItems)
      items.forEach(function (item) {
        if (item.id === 'item-' + id) {
          item.remove()
        }
      })
      let totalCalories = ItemCtrl.getTotalCalories()
      UICtrl.showTotalCalories(totalCalories)
    },

    removeAllListItem: function () {
      const items = document.querySelectorAll(UISelectors.listItems)
      if (items !== null && items.length > 0) {
        items.forEach(function (item) {
          item.remove()
        })
      }
      let totalCalories = ItemCtrl.getTotalCalories()
      UICtrl.showTotalCalories(totalCalories)
    },

    getSelectors: function () {
      return UISelectors
    },

    clearInputFields: function () {
      document.querySelector(UISelectors.itemNameInput).value = ''
      document.querySelector(UISelectors.itemCaloriesInput).value = ''
    },
    showTotalCalories: function (total) {
      document.querySelector(UISelectors.totalCaloriesItem).textContent = total
    },
    hideList: function () {
      document.querySelector(UISelectors.itemList).style.display = 'none'
    },
    setInputFields: function () {
      document.querySelector(UISelectors.itemNameInput).value =
        ItemCtrl.getCurrentItem().name
      document.querySelector(UISelectors.itemCaloriesInput).value =
        ItemCtrl.getCurrentItem().calories
      UICtrl.showEditState()
    },
    clearEditState: function () {
      UICtrl.clearInputFields()
      document.querySelector(UISelectors.addBtn).style.display = 'inline'
      document.querySelector(UISelectors.updateBtn).style.display = 'none'
      document.querySelector(UISelectors.deleteBtn).style.display = 'none'
      document.querySelector(UISelectors.backBtn).style.display = 'none'
    },
    showEditState: function () {
      document.querySelector(UISelectors.addBtn).style.display = 'none'
      document.querySelector(UISelectors.updateBtn).style.display = 'inline'
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline'
      document.querySelector(UISelectors.backBtn).style.display = 'inline'
    },
  }
})()

// App Controller

const App = (function (ItemCtrl, UICtrl) {
  // Load EventListeners
  const loadEventListener = function () {
    const selectors = UICtrl.getSelectors()
    document
      .querySelector(selectors.addBtn)
      .addEventListener('click', itemAddSubmit)
    document
      .querySelector(selectors.itemList)
      .addEventListener('click', itemEditSubmit)
    document
      .querySelector(selectors.updateBtn)
      .addEventListener('click', itemUpdateSubmit)
    document
      .querySelector(selectors.deleteBtn)
      .addEventListener('click', itemDeleteSubmit)
    document
      .querySelector(selectors.clearAllBtn)
      .addEventListener('click', clearAllItemsClick)
  }

  function itemUpdateSubmit(e) {
    const input = UICtrl.getInputItems()

    if (input.name !== '' && input.calories !== '') {
      const updatedItem = ItemCtrl.updateItem(input.name, input.calories)
      UICtrl.updateListItem(updatedItem)
      UICtrl.clearEditState()
    }
    e.preventDefault()
  }

  const itemDeleteSubmit = function (e) {
    ItemCtrl.removeItem(ItemCtrl.getCurrentItem().id)
    UICtrl.removeListItem(ItemCtrl.getCurrentItem().id)
    UICtrl.clearEditState()
  }

  const clearAllItemsClick = function (e) {
    console.log('step 1')
    ItemCtrl.clearAllItem()
    console.log('step 2')
    UICtrl.removeAllListItem()
    console.log('step 3')
    UICtrl.clearEditState()
    console.log('step end')
  }

  function itemAddSubmit(e) {
    const input = UICtrl.getInputItems()

    if (input.name !== '' && input.calories !== '') {
      const newItem = ItemCtrl.addItem(input.name, input.calories)
      UICtrl.addListItem(newItem)
      UICtrl.clearInputFields()
    }
    e.preventDefault()
  }

  function itemEditSubmit(e) {
    if (e.target.classList.contains('edit-item')) {
      //get list item id
      const listId = e.target.parentNode.parentNode.id
      listIdArr = listId.split('-')
      id = parseInt(listIdArr[1])
      let itemToEdit = ItemCtrl.getItemById(id)
      if (itemToEdit !== null) {
        ItemCtrl.setCurrentItem(itemToEdit)
        UICtrl.setInputFields()
      }
    }
    e.preventDefault()
  }
  // public Methods
  return {
    init: function () {
      UICtrl.clearEditState()
      const items = ItemCtrl.getItems()
      if (items.length === 0) {
        UICtrl.hideList()
      } else {
        UICtrl.populateItems(items)
      }

      let total = ItemCtrl.getTotalCalories()
      UICtrl.showTotalCalories(total)

      loadEventListener()
    },
  }
})(ItemCtrl, UICtrl)

App.init()
