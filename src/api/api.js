class ApiService {
  async makeRequest(url = '', method, body) {
    return await fetch('http://localhost:8080' + url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(data => data.json())
  }

  getUser(body) {
    return this.makeRequest('/login', 'POST', body)
  }

  setUser(body) {
    return this.makeRequest('/register', 'POST', body)
  }
}


export const apiService = new ApiService()