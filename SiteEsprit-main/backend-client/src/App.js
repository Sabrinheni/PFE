import React, { useState } from "react"
import { Route, Switch } from "react-router-dom"
import Loadable from "react-loadable"
import PrivateRoute from "./views/components/PrivateRoute"
import { UserContext } from "./utils/UserContext"
import { getUserFromToken } from "./utils/getUserFromToken"
import "./assets/scss/App.scss"

const loading = () => <div className="sk-rotating-plane" />
// Containers
const DefaultLayout = Loadable({
  loader: () => import("./layout/DefaultLayout"),
  loading,
})

// Pages
const Login = Loadable({
  loader: () => import("./views/login/Login"),
  loading,
})

const ForgotPassword = Loadable({
  loader: () => import("./views/login/ForgotPassword"),
  loading,
})

const ResetPassword = Loadable({
  loader: () => import("./views/login/ResetPassword"),
  loading,
})

const Register = Loadable({
  loader: () => import("./views/register/Register"),
  loading,
})

const Page404 = Loadable({
  loader: () => import("./views/page404/Page404"),
  loading,
})

export default function App() {
  const [user, setUser] = useState(getUserFromToken())

  return (
    <Switch>
      <UserContext.Provider value={[user, setUser]}>
        {user && (
          <>
            <PrivateRoute path="/" name="Home" component={DefaultLayout} />
            {/* <Route component={Page404}></Route> */}
          </>
        )}
        {!user && (
          <>
            <Route path="/user/reset-password/:token" name="Reset Password Page">
              <ResetPassword />
            </Route>
            <Route path="/login" name="Login Page">
              <Login />
            </Route>
            <Route path="/forgot-password" name="Frogot Password Page">
              <ForgotPassword />
            </Route>

            <Route path="/register" name="Register Page">
              <Register />
            </Route>
            <Route exact path="/" name="Not Found Page">
              <Login />
            </Route>
            <Route component={Page404}></Route>
          </>
        )}
      </UserContext.Provider>
    </Switch>
  )
}
