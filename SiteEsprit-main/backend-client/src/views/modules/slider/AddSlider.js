import AvFeedback from "availity-reactstrap-validation/lib/AvFeedback"
import AvForm from "availity-reactstrap-validation/lib/AvForm"
import AvGroup from "availity-reactstrap-validation/lib/AvGroup"
import AvInput from "availity-reactstrap-validation/lib/AvInput"
import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import Button from "reactstrap/lib/Button"
import Card from "reactstrap/lib/Card"
import CardBody from "reactstrap/lib/CardBody"
import CardFooter from "reactstrap/lib/CardFooter"
import CardHeader from "reactstrap/lib/CardHeader"
import Col from "reactstrap/lib/Col"
import CustomInput from "reactstrap/lib/CustomInput"
import FormGroup from "reactstrap/lib/FormGroup"
import FormText from "reactstrap/lib/FormText"
import Input from "reactstrap/lib/Input"
import Label from "reactstrap/lib/Label"
import Row from "reactstrap/lib/Row"
import { AvButton } from "views/components/AvButton"
import {
  BTN_NOT_EMPTY,
  FILE_ERROR,
  IMAGE_NOT_EMPTY,
  SUBTITLE_NOT_EMPTY,
  TITLE_LENGTH,
  TITLE_NOT_EMPTY,
  TITLE_UNIQUE,
  VALIDATION_ERROR,
} from "../../../enums/errors.enum"
import { queryApi } from "../../../utils/queryApi"

export default function AddSlider() {
  const history = useHistory()

  const [showLoader, setShowLoader] = useState(false)
  const [form, setForm] = useState({
    title: "",
    description: "",
    titleDescription: "",
    btnName: "",
    url: "",
    image: null,
  })

  const [error, setError] = useState({
    visible: false,
    errors: {},
    unique: [],
  })

  function handleInputChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleFileChange(e) {
    form.image = e.target.files[0]
    setForm(form)
  }

  function handleCancel() {
    history.push("/slider")
  }

  async function handleSubmit(e) {
    e.persist()

    setShowLoader(true)
    //Add slider
    const [, err] = await queryApi("slider", form, "POST", true)
    if (err) {
      setShowLoader(false)
      setError({
        visible: true,
        errors: err.errors,
        unique: err.errors?.titleisUnique && [...error.unique, form.title.toLowerCase()],
      })
    } else history.push("/slider")
  }

  function checkError() {
    if (error.errors?.titlelength) return TITLE_LENGTH
    return TITLE_NOT_EMPTY
  }

  /*
   * Call this function in validate : {{here}}
   * returns false if value is valid
   * else return true when field MUST be validated
   */
  const checkUniqueness = error.errors?.titleisUnique && error.unique.includes(form.title.toLowerCase())
  function nameIsUnique(value) {
    // if (!value) return true // required replaces it !
    return (!checkUniqueness && error.errors?.titlelength) ?? true
  }

  return (
    <Card>
      <CardHeader>
        <strong>Slider : </strong> Ajouter
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
              <Label htmlFor="text-input">Titre</Label>
            </Col>
            <Col xs="12" md="9">
              <AvGroup>
                <AvInput
                  required
                  type="text"
                  name="title"
                  value={form.title}
                  validate={{ nameIsUnique }}
                  onChange={handleInputChange}
                  placeholder="Titre..."
                />
                <AvFeedback className="text-capitalize">
                  {checkUniqueness && TITLE_UNIQUE} {error.errors?.titlelength && checkError()}
                </AvFeedback>
              </AvGroup>

              <FormText color="muted">Titre du slider à ajouter</FormText>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="3">
              <Label htmlFor="text-input">Url</Label>
            </Col>
            <Col xs="12" md="9">
              <AvGroup>
                <AvInput type="text" name="url" value={form.url} onChange={handleInputChange} placeholder="Titre..." />
                <AvFeedback className="text-capitalize">URL Ne doit pas être vide</AvFeedback>
              </AvGroup>

              <FormText color="muted">URL de l'article à ajouter</FormText>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="3">
              <Label htmlFor="textarea-input">Sous titre</Label>
            </Col>
            <Col xs="12" md="9">
              <AvGroup>
                <AvInput
                  type="textarea"
                  name="titleDescription"
                  value={form.titleDescription}
                  onChange={handleInputChange}
                  placeholder="Sous titre..."
                />
                <AvFeedback className="text-capitalize">{SUBTITLE_NOT_EMPTY}</AvFeedback>
              </AvGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="3">
              <Label htmlFor="textarea-input">Description</Label>
            </Col>
            <Col xs="12" md="9">
              <Input
                type="textarea"
                name="description"
                value={form.description}
                onChange={handleInputChange}
                placeholder="Description..."
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="3">
              <Label htmlFor="textarea-input">Texte du bouton</Label>
            </Col>
            <Col xs="12" md="9">
              <AvGroup>
                <AvInput
                  type="textarea"
                  name="btnName"
                  value={form.btnName}
                  onChange={handleInputChange}
                  placeholder="Texte du bouton..."
                />
                <AvFeedback className="text-capitalize">{BTN_NOT_EMPTY}</AvFeedback>
              </AvGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="3">
              <Label htmlFor="text-input">Image</Label>
            </Col>
            <Col xs="12" md="9">
              <CustomInput
                id="file0"
                name="file0"
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleFileChange}
              />
              {error.errors?.file && (
                <Row className="text-capitalize text-danger">
                  <p style={{ marginLeft: "1.1em" }}>{FILE_ERROR + error.errors.file}</p>
                </Row>
              )}
              {error.errors?.imageDefined && (
                <Row className="text-capitalize text-danger">
                  <p style={{ marginLeft: "1.1em" }}>{IMAGE_NOT_EMPTY}</p>
                </Row>
              )}
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
