class Github {
  constructor() {
    this.client_id = '33568943'
    this.client_secret = 'MDQ6VXNlcjMzNTY4OTQz'
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    )

    const profile = await profileResponse.json()

    return {
      profile,
    }
  }
}
