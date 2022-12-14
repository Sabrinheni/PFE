import AvCheckbox from "availity-reactstrap-validation/lib/AvCheckbox"
import AvCheckboxGroup from "availity-reactstrap-validation/lib/AvCheckboxGroup"
import AvFeedback from "availity-reactstrap-validation/lib/AvFeedback"
import AvForm from "availity-reactstrap-validation/lib/AvForm"
import AvGroup from "availity-reactstrap-validation/lib/AvGroup"
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
import Label from "reactstrap/lib/Label"
import Row from "reactstrap/lib/Row"
import { AvButton } from "views/components/AvButton"
import { CustomCardImg } from "views/components/custom"
import { Error } from "views/components/Error"
import { Loading } from "views/components/Loading"
import { TYPE_NOT_EMPTY, TYPE_NOT_ENUM, VALIDATION_ERROR } from "../../../enums/errors.enum"
import * as rolesObjects from "../../../enums/rolesObjects.enum"
import { getUserFromToken } from "../../../utils/getUserFromToken"
import { queryApi } from "../../../utils/queryApi"

export default function UpdateUser() {
  const history = useHistory()
  const { id } = useParams()
  const [currentUser] = useState(getUserFromToken())
  const [user, setUser] = useState(null)
  const [showLoader, setShowLoader] = useState(false)
  const [error, setError] = useState("")
  const [myRdi, setMyRdi] = useState("")
  const [myClub, setMyClub] = useState("")

  const [previewImageUrl, setPreviewImageUrl] = useState("")

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    roles: [],
    club: "",
    rdi: "",
    image: "",
  })

  // form for validation errors
  const [formError, setFormError] = useState({
    visible: false,
    errors: {},
    unique: [],
  })

  // get user by id passed in params
  useEffect(() => {
    async function fetchData() {
      const [res, err] = await queryApi("user/" + id)
      if (err) setError(err)
      else {
        if (res.image) setPreviewImageUrl(process.env.REACT_APP_API_URL_UPLOADS + res.image)
        setUser(res)
        let { roles, rdi, club } = res
        if (!roles) roles = []
        setForm({ ...form, roles, rdi, club })
        if (res.rdi) {
          const [resRdi] = await queryApi("rdi/" + res.rdi)
          setMyRdi(resRdi)
        }
        if (res.club) {
          const [resClub] = await queryApi("club/" + res.club)
          setMyClub(resClub)
        }
        // If roles is empty (should be impossible!) from result initialize it (Else it would produce an error)
      }
    }
    fetchData()
    // eslint-disable-next-line
  }, [id])

  function handleCheckBox(e) {
    if (e.target) {
      if (e.target.checked) {
        form.roles.push(e.target.value)
      } else {
        const idx = form.roles.indexOf(e.target.value)
        form.roles.splice(idx, 1)
      }
    }
  }

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
    const [, err] = await queryApi("user/" + id, form, "PUT", true)

    if (err) {
      setShowLoader(false)
      setFormError({
        visible: true,
        errors: err.errors,
        unique: err.errors?.titleisUnique && [...this.unique, form.title.toLowerCase()],
      })
    } else history.push("/user")
  }

  function handleCancel() {
    history.goBack()
  }

  function rolesAsObjects() {
    let toRender = []
    for (let [key, value] of Object.entries(rolesObjects)) {
      toRender.push(<br key={key} />)
      if (value instanceof Object)
        for (let [rKey, role] of Object.entries(value)) {
          toRender.push(<AvCheckbox key={rKey + key} label={role.name} value={role.role} />)
        }
    }
    return toRender
  }

  if (error) return <Error error={error} />

  // IMPORTANT !! Must verify it => wait until hook return resutls
  if (!user) return <Loading type="grow" />

  return (
    <Row>
      <Col xs="12" xl="6">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i>
            <strong>Utilisateur : </strong>Image
          </CardHeader>
          <CardBody>
            <CustomCardImg isForm src={previewImageUrl} />
          </CardBody>
        </Card>
      </Col>
      <Col xs="12" xl="6">
        <Card>
          <CardHeader>
            <strong>Utilisateur : </strong>Modifier
          </CardHeader>
          <CardBody>
            {formError.visible && (
              <Row className="text-danger justify-content-center text-capitalize">
                <h3>{VALIDATION_ERROR}</h3>
              </Row>
            )}
            <AvForm onValidSubmit={handleSubmit} model={user}>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Nom d'utilisateur</Label>
                </Col>
                <Col xs="12" md="9">
                  <Label htmlFor="text-input">{user.username}</Label>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="textarea-input">Email</Label>
                </Col>
                <Col xs="12" md="9">
                  <Label htmlFor="text-input">{user.email}</Label>
                </Col>
              </FormGroup>
              {myRdi && (
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="textarea-input">Equipe RDI</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Label htmlFor="text-input">{myRdi.title}</Label>
                  </Col>
                </FormGroup>
              )}
              {myClub && (
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="textarea-input">Club</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Label htmlFor="text-input">{myClub.title}</Label>
                  </Col>
                </FormGroup>
              )}

              {!user.rdi && !user.club && currentUser.roles.includes("addRoles") && (
                <FormGroup row>
                  <Col md="3">
                    <Label htmlFor="text-input">Roles</Label>
                  </Col>
                  <Col xs="12" md="9">
                    <AvGroup>
                      <AvCheckboxGroup inline name="roles" onChange={handleCheckBox} label="Rôles utilisateur" required>
                        {rolesAsObjects()}
                      </AvCheckboxGroup>
                      <AvFeedback className="text-capitalize">
                        {formError.errors?.typeisEnum ? TYPE_NOT_ENUM : TYPE_NOT_EMPTY}
                      </AvFeedback>
                    </AvGroup>
                  </Col>
                </FormGroup>
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
