import React, { Component } from "react"
export default class DownloadButton extends Component {
  render() {
    const { data } = this.props

    return (
      <>
        <a href={data.link} target="_blank" rel="noopener noreferrer" className="download-button">
          <span className="hide-hover">{data.text}</span>
          <span className="symbol">
            <img src={data.src} alt="download" title="download"></img>
          </span>
        </a>
      </>
    )
  }
}
