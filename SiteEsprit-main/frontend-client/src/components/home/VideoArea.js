import PropTypes from "prop-types"
import React, { Component } from "react"
import ModalVideo from "react-modal-video"
import "react-modal-video/css/modal-video.min.css"

export default class VideoArea extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
    this.openModal = this.openModal.bind(this)
  }
  openModal() {
    this.setState({ isOpen: true })
  }

  render() {
    return (
      <>
        <section className="video-area video-bg-bal">
          <div className="diplay-table">
            <div className="display-table-cell">
              <div className="video-inner-content">
                <div className="button__holder">
                  <ModalVideo
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId="wHMWYD-Yhrs"
                    onClose={() =>
                      this.setState({
                        isOpen: false,
                      })
                    }
                  />
                  <span onClick={this.openModal} className="plus popup-youtube"></span>
                </div>
                <h1>{this.props.Title}</h1>
                <p>{this.props.Content}</p>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
VideoArea.propTypes = {
  Title: PropTypes.string,
  Content: PropTypes.string,
}
VideoArea.defaultProps = {
  Title: "Regardez Notre Video",
  Content: "et découvrez l'ESPRIT de notre école et ses qualités.",
}
