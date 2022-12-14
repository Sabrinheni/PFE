import React, { Component } from "react"

export default class InformationBox extends Component {
  render() {
    const { data } = this.props
    return (
      <div className="information-container">
        <div className="information-content">
          <h4>{data.title}</h4>
          <h3>{data.subtitle}</h3>
          <p>
            {data.description.map((value, idx) => {
              return <React.Fragment key={idx}>{value}</React.Fragment>
            })}
          </p>
        </div>
      </div>
    )
  }
}
