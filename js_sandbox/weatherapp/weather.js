class Weather {
  constructor(city, state) {
    this.apiKey = '0d5b42192e794910b10174305220808'
    this.city = city
    this.state = state
  }

  async getWeather() {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}`
    )

    const responseData = await response.json()

    return responseData.current
  }

  changeLocation(city, state) {
    this.city = city
    this.state = state
  }
}
