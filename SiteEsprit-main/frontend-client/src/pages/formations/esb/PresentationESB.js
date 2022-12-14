import PropTypes from "prop-types"
import React, { Component } from "react"
import NavBar from "components/layout/NavBar"

export default class PresentationESB extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="bread-cumbs-area bread-cumbs-bg">
          <div className="diplay-table">
            <div className="display-table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <h1>Présentation ESB</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

//Props Types
PresentationESB.propTypes = {
  Title: PropTypes.string,
  Content: PropTypes.string,
}
