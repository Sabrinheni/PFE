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
import generateSessions from "utils/generateSessions"
import { queryApi } from "utils/queryApi"
import { AvButton } from "views/components/AvButton"
import { CustomOptions } from "views/components/custom"
import ListOf from "views/components/custom/ListOf"
import { productionTypes } from "../../../../enums/entities.enum"
import { TYPE_NOT_EMPTY, TYPE_NOT_ENUM, VALIDATION_ERROR } from "../../../../enums/errors.enum"

export default function AddProduction() {
  const history = useHistory()
  const [showLoader, setShowLoader] = useState(false)
  const [form, setForm] = useState({
    type: "",
    url: "",
    members: [],
    description: "",
    inEsprit: true,
    session: "2019/2020",
  })

  const [error, setError] = useState({
    visible: false,
    errors: {},
    unique: [],
  })

  function handleInputChange(e) {
    const value = e.target.value
    setForm({ ...form, [e.target.name]: value })
    setError({ ...error, visible: false, errors: {} })
  }

  function handleCheckboxChange(e) {
    const { checked } = e.target
    if (!checked) {
      setForm({ ...form, inEsprit: false })
    } else {
      setForm({ ...form, inEsprit: true })
    }
  }

  function handleCancel() {
    history.push("/production")
  }

  async function handleSubmit(e) {
    e.persist()
    setShowLoader(true)
    const membersObjects = form.members
    const membersIds = []
    membersObjects.map(function (item) {
      item["_id"] ? membersIds.push(item["_id"]) : membersIds.push(item)
      return true
    })
    form.members = membersIds
    //Add press
    form.inEsprit = String(form.inEsprit).toLocaleLowerCase()
    const [, err] = await queryApi("production", form, "POST", false)
    if (err) {
      form.members = membersObjects
      form.inEsprit === "true" ? (form.inEsprit = true) : (form.inEsprit = false)
      setShowLoader(false)
      setError({
        visible: true,
        errors: err.errors,
      })
    } else history.push("/production")
  }

  function setTeamMembers(members) {
    setForm({ ...form, members: members })
  }

  return (
    <Card>
      <CardHeader>
        <strong>Production : </strong> Ajouter
      </CardHeader>
      <CardBody>
        {error.visible && (
          <Row className="text-danger justify-content-center text-capitalize">
            <h3>{VALIDATION_ERROR}</h3>
          </Row>
        )}
        <AvForm onValidSubmit={handleSubmit} model={form}>
          <FormGroup row>
            <Col md="3">
              <Label htmlFor="text-input">Type de production</Label>
            </Col>
            <Col xs="12" md="9">
              <AvGroup>
                <AvInput required type="select" name="type" value={form.type} onChange={handleInputChange}>
                  <option value="">Veuillez choisir le type de production</option>
                  <CustomOptions options={productionTypes} />
                </AvInput>
                <AvFeedback className="text-capitalize">
                  {error.errors?.typeisEnum ? TYPE_NOT_ENUM : TYPE_NOT_EMPTY}
                </AvFeedback>
              </AvGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="3">
              <Label htmlFor="text-input">Url</Label>
            </Col>
            <Col xs="12" md="9">
              <Input type="text" name="url" value={form.url} onChange={handleInputChange} placeholder="Url..." />
            </Col>
          </FormGroup>

          <ListOf
            autocompleteUrl={"members"}
            list={form.members}
            setList={setTeamMembers}
            listName={"Membres contribuant a la production"}
            buttonText={"Ajouter membre"}
          />

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
              <Label htmlFor="text-input">Année de production</Label>
            </Col>
            <Col xs="12" md="9">
              <AvGroup>
                <AvInput required type="select" name="session" value={form.session} onChange={handleInputChange}>
                  <option value="">Veuillez choisir l'année de production</option>
                  <CustomOptions options={generateSessions()} />
                </AvInput>
                <AvFeedback className="text-capitalize">
                  {error.errors?.sessionmatches ? TYPE_NOT_ENUM : TYPE_NOT_EMPTY}
                </AvFeedback>
              </AvGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md={3}>
              <Label htmlFor="textarea-input">Au sein d'ESPRIT</Label>
            </Col>
            <Col md={9} xs={12}>
              <Input
                type="checkbox"
                onChange={handleCheckboxChange}
                className={"form-check-input"}
                label={"à ESPRIT"}
                value={form.inEsprit}
                checked={form.inEsprit}
              />
              Décochez cette case si cette production à était faite dans un contexte hors ESPRIT
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
