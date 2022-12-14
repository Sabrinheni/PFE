import AvCheckbox from "availity-reactstrap-validation/lib/AvCheckbox"
import AvCheckboxGroup from "availity-reactstrap-validation/lib/AvCheckboxGroup"
import AvFeedback from "availity-reactstrap-validation/lib/AvFeedback"
import AvForm from "availity-reactstrap-validation/lib/AvForm"
import AvGroup from "availity-reactstrap-validation/lib/AvGroup"
import AvInput from "availity-reactstrap-validation/lib/AvInput"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import uuid from "react-uuid"
import Button from "reactstrap/lib/Button"
import Card from "reactstrap/lib/Card"
import CardBody from "reactstrap/lib/CardBody"
import CardFooter from "reactstrap/lib/CardFooter"
import CardHeader from "reactstrap/lib/CardHeader"
import Col from "reactstrap/lib/Col"
import CustomInput from "reactstrap/lib/CustomInput"
import FormGroup from "reactstrap/lib/FormGroup"
import FormText from "reactstrap/lib/FormText"
import Label from "reactstrap/lib/Label"
import Row from "reactstrap/lib/Row"
import { AvButton } from "views/components/AvButton"
import { CustomModal, CustomOptions } from "views/components/custom"
import {
  FIELD_NOT_EMPTY,
  TITLE_LENGTH,
  TITLE_NOT_EMPTY,
  TITLE_UNIQUE,
  TYPE_NOT_EMPTY,
  TYPE_NOT_ENUM,
  VALIDATION_ERROR,
} from "../../../enums/errors.enum"
import * as rolesObjects from "../../../enums/rolesObjects.enum"
import { getUserFromToken } from "../../../utils/getUserFromToken"
import { queryApi } from "../../../utils/queryApi"

