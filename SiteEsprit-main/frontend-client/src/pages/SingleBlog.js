import React, { Component } from "react"
import Single from "components/blog/Single"

export default class SingleBlog extends Component {
  render() {
    return (
      <>
        <Single {...this.props} />
      </>
    )
  }
}
