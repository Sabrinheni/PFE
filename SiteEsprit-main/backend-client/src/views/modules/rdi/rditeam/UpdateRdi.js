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
import CustomInput from "reactstrap/lib/CustomInput"
import FormGroup from "reactstrap/lib/FormGroup"
import FormText from "reactstrap/lib/FormText"
import Input from "reactstrap/lib/Input"
import Label from "reactstrap/lib/Label"
import Row from "reactstrap/lib/Row"
import { AvButton } from "views/components/AvButton"
import { CustomCardImg } from "views/components/custom"
import { Error } from "views/components/Error"
import { Loading } from "views/components/Loading"
import {
  FILE_ERROR,
  TITLE_LENGTH,
  TITLE_NOT_EMPTY,
  TITLE_UNIQUE,
  VALIDATION_ERROR,
} from "../../../../enums/errors.enum"
import { queryApi } from "../../../../utils/queryApi"
import ListOf from "../../../components/custom/ListOf"

export default function UpdateRdi({ returnPath = "/rdi" }) {
  const history = useHistory()
  const { id } = useParams()

  const [rdi, setRdi] = useState(null)
  const [showLoader, setShowLoader] = useState(false)
  const [error, setError] = useState(null)

  const [previewImageUrl, setPreviewImageUrl] = useState("")

  const [form, setForm] = useState({
    title: "",
    description: "",
    url: "",
    members: [],
    researchInterests: [],
    image: null,
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
      const [res, err] = await queryApi("rdi/" + id)
      if (err) setError(err)
      else {
        if (res.image) setPreviewImageUrl(process.env.REACT_APP_API_URL_UPLOADS + res.image)
        setRdi(res)
        let { title, description, url, members, researchInterests } = res
        // If members is empty from result initialize it (Else it would produce an error)
        if (!members) members = []
        if (!researchInterests) researchInterests = []
        setForm({ ...form, title, description, url, members, researchInterests })
      }
    }
    fetchData()
    // eslint-disable-next-line
  }, [id])

  function handleInputChange(e) {
    let value = e.target.value
    if (e.target.name === "image") {
      value = e.target.files[0]
      setPreviewImageUrl(URL.createObjectURL(value))
    }
    setForm({ ...form, [e.target.name]: value })
    setFormError({ ...formError, visible: false, errors: {} })
  }

  async function handleSubmit(e) {
    e.persist()
    setShowLoader(true)
    //Update press
    const membersObjects = form.members
    const membersIds = []
    membersObjects.map(function (item) {
      item["_id"] ? membersIds.push(item["_id"]) : membersIds.push(item)
      return true
    })
    form.members = membersIds
    const [, err] = await queryApi("rdi/" + id, form, "PUT", true)
    if (err) {
      form.members = membersObjects
      setShowLoader(false)
      setFormError({
        visible: true,
        errors: err.errors,
        unique: err.errors?.titleisUnique && [...this.unique, form.title.toLowerCase()],
      })
    } else {
      returnPath === "/rdi" ? history.push(returnPath) : history.go(0)
    }
  }

  function handleCancel() {
    history.goBack()
  }

  function checkError() {
    if (formError.errors?.titlelength) return TITLE_LENGTH
    return TITLE_NOT_EMPTY
  }

  const checkUniqueness = formError.errors?.titleisUnique && formError.unique.includes(form.title.toLowerCase())
  function nameIsUnique(value) {
    // if (!value) return true // required replaces it !
    return (!checkUniqueness && formError.errors?.titlelength) ?? true
  }

  function setMembers(members) {
    setForm({ ...form, members: members })
  }

  function setResearchInterests(researchInterests) {
    console.log("researchInterests")
    console.log(researchInterests)
    setForm({ ...form, researchInterests: researchInterests })
  }

  if (error) return <Error error={error} />

  // IMPORTANT !! Must verify it => wait until hook return resutls
  if (!rdi) return <Loading type="grow" />

  return (
    <Row>
      <Col xs="12" xl="6">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i>
            <strong>Rdi : </strong>Image
          </CardHeader>
          <CardBody>
            <CustomCardImg isForm src={previewImageUrl} />
          </CardBody>
        </Card>
      </Col>
      <Col xs="12" xl="6">
        <Card>
          <CardHeader>
            <strong>Rdi : </strong>Modifier
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
                      {checkUniqueness && TITLE_UNIQUE} {formError.errors?.titlelength && checkError()}
                    </AvFeedback>
                  </AvGroup>
                  <FormText color="muted">Titre de rdi à modifier</FormText>
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
                  <Label htmlFor="text-input">Url</Label>
                </Col>
                <Col xs="12" md="9">
                  <AvInput
                    type="text"
                    name="url"
                    value={form?.url ?? ""}
                    onChange={handleInputChange}
                    placeholder="Url..."
                  />
                </Col>
              </FormGroup>

              {form?.members && (
                <ListOf
                  list={form.members}
                  setList={setMembers}
                  listName={"Membres de l'équipe"}
                  buttonText={"Ajouter un membre"}
                  autocompleteUrl={"members/"}
                />
              )}

              {form?.researchInterests && (
                <ListOf
                  list={form.researchInterests}
                  setList={setResearchInterests}
                  listName={"Domaines de recherche"}
                  buttonText={"Ajouter un domaine de recherche"}
                  autocompleteUrl={""}
                />
              )}

              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Image</Label>
                </Col>
                <Col xs="12" md="9">
                  <CustomInput
                    id="image"
                    name="image"
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleInputChange}
                  />

                  {formError?.errors.file && (
                    <Row className="text-capitalize text-danger">
                      <p style={{ marginLeft: "1.1em" }}> {FILE_ERROR + formError.errors.file}</p>
                    </Row>
                  )}
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
