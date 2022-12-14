import AvFeedback from "availity-reactstrap-validation/lib/AvFeedback"
import AvForm from "availity-reactstrap-validation/lib/AvForm"
import AvGroup from "availity-reactstrap-validation/lib/AvGroup"
import AvInput from "availity-reactstrap-validation/lib/AvInput"
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
import { CustomOptions } from "views/components/custom"
import { Error } from "views/components/Error"
import { Loading } from "views/components/Loading"
import { tefTefaqTypes } from "../../../enums/entities.enum"
import { FIELD_NOT_EMPTY, TYPE_NOT_ENUM, VALIDATION_ERROR } from "../../../enums/errors.enum"
import { queryApi } from "../../../utils/queryApi"

export default function UpdateTefTefaq() {
  const history = useHistory()
  const { id } = useParams()

  const [tefTefaq, setTefTefaq] = useState(null)
  const [showLoader, setShowLoader] = useState(false)
  const [error, setError] = useState(null)

  const [form, setForm] = useState({})

  // form for validation errors
  const [formError, setFormError] = useState({
    visible: false,
    errors: {},
    unique: [],
  })

  // get tefTefaq by id passed in params
  useEffect(() => {
    async function fetchData() {
      const [res, err] = await queryApi("teftefaq/" + id)
      if (err) setError(err)
      else {
        setTefTefaq(res)
        const { description, type, date, isOpen } = res
        setForm({ ...form, description, type, date, isOpen })
      }
    }
    fetchData()
    // eslint-disable-next-line
  }, [id])

  function handleInputChange(e) {
    const value = e.target.name === "image" || e.target.name === "file" ? e.target.files[0] : e.target.value
    setForm({ ...form, [e.target.name]: value })
    setFormError({ ...formError, visible: false, errors: {} })
  }

  async function handleSubmit(e) {
    e.persist()

    setShowLoader(true)
    //Update tefTefaq
    if (form.date) form.date = new Date(form.date).toISOString()
    const [, err] = await queryApi("teftefaq/" + id, form, "PUT")
    if (err) {
      form.date = new Date(form.date).toLocaleDateString("en-CA")
      setShowLoader(false)
      setFormError({
        visible: true,
        errors: err.errors,
        unique: err.errors?.titleisUnique && [...formError.unique, form.title.toLowerCase()],
      })
    } else {
      if (tefTefaq.status === true) history.push("/tefTefaq")
      else history.push("/tefTefaq/archived")
    }
  }

  function handleCancel() {
    history.goBack()
  }

  if (error) return <Error error={error} />

  // IMPORTANT !! Must verify it => wait until hook return resutls
  if (!tefTefaq) return <Loading type="grow" />

  return (
    <Row>
      <Col xs="12" xl="12">
        <Card>
          <CardHeader>
            <strong>Tef & Tefaq : </strong>Modifier
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
                      {formError.errors?.typeisEnum ? TYPE_NOT_ENUM : FIELD_NOT_EMPTY}
                    </AvFeedback>
                  </AvGroup>
                </Col>
              </FormGroup>

              <CardFooter>
                <center>
                  <AvButton type="submit" size="lg" color="primary" className={"mr-5"} disabled={showLoader}>
                    {showLoader ? <i className="fa fa-spinner fa-spin"></i> : <i className="fa fa-dot-circle-o"></i>}
                    Modifier
                  </AvButton>

                  <Button type="reset" size="lg" color="danger" onClick={handleCancel}>
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
