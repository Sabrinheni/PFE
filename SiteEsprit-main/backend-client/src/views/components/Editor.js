import { ContentState, EditorState } from "draft-js"
import htmlToDraft from "html-to-draftjs"
import React, { Component } from "react"
import { Editor } from "react-draft-wysiwyg"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

export default class RichEditor extends Component {
  constructor(props) {
    super(props)

    const contentBlock = htmlToDraft(this.props.editorStateInit)
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
      const editorState = EditorState.createWithContent(contentState)
      this.state = {
        editorState,
      }
    }
  }

  onEditorStateChange = editorState => {
    this.props.onStateChanged(editorState)
    this.setState({
      editorState,
    })
  }

  render() {
    const { editorState } = this.state
    return (
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="rich-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
      </div>
    )
  }
}
