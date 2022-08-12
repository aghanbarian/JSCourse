//init weather object
const weather = new Weather('Tehran', 'Iran')
const ui = new UI()

document.addEventListener('DOMContentLoaded', getWeather)

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value
  const state = document.getElementById('state').value

  console.log(city, state)
  weather.changeLocation(city, state)

  getWeather()

  $('#locModal').modal('hide')
})

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      ui.paint(results)
    })
    .catch((err) => console.log(err))
}
