import PropTypes from "prop-types"
import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class Comment extends Component {
  render() {
    //Comment loop start
    const commentdata = this.props.commentsData.map((comment, index) => (
      <div className={comment.ClassName} key={index}>
        <img src={comment.Image} alt="dtg" />
        <h4>{comment.Name}</h4>
        <p className="date">{comment.Time}</p>
        <p>{comment.Comment}</p>
        <Link to={comment.replyLink} className="reply">
          {comment.replyText}
        </Link>
      </div>
    ))
    //Comment loop END
    return (
      <>
        <div className="comments-area">
          <h3 className="comments-title">{this.props.TotalComments}</h3>
          {commentdata}
        </div>
      </>
    )
  }
}
Comment.propTypes = {
  TotalComments: PropTypes.string,
  commentsData: PropTypes.array
}

//Default Props
Comment.defaultProps = {
  TotalComments: "3 Comments",
  commentsData: [
    {
      Image: require("../../assets/img/comment_1.jpg"),
      Name: "John Smith",
      ClassName: "single-comment",
      Time: "2 days ago",
      Comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      replyLink: "/#0",
      replyText: "Reply"
    },
    {
      Image: require("../../assets/img/comment_2.jpg"),
      Name: "John Smith",
      ClassName: "single-comment mrl-50",
      Time: "2 days ago",
      Comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      replyLink: "/#0",
      replyText: "Reply"
    },
    {
      Image: require("../../assets/img/comment_3.jpg"),
      Name: "John Smith",
      ClassName: "single-comment",
      Time: "2 days ago",
      Comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      replyLink: "/#0",
      replyText: "Reply"
    }
  ]
}