export default function AddUser() {
  const history = useHistory()
  const [currentUser] = useState(getUserFromToken())
  const [modal, setModal] = useState({ isOpen: false, title: "", body: "", confirmBtnTxt: "" })
  const [showLoader, setShowLoader] = useState(false)
  const [type, setType] = useState({ type: "NORMAL", renderRoles: true })
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    roles: [],
    club: "",
    rdi: "",
    prepa: "",
    kindy: "",
    image: "",
  })

  const [error, setError] = useState({
    visible: false,
    errors: {},
    unique: [],
  })

  const [clubs, setClubs] = useState(null)

  const userTypes = { normal: "NORMAL", rdi: "RDI", club: "CLUB", prepa: "PREPA", kindy: "KINDY" }

  useEffect(() => {
    async function fetchClubs() {
      const [res] = await queryApi("clubs")
      setClubs(res)
    }
    fetchClubs()
  }, [])

  function handleInputChange(e) {
    const value = e.target.name === "image" ? e.target.files[0] : e.target.value
    setForm({ ...form, [e.target.name]: value })
    setError({ ...error, visible: false, errors: {} })
  }

  function handleTypeChange(e) {
    switch (e.target.value) {
      case "normal":
        setType({ type: "normal", renderRoles: true })
        setForm({ ...form, club: "", rdi: "", prepa: "", kindy: "" })
        break
      case "rdi":
        setForm({
          ...form,
          rdi: "related",
          prepa: "",
          kindy: "",
          club: "",
          roles: [
            "createEvent",
            "updateEvent",
            "deleteEvent",
            "handleArchivedEvent",
            "createSlider",
            "updateSlider",
            "deleteSlider",
            "handleArchivedSlider",
            "createMember",
            "updateMember",
            "deleteMember",
            "handleArchivedMember",
            "createProduction",
            "updateProduction",
            "deleteProduction",
            "handleArchivedProduction",
            "updateRdi",
            "createRdi",
            "deleteRdi",
          ],
        })
        setType({ type: "rdi", renderRoles: false })
        break
      case "club":
        setForm({ ...form, rdi: "" })
        setForm({ ...form, prepa: "" })
        setForm({ ...form, roles: ["createEvent", "updateEvent", "handleArchivedEvent"] })
        setType({ type: "club", renderRoles: false })
        break
      case "prepa":
        setForm({
          ...form,
          rdi: "",
          prepa: "related",
          club: "",
          roles: [
            "createSlider",
            "updateSlider",
            "deleteSlider",
            "handleArchivedSlider",
            "createEvent",
            "updateEvent",
            "deleteEvent",
            "handleArchivedEvent",
          ],
        })
        setType({ type: "prepa", renderRoles: false })
        break
      case "kindy":
        setForm({
          ...form,
          rdi: "",
          kindy: "related",
          club: "",
          prepa: "",
          roles: [
            "createSlider",
            "updateSlider",
            "deleteSlider",
            "handleArchivedSlider",
            "createEvent",
            "updateEvent",
            "deleteEvent",
            "handleArchivedEvent",
          ],
        })
        setType({ type: "kindy", renderRoles: false })
        break
      default:
        break
    }
  }

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

  function handleCancel() {
    history.push("/user")
  }

  async function handleConfirm(e) {
    const onConfirm = async e => {
      handleSubmit(e)
    }

    // show delete confirmation modal
    setModal({
      isOpen: true,
      title: "Ajout Utilisateur",
      body: `Veuillez s'assurer des données avant de confirmer! L'email et nom utilisateur <b style="color:red">ne seront pas modifiable`,
      confirmBtnTxt: "Ajouter",
      onConfirm,
    })
  }

  function handleAbortModal() {
    setModal({ isOpen: false })
  }

  async function handleSubmit(e) {
    e.persist()

    setShowLoader(true)
    //Add user
    const [, err] = await queryApi("user", form, "POST", true)
    if (err) {
      setShowLoader(false)
      setError({
        visible: true,
        errors: err.errors,
        unique: err.errors?.titleisUnique && [...error.unique, form.title.toLowerCase()],
      })
    } else history.push("/user")
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

  function rolesAsObjects() {
    let toRender = []
    if (type.renderRoles) {
      for (let [key, value] of Object.entries(rolesObjects)) {
        toRender.push(<br key={key} />)
        if (value instanceof Object)
          for (let [rKey, role] of Object.entries(value)) {
            toRender.push(<AvCheckbox key={rKey + key} label={role.name} value={role.role} />)
          }
      }
    } else {
      toRender.push(<p key={uuid()}>Ajout / Modification des événements relatifs a son entité</p>)
    }
    return toRender
  }

  return (
    <>
      <CustomModal {...modal} onAbort={handleAbortModal} />
      <Card>
        <CardHeader>
          <strong>Utilisateur : </strong> Ajouter
        </CardHeader>
        <CardBody>
          {error.visible && (
            <Row className="text-danger justify-content-center text-capitalize">
              <h3>{VALIDATION_ERROR}</h3>
            </Row>
          )}
          <AvForm onValidSubmit={handleConfirm}>
            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Nom d'utilisateur</Label>
              </Col>
              <Col xs="12" md="9">
                <AvGroup>
                  <AvInput
                    required
                    type="text"
                    name="username"
                    value={form.username}
                    validate={{ nameIsUnique }}
                    onChange={handleInputChange}
                    placeholder="Username..."
                  />
                  <AvFeedback className="text-capitalize">
                    {checkUniqueness && TITLE_UNIQUE} {error.errors?.titlelength && checkError()}
                  </AvFeedback>
                </AvGroup>

                <FormText color="muted">Nom d'utilisateur à ajouter</FormText>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="3">
                <Label htmlFor="textarea-input">Email</Label>
              </Col>
              <Col xs="12" md="9">
                <AvGroup>
                  <AvInput
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder="Email..."
                  />
                  <AvFeedback className="text-capitalize">{FIELD_NOT_EMPTY}</AvFeedback>
                </AvGroup>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="3">
                <Label htmlFor="textarea-input">Mot de passe</Label>
              </Col>
              <Col xs="12" md="9">
                <AvGroup>
                  <AvInput
                    required
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleInputChange}
                    placeholder="Mot de passe..."
                  />
                  <AvFeedback className="text-capitalize">{FIELD_NOT_EMPTY}</AvFeedback>
                </AvGroup>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="3">
                <Label htmlFor="text-input">Type</Label>
              </Col>
              <Col xs="12" md="9">
                <AvGroup>
                  <AvInput required type="select" name="type" value={type.type} onChange={handleTypeChange}>
                    <CustomOptions options={userTypes} />
                  </AvInput>
                </AvGroup>
              </Col>
            </FormGroup>

            {type.type === "club" && (
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Clubs</Label>
                </Col>
                <Col xs="12" md="9">
                  <AvGroup>
                    <AvInput type="select" name="club" onChange={handleInputChange}>
                      <option value="">Veuillez choisir le club</option>
                      {clubs &&
                        clubs.map(club => {
                          return (
                            <option key={uuid()} value={club._id}>
                              {club.title}
                            </option>
                          )
                        })}
                    </AvInput>
                  </AvGroup>
                </Col>
              </FormGroup>
            )}

            {currentUser.roles.includes("addRoles") && type.renderRoles && (
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
                      {error.errors?.typeisEnum ? TYPE_NOT_ENUM : TYPE_NOT_EMPTY}
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
    </>
  )
}
