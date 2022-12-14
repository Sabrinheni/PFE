import React, { useContext, Suspense } from "react"
import { Link, useHistory } from "react-router-dom"
import DropdownItem from "reactstrap/lib/DropdownItem"
import DropdownMenu from "reactstrap/lib/DropdownMenu"
import DropdownToggle from "reactstrap/lib/DropdownToggle"
import Nav from "reactstrap/lib/Nav"
import NavItem from "reactstrap/lib/NavItem"
import UncontrolledDropdown from "reactstrap/lib/UncontrolledDropdown"
import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from "@coreui/react"

import logo from "../assets/img/brand/logo-esprit.svg"
import sygnet from "../assets/img/brand/sygnet.svg"
import { UserContext } from "../utils/UserContext"
import noimage from "../assets/img/noimage.png"

export default function DefaultHeader() {
  const history = useHistory()
  const [user, setUser] = useContext(UserContext)

  function handleProfil(e) {}

  function handleLogout(e) {
    localStorage.removeItem("token")
    setUser(null)
    history.replace("/")
  }

  return (
    <>
      <AppSidebarToggler className="d-lg-none" display="md" mobile />
      <AppNavbarBrand
        full={{ src: logo, width: 89, height: 25, alt: "CoreUI Logo" }}
        minimized={{ src: sygnet, width: 30, height: 30, alt: "CoreUI Logo" }}
      />
      <AppSidebarToggler className="d-md-down-none" display="lg" />
      <Nav className="d-md-down-none" navbar>
        <NavItem className="px-3">
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
        </NavItem>
      </Nav>
      <Nav className="ml-auto" navbar>
        <UncontrolledDropdown>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <Suspense>
                <img
                  src={user.image ? `${process.env.REACT_APP_API_URL_UPLOADS}${user.image}` : noimage}
                  className="img-avatar"
                  alt={user.username}
                />
              </Suspense>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header tag="div" className="text-center">
                <strong>Mon Compte</strong>
              </DropdownItem>
              <DropdownItem onClick={handleProfil}>
                <Link to={`/user/details/${user.email}`} style={{ textDecoration: "none" }}>
                  <i className="fa fa-user" />
                  Profile
                </Link>
              </DropdownItem>
              {/* <DropdownItem>
                <i className="fa fa-wrench" /> Settings
              </DropdownItem> */}
              <DropdownItem onClick={handleLogout}>
                <i className="fa fa-lock" /> Logout
              </DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </UncontrolledDropdown>
      </Nav>
      {/* <AppAsideToggler className="d-md-down-none" /> */}
      <AppAsideToggler className="d-lg-none" mobile />
    </>
  )
}
