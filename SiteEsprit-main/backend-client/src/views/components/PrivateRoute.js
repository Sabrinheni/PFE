import React, { useContext } from "react"
import { Route, Redirect, useHistory } from "react-router-dom"
import { UserContext } from "../../utils/UserContext"

import routes from "../../routes"

export default function PrivateRoute({ component: Component, ...rest }) {
  const [user] = useContext(UserContext)
  const history = useHistory()
  const currentUrl = history.location.pathname

  /**
   *  Example of existing route /presse/details/:id
   *  - url : /presse/details/1234   => Returns true
   *  - url : /presse/details/       => Returns true (obviously it will be an invalid ID)
   *  - url : /presse/details//123   => Returns false
   *  - url : /presse/details//      => Returns false
   * @param {String} url to check if exisits in routes.js
   * @returns {boolean} boolean
   */
  // eslint-disable-next-line
  function routeExists(url) {
    const lastSlashIdx = url.lastIndexOf("/")
    if (lastSlashIdx > 0) url = url.substring(0, lastSlashIdx + 1)
    console.log("url passed :" + url)

    const filteredRoutes = routes.filter(r => {
      const paramIdx = r.path.indexOf(":")
      if (paramIdx > 0) r.path = r.path.substring(0, paramIdx)

      // console.log(r.path);
      return url.toLocaleLowerCase().trim() === r.path
    })
    return filteredRoutes.length > 0
  }

  // The function now returns a valid result (with params)
  // BUT when it's called params won't propogate further wheather it returns true or folse :(
  // if (!routeExists(currentUrl)) return <Redirect to="/404" />
  if (user) {
    if (currentUrl === "/") history.replace("/dashboard/" + (user.rdi ? user.rdi : ""))
    return <Route {...rest} render={props => <Component {...props} {...rest} />} />
  }

  return <Redirect to="/login" />
}
