import PropTypes from "prop-types"
import React, { Component } from "react"

import "../../assets/css/menu.min.css"
import LinkDuo from "components/utils/LinkDuo"
import HeaderBar from "./header"
import NavMenu from "components/layout/NavBarMenu"

export default class NavBar extends Component {
  render() {
    const breadcrumb = this.props.breadcrumb

    return (
      <>
        <div>
          {/* Start Top Header */}
          <div className="header-fill">
            <HeaderBar breadcrumb={breadcrumb} />
          </div>

          <div className="fade-header"></div>
          <div className="top-header">
            <div className="container">
              <div className="row white-line top-header-hide-mobile">
                <div className="col-md-7 col-lg-7">
                  <div className="address-bar">
                    <ul className="list-inline">
                      <li>
                        <LinkDuo to={this.props.mailLink}>
                          <i className="icofont-email" /> {this.props.mail}
                        </LinkDuo>
                      </li>
                      <li>
                        <LinkDuo to={this.props.numberLink}>
                          <i className="icofont-ui-call" /> {this.props.Number}
                        </LinkDuo>
                      </li>
                      <li>
                        <LinkDuo to={"/contact"}>
                          <i className="icofont-live-support" /> Contactez-nous
                        </LinkDuo>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-5 col-md-5">
                  <div className="social-icons">
                    <ul className="list-inline">
                      <li>
                        <LinkDuo to={this.props.facebookLink} rel="noopener noreferrer" target="_blank">
                          <i className="icofont-facebook" />
                        </LinkDuo>
                      </li>
                      <li>
                        <LinkDuo to={this.props.instagramLink} rel="noopener noreferrer" target="_blank">
                          <i className="icofont-instagram" />
                        </LinkDuo>
                      </li>
                      <li>
                        <LinkDuo to={this.props.twitterLink} rel="noopener noreferrer" target="_blank">
                          <i className="icofont-twitter" />
                        </LinkDuo>
                      </li>
                      <li>
                        <LinkDuo to={this.props.youtubeLink} rel="noopener noreferrer" target="_blank">
                          <i className="icofont-youtube" />
                        </LinkDuo>
                      </li>
                      <li>
                        <LinkDuo to={this.props.linkedinLink} rel="noopener noreferrer" target="_blank">
                          <i className="icofont-linkedin" />
                        </LinkDuo>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="row white-line">
                <div className="col-md-12 col-lg-12">
                  <div className="address-bar">
                    <ul className="list-inline header-admission-start" style={{ textAlign: "center", color: "white" }}>
                      <li>
                        OUVERTURE DES INSCRIPTIONS AUX CONCOURS D'ADMISSION
                        <LinkDuo style={{ color: "white" }} to={"/admission/esprit-ingenieur"}>
                          <b>&nbsp;INSCRIVEZ VOUS ICI</b>
                        </LinkDuo>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          {/* End Top Header */}
          <NavMenu></NavMenu>
        </div>
      </>
    )
  }
}
//Props Types
NavBar.propTypes = {
  mailLink: PropTypes.string,
  mail: PropTypes.string,
  numberLink: PropTypes.string,
  Number: PropTypes.string,
  facebookLink: PropTypes.string,
  twitterLink: PropTypes.string,
  youtubeLink: PropTypes.string,
  linkedinLink: PropTypes.string,
  MainLogo: PropTypes.string,
  Logo2: PropTypes.string,
}

//Default Props
NavBar.defaultProps = {
  MainLogo: require("../../assets/img/logo-esprit.png"),
  Logo2: require("../../assets/img/logo2.png"),
  mailLink: "mailto:contact@esprit.tn",
  mail: "contact@esprit.tn",
  numberLink: "callto:0021670250000",
  Number: "00216 70 250 000",
  facebookLink: "https://www.facebook.com/esprit.tn/?fref=ts",
  twitterLink: "https://twitter.com/Esprit_News?lang=fr",
  instagramLink: "https://www.instagram.com/esprit_ingenieur/",
  youtubeLink: "https://www.youtube.com/channel/UCJ5wuQ9AQYtpf9Arieu3iXA",
  linkedinLink: "https://www.linkedin.com/company/esprit_2/",
}
