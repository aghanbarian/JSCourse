//init weather object
const weather = new Weather('Tehran', 'Iran')

document.addEventListener('DOMContentLoaded', getWeather)

function getWeather() {
  weather
    .getWeather()
    .then((result) => {
      console.log(result)
    })
    .catch((err) => console.log(err))
}
