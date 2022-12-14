import AvForm from "availity-reactstrap-validation/lib/AvForm"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
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
import { Error } from "views/components/Error"
import { Loading } from "views/components/Loading"
import { VALIDATION_ERROR } from "../../../enums/errors.enum"
import { queryApi } from "../../../utils/queryApi"
import { EditorState } from "draft-js"
import { stateToHTML } from "draft-js-export-html"
import { RichEditor } from "views/components/RichEditor"

export default function UpdateFaq() {
  const history = useHistory()
  const { id } = useParams()
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [loading, setLoading] = useState(true)
  const [faq, setFaq] = useState(null)
  const [showLoader, setShowLoader] = useState(false)
  const [error, setError] = useState(null)

  const [form, setForm] = useState({
    question: "",
    response: "",
  })

  // form for validation errors
  const [formError, setFormError] = useState({
    visible: false,
    errors: {},
    unique: [],
  })

  // get press by id passed in params
  useEffect(() => {
    async function fetchData() {
      const [res, err] = await queryApi("faq/" + id)
      if (err) setError(err)
      else {
        setFaq(res)
        let { question, response } = res
        setForm({ ...form, question, response })
        setLoading(false)
      }
    }
    fetchData()
    // eslint-disable-next-line
  }, [id])

  function handleInputChange(e) {
    let value = e.target.value
    setForm({ ...form, [e.target.name]: value })
    setFormError({ ...formError, visible: false, errors: {} })
  }

  function isChanged(response) {
    setEditorState(response)
    setForm({ ...form, response: stateToHTML(editorState.getCurrentContent()) })
  }

  async function handleSubmit(e) {
    e.persist()

    setShowLoader(true)
    const [, err] = await queryApi("faq/" + id, form, "PUT")

    if (err) {
      setShowLoader(false)
      setFormError({
        visible: true,
        errors: err.errors,
      })
    } else history.push("/faq")
  }

  function handleCancel() {
    history.goBack()
  }

  if (error) return <Error error={error} />

  // IMPORTANT !! Must verify it => wait until hook return resutls
  if (!faq) return <Loading type="grow" />

  return (
    <Row>
      <Col xs="12" xl="6">
        <Card>
          <CardHeader>
            <strong>Faq : </strong>Modifier
          </CardHeader>
          <CardBody>
            {formError.visible && (
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
                    value={form.question}
                    onChange={handleInputChange}
                    placeholder="question..."
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Contenu</Label>
                </Col>
                <Col xs="12" md="9">
                  {!loading && <RichEditor onStateChanged={isChanged} editorStateInit={form.response} />}
                </Col>
              </FormGroup>
              <CardFooter>
                <center>
                  <AvButton type="submit" size="lg" color="primary" className={"mr-5"} disabled={showLoader}>
                    {showLoader ? <i className="fa fa-spinner fa-spin"></i> : <i className="fa fa-dot-circle-o"></i>}
                    Modifier
                  </AvButton>

                  <Button type="reset" size="lg" onClick={handleCancel} color="danger">
                    <i className="fa fa-ban"></i> Annuler
                  </Button>
                </center>
              </CardFooter>
            </AvForm>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}
