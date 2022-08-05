class Github {
  constructor() {
    this.client_id = '33448943'
    this.client_secret = '12391273182739712387129'
    this.repoMax = 5
    this.repoSort = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    )

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repoMax}&sort=${this.repoSort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    )

    const profile = await profileResponse.json()
    const repos = await reposResponse.json()

    console.log(profile)
    console.log(repos)
    return {
      profile,
      repos,
    }
  }
}
