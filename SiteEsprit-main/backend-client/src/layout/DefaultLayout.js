import {
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from "@coreui/react"
import React, { Component, Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import Container from "reactstrap/lib/Container"
// routes config
import routes from "../routes"
import { Loading } from "../views/components/Loading"
// sidebar nav config
import navigation from "../_nav"

// const DefaultAside = React.lazy(() => import("./DefaultAside"))
const DefaultFooter = React.lazy(() => import("./DefaultFooter"))
const DefaultHeader = React.lazy(() => import("./DefaultHeader"))
const Page404 = React.lazy(() => import("../views/page404/Page404"))

class DefaultLayout extends Component {
  loading = () => <div className="sk-rotating-plane" />

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              <AppSidebarNav navConfig={navigation} {...this.props} />
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} />
            <Container fluid>
              <Suspense fallback={<Loading type="grow" color="secondary" />}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => <route.component {...props} />}
                      />
                    ) : null
                  })}
                  <Route component={Page404}></Route>
                </Switch>
              </Suspense>
            </Container>
          </main>
          {/* <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside> </DefaultAside>
            </Suspense>
          </AppAside> */}
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter {...this.props} />
          </Suspense>
        </AppFooter>
      </div>
    )
  }
}

export default DefaultLayout
