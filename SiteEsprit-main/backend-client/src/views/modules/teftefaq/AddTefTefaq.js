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
import FormGroup from "reactstrap/lib/FormGroup"
import Input from "reactstrap/lib/Input"
import Label from "reactstrap/lib/Label"
import Row from "reactstrap/lib/Row"
import { AvButton } from "views/components/AvButton"
import { CustomOptions } from "views/components/custom"
import { tefTefaqTypes } from "../../../enums/entities.enum"
import { FIELD_NOT_EMPTY, TYPE_NOT_ENUM, VALIDATION_ERROR } from "../../../enums/errors.enum"
import { queryApi } from "../../../utils/queryApi"

export default function AddTefTefaq() {
  const history = useHistory()

  const [showLoader, setShowLoader] = useState(false)
  const [form, setForm] = useState({
    description: "",
    type: "",
    date: "",
  })

  const [error, setError] = useState({
    visible: false,
    errors: {},
    unique: [],
  })

  function handleInputChange(e) {
    const value = e.target.name === "image" || e.target.name === "file" ? e.target.files[0] : e.target.value
    setForm({ ...form, [e.target.name]: value })
    setError({ ...error, visible: false, errors: {} })
  }

  function handleCancel() {
    history.push("/tefTefaq")
  }

  async function handleSubmit(e) {
    e.persist()

    setShowLoader(true)
    //Add tefTefaq
    if (form.date) form.date = new Date(form.date).toISOString()
    const [, err] = await queryApi("teftefaq", form, "POST")
    if (err) {
      form.date = new Date(form.date).toLocaleDateString("en-CA")
      setShowLoader(false)
      setError({
        visible: true,
        errors: err.errors,
        unique: err.errors?.titleisUnique && [...error.unique, form.title.toLowerCase()],
      })
    } else history.push("/tefTefaq")
  }

  return (
    <Card>
      <CardHeader>
        <strong>Tef & Tefaq : </strong> Ajouter
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
              <Label htmlFor="textarea-input">Inscriptions:</Label>
            </Col>
            <Col xs="12" md="9">
              <AvInput required type="select" name="isOpen" value={form.isOpen} onChange={handleInputChange}>
                <option value="">Veuillez choisir</option>
                <option value={true}>ouvertes</option>
                <option value={false}>fermées</option>
              </AvInput>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="3">
              <Label htmlFor="textarea-input">Date du test</Label>
            </Col>
            <Col xs="12" md="9">
              <Input
                type="date"
                name="date"
                value={new Date(form.date).toLocaleDateString("en-CA")}
                onChange={handleInputChange}
                placeholder="Date du test"
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="3">
              <Label htmlFor="text-input">Type</Label>
            </Col>
            <Col xs="12" md="9">
              <AvGroup>
                <AvInput required type="select" name="type" value={form.type} onChange={handleInputChange}>
                  <option value="">Veuillez choisir le type</option>
                  <CustomOptions options={tefTefaqTypes} />
                </AvInput>
                <AvFeedback className="text-capitalize">
                  {error.errors?.typeisEnum ? TYPE_NOT_ENUM : FIELD_NOT_EMPTY}
                </AvFeedback>
              </AvGroup>
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
