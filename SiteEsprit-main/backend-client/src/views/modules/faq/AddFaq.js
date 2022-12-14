import AvForm from "availity-reactstrap-validation/lib/AvForm"
import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import Button from "reactstrap/lib/Button"
import Card from "reactstrap/lib/Card"
import CardBody from "reactstrap/lib/CardBody"
import CardFooter from "reactstrap/lib/CardFooter"
import CardHeader from "reactstrap/lib/CardHeader"
import Col from "reactstrap/lib/Col"
import FormGroup from "reactstrap/lib/FormGroup"
import Input from "reactstrap/lib/Input"
import Label from "reactstrap/lib/Label"
import Row from "reactstrap/lib/Row"
import { AvButton } from "views/components/AvButton"
import { VALIDATION_ERROR } from "../../../enums/errors.enum"
import { queryApi } from "../../../utils/queryApi"
import { stateToHTML } from "draft-js-export-html"
import { EditorState } from "draft-js"
import { RichEditor } from "views/components/RichEditor"

export default function AddFaq() {
  const history = useHistory()
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const [showLoader, setShowLoader] = useState(false)
  const [form, setForm] = useState({
    question: "",
    response: "",
  })

  const [error, setError] = useState({
    visible: false,
    errors: {},
    unique: [],
  })

  function handleInputChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError({ ...error, visible: false, errors: {} })
  }

  function handleCancel() {
    history.push("/faq")
  }

  function isChanged(response) {
    setEditorState(response)
    setForm({ ...form, response: stateToHTML(editorState.getCurrentContent()) })
  }

  async function handleSubmit(e) {
    e.persist()

    setShowLoader(true)
    const [, err] = await queryApi("faq", form, "POST")
    if (err) {
      setShowLoader(false)
      setError({
        visible: true,
        errors: err.errors,
      })
    } else history.push("/faq")
  }

  return (
    <Card>
      <CardHeader>
        <strong>Faq : </strong> Ajouter
      </CardHeader>
      <CardBody>
        {error.visible && (
          <Row className="text-danger justify-content-center text-capitalize">
            <h3>{VALIDATION_ERROR}</h3>
          </Row>
        )}
        <AvForm onValidSubmit={handleSubmit}>
          <FormGroup row>
            <Col md="3">
              <Label htmlFor="textarea-input">Question</Label>
            </Col>
            <Col xs="12" md="9">
              <Input
                type="textarea"
                required
                name="question"
                value={form.question || ""}
                onChange={handleInputChange}
                placeholder="Question..."
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col md="3">
              <Label htmlFor="text-input">Contenu</Label>
            </Col>
            <Col xs="12" md="9">
              <RichEditor onStateChanged={isChanged} />
            </Col>
          </FormGroup>

          <CardFooter>
            <center>
              <AvButton type="submit" size="lg" color="primary" className={"mr-5"} disabled={showLoader}>
                {showLoader ? <i className="fa fa-spinner fa-spin"></i> : <i className="fa fa-dot-circle-o"></i>}
                Ajouter
              </AvButton>

              <Button type="reset" size="lg" color="danger" onClick={handleCancel}>
                <i className="fa fa-ban"></i> Annuler
              </Button>
            </center>
          </CardFooter>
        </AvForm>
      </CardBody>
    </Card>
  )
}
