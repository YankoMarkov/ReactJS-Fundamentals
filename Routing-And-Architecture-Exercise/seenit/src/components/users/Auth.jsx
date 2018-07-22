class Auth {
  static saveUser(user) {
    window.sessionStorage.setItem('user', JSON.stringify(user))
  }
  static getUser() {
    const userJSON = window.sessionStorage.getItem('user')
    if (userJSON) {
      return JSON.parse(userJSON)
    }
    return {}
  }
  static removeUser() {
    window.sessionStorage.removeItem('user')
  }
  static authenticateUser(token) {
    window.sessionStorage.setItem('authtoken', token)
  }
  static isUserAuthenticated() {
    return window.sessionStorage.getItem('authtoken') !== null
  }
  static deauthenticateUser() {
    window.sessionStorage.removeItem('authtoken')
  }
  static getToken() {
    return window.sessionStorage.getItem('authtoken')
  }
}

export default Auth
