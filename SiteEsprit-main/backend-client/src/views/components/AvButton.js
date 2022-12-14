import React, { Component } from "react"
import Button from "reactstrap/lib/Button"
import PropTypes from "prop-types"

/**
 * Button from reactsrap that disable itself if there is an error in the parent form
 * @example use it only inside an AvForm and it must be the only submit button
 * <AvButton type="submit" color="primary"> Submit </AvButton>
 */
export class AvButton extends Component {
  static contextTypes = {
    FormCtrl: PropTypes.object.isRequired,
  }

  render() {
    if (this.props?.disabled === true) return <Button {...this.props} disabled />
    return <Button {...this.props} disabled={this.context.FormCtrl.isTouched() && this.context.FormCtrl.hasError()} />
  }
}
