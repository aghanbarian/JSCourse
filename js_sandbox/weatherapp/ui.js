class UI {
  constructor() {
    this.location = document.getElementById('w-location')
    this.desc = document.getElementById('w-desc')
    this.string = document.getElementById('w-string')
    this.details = document.getElementById('w-details')
    this.icon = document.getElementById('w-icon')
    this.humidity = document.getElementById('w-humidity')
    this.feelslike = document.getElementById('w-feels-like')
    this.wind = document.getElementById('w-winds')
    this.dewpint = document.getElementById('w-dewpoint')
  }

  paint(weather) {
    console.log(weather.current)
    console.log(weather.current.humidity)
    console.log(weather.current.condition.icon)
    this.location.textContent = weather.location.name
    this.desc.textContent = weather.current.condition.text
    this.wind.textContent = `Wind Speed  : ${weather.current.wind_kph} /kph`
    this.icon.setAttribute('src', weather.current.condition.icon)
    //this.humidity.textContent = `Relative Humidity : ${weather.current.humidity}`
    this.feelslike.textContent = `Feels Like : ${weather.current.feelslike_c}`
  }
}
