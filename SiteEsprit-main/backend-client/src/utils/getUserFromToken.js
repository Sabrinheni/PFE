import JwtDecode from "jwt-decode"

/**
 * @param {String} token if passed it will create/reset the token in local storage
 * Returns user from stored token ONLY if it's valid and not expired
 */
export function getUserFromToken(token = null) {
  let user = null
  if (token) localStorage.setItem("token", token)
  if (localStorage.token) {
    try {
      const decodeUser = JwtDecode(localStorage.token)
      // Check if token is expired
      const currentTime = Date.now() / 1000
      if (decodeUser.exp < currentTime) {
        // Logout user
        localStorage.removeItem("token")
      } else user = decodeUser
    } catch (error) {
      localStorage.removeItem("token")
    }
  }

  return user
}
