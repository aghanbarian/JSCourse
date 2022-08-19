const data = [
  {
    name: 'john doe',
    age: 30,
    gender: 'male',
    lookfor: 'female',
    location: 'Boston MA',
    picture: 'https://randomuser.me/api/portraits/men/82.jpg',
  },
  {
    name: 'jill smith',
    age: 26,
    gender: 'female',
    lookfor: 'male',
    location: 'Miami FL',
    picture: 'https://randomuser.me/api/portraits/women/82.jpg',
  },
  {
    name: 'mark spencer',
    age: 35,
    gender: 'male',
    lookfor: 'female',
    location: 'Lynn MA',
    picture: 'https://randomuser.me/api/portraits/men/84.jpg',
  },
]
profiles = profileIterator(data)
nextProfileDisplay()

//next button
document.getElementById('next').addEventListener('click', nextProfileDisplay)

function nextProfileDisplay() {
  currentProfile = profiles.next().value
  console.log(currentProfile)

  if (currentProfile !== undefined) {
    document.getElementById('displayProfile').innerHTML = `
        <ul class = 'list-group'>
          <li class = 'list-group-item'>Name : ${currentProfile.name}</li>
          <li class = 'list-group-item'>age : ${currentProfile.age}</li>
          <li class = 'list-group-item'>location : ${currentProfile.location}</li>
          <li class = 'list-group-item'>${currentProfile.gender} looking for ${currentProfile.lookfor}</li>
        </ul>
`

    document.getElementById(
      'displayImage'
    ).innerHTML = `<img src = ${currentProfile.picture}>`
  } else {
    window.location.reload()
  }
}

//profile iterator

function profileIterator(profiles) {
  let nextIndex = 0

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true }
    },
  }
}
