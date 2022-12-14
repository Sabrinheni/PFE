import AvFeedback from "availity-reactstrap-validation/lib/AvFeedback"
import AvForm from "availity-reactstrap-validation/lib/AvForm"
import AvGroup from "availity-reactstrap-validation/lib/AvGroup"
import AvInput from "availity-reactstrap-validation/lib/AvInput"
import { convertToRaw, EditorState } from "draft-js"
import draftToHtml from "draftjs-to-html"
import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import RUG, { DropArea } from "react-upload-gallery"
import "react-upload-gallery/dist/style.scss"
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
import { CustomOptions } from "views/components/custom"
import RichEditor from "views/components/Editor"
import { eventTypes } from "../../../enums/entities.enum"
import {
  IMAGE_NOT_EMPTY,
  TITLE_LENGTH,
  TITLE_NOT_EMPTY,
  TITLE_UNIQUE,
  TYPE_NOT_EMPTY,
  TYPE_NOT_ENUM,
  VALIDATION_ERROR,
} from "../../../enums/errors.enum"
import { queryApi } from "../../../utils/queryApi"
import slugify from "slugify"

export default function AddEvent() {
  const history = useHistory()

  const [showLoader, setShowLoader] = useState(false)
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [form, setForm] = useState({
    title: "",
    description: "",
    type: "",
    images: [],
    content: "",
    url: "",
  })

  const [error, setError] = useState({
    visible: false,
    errors: {},
    unique: [],
  })

  function handleInputChange(e) {
    const value = e.target.name === "cover" ? e.target.files[0] : e.target.value
    setForm({ ...form, [e.target.name]: value })
    setError({ ...error, visible: false, errors: {} })
  }

  function handleGalleryChange(images) {
    let gallery = []
    for (const file in images) {
      if (images.hasOwnProperty(file)) {
        const element = images[file]
        element.progress = 100
        element.done = true
        gallery.push(element.file)
      }
    }
    setForm({ ...form, images: gallery })
  }

  function handleCancel() {
    history.push("/event")
  }

  function slugifiedURL() {
    form.title && setForm({ ...form, url: "/actualite/" + slugify(form.title) })
  }

  async function handleSubmit(e) {
    e.persist()

    setShowLoader(true)
    //Add event
    const [, err] = await queryApi("event", form, "POST", true)
    if (err) {
      setShowLoader(false)
      setError({
        visible: true,
        errors: err.errors,
        unique: err.errors?.titleisUnique && [...error.unique, form.title.toLowerCase()],
      })
    } else history.push("/event")
  }

  function isChanged(content) {
    setEditorState(content)
    setForm({ ...form, content: draftToHtml(convertToRaw(editorState.getCurrentContent())) })
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
        <strong>Evente : </strong> Ajouter
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

              <FormText color="muted">Titre de l'événement à ajouter</FormText>
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
              <Label htmlFor="text-input">url</Label>
            </Col>
            <Col xs="12" md="9">
              <Button onClick={slugifiedURL}>Générer le lien interne</Button>
              <Input type="text" name="url" value={form.url} onChange={handleInputChange} placeholder="Url..." />
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
                  <CustomOptions options={eventTypes} />
                </AvInput>
                <AvFeedback className="text-capitalize">
                  {error.errors?.typeisEnum ? TYPE_NOT_ENUM : TYPE_NOT_EMPTY}
                </AvFeedback>
              </AvGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="3">
              <Label htmlFor="text-input">Contenu</Label>
            </Col>
            <Col xs="12" md="9">
              <RichEditor onStateChanged={isChanged} editorStateInit={form.content} />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="3">
              <Label htmlFor="text-input">Image de Couverture</Label>
            </Col>
            <Col xs="12" md="9">
              <CustomInput
                id="cover"
                name="cover"
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                onChange={handleInputChange}
              />
              {error.errors?.imageDefined && (
                <Row className="text-capitalize text-danger">
                  <p style={{ marginLeft: "1.1em" }}>{IMAGE_NOT_EMPTY}</p>
                </Row>
              )}
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="3">
              <Label htmlFor="text-input">Gallery d'images</Label>
            </Col>
            <Col xs="12" md="9">
              <RUG
                rules={{
                  limit: 30,
                  size: process.env.REACT_APP_MAX_FILE_SIZE * 1024 ** 2,
                }}
                accept={["jpg", "jpeg", "png"]}
                onChange={handleGalleryChange}
                action={null}
                customRequest={() => {
                  return true
                }}
                header={({ openDialogue }) => (
                  <DropArea>
                    {isDrag => (
                      <div className="rug-handle ">
                        <svg viewBox="0 -5 32 52" className="rug-handle-icon">
                          <g>
                            <polyline points="1 19 1 31 31 31 31 19"></polyline>
                            <polyline className="__arrow" points="8 9 16 1 24 9"></polyline>
                            <line className="__arrow" x1="16" x2="16" y1="1" y2="25"></line>
                          </g>
                        </svg>
                        <div className="rug-handle-info">
                          <button type="button" className="rug-handle-button" onClick={openDialogue}>
                            Selectionner les images
                          </button>
                        </div>
                      </div>
                    )}
                  </DropArea>
                )}
                footer={({ images, accept, setSort, uploadFiles, openDialogue }) => (
                  <div>
                    <span style={{ marginRight: 20 }}>{images.length} Images / 30 max </span>

                    <span>Accepted Types: {accept.join(", ")}</span>
                  </div>
                )}></RUG>
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
