import AvFeedback from "availity-reactstrap-validation/lib/AvFeedback"
import AvForm from "availity-reactstrap-validation/lib/AvForm"
import AvGroup from "availity-reactstrap-validation/lib/AvGroup"
import AvInput from "availity-reactstrap-validation/lib/AvInput"
import { EditorState, convertToRaw } from "draft-js"
import draftToHtml from "draftjs-to-html"
import React, { useCallback, useEffect, useState } from "react"
import Gallery from "react-photo-gallery"
import { useHistory, useParams } from "react-router-dom"
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
import { CustomCardImg, CustomOptions } from "views/components/custom"
import { Error } from "views/components/Error"
import { Loading } from "views/components/Loading"
import RichEditor from "views/components/Editor"
import SelectedImage from "views/components/SelectedImage"
import { eventTypes } from "../../../enums/entities.enum"
import {
  TITLE_LENGTH,
  TITLE_NOT_EMPTY,
  TITLE_UNIQUE,
  TYPE_NOT_EMPTY,
  TYPE_NOT_ENUM,
  VALIDATION_ERROR,
} from "../../../enums/errors.enum"
import { queryApi } from "../../../utils/queryApi"
import slugify from "slugify"

export default function UpdateEvent() {
  const history = useHistory()
  const { id } = useParams()

  const [loading, setLoading] = useState(true)
  const [event, setEvent] = useState(null)
  const [showLoader, setShowLoader] = useState(false)
  const [error, setError] = useState(null)
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [previewImageUrl, setPreviewImageUrl] = useState("")

  const [galleryImages, setGalleryImages] = useState([])

  const [form, setForm] = useState({
    title: "",
    description: "",
    type: "",
    content: "",
    url: "",
    createdAt: "",
  })

  // form for validation errors
  const [formError, setFormError] = useState({
    visible: false,
    errors: {},
    unique: [],
  })

  // get event by id passed in params
  useEffect(() => {
    async function fetchData() {
      const [res, err] = await queryApi("event/" + id)
      if (err) setError(err)
      else {
        if (res.cover) setPreviewImageUrl(process.env.REACT_APP_API_URL_UPLOADS + res.cover)
        setEvent(res)
        const { title, type, description, status, content, url, createdAt } = res

        for (const img in res.images) {
          if (res.images.hasOwnProperty(img))
            galleryImages.push({
              width: 1,
              height: 1,
              selected: false,
              originalname: res.images[img],
              src: process.env.REACT_APP_API_URL_UPLOADS + res.images[img],
            })
        }
        setForm({ ...form, title, type, description, status, content, url, createdAt })
        setLoading(false)
      }
    }
    fetchData()
    // eslint-disable-next-line
  }, [id])

  function handleInputChange(e) {
    const value = e.target.name === "cover" ? e.target.files[0] : e.target.value
    if (e.target.name === "cover") {
      setPreviewImageUrl(URL.createObjectURL(e.target.files[0]))
    }
    setForm({ ...form, [e.target.name]: value })
    setFormError({ ...formError, visible: false, errors: {} })
  }

  async function handleSubmit(e) {
    e.persist()
    let toDelete = []
    for (const image in galleryImages) {
      if (galleryImages.hasOwnProperty(image)) {
        const element = galleryImages[image]
        if (element.selected) toDelete.push(element.originalname)
      }
    }
    form.imagesToDelete = toDelete
    if (form.createdAt) form.createdAt = new Date(form.createdAt).toISOString()
    setShowLoader(true)
    //Update event
    const [, err] = await queryApi("event/" + id, form, "PUT", true)
    if (err) {
      form.createdAt = new Date(form.createdAt).toLocaleDateString("en-CA")
      setShowLoader(false)
      setFormError({
        visible: true,
        errors: err.errors,
        unique: err.errors?.titleisUnique && [...formError.unique, form.title.toLowerCase()],
      })
    } else {
      if (event.status === true) history.push("/event")
      else history.push("/event/archived")
    }
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

  function isChanged(content) {
    setEditorState(content)
    setForm({ ...form, content: draftToHtml(convertToRaw(editorState.getCurrentContent())) })
  }

  function handleCancel() {
    history.goBack()
  }

  function slugifiedURL() {
    form.title && setForm({ ...form, url: "/actualite/" + slugify(form.title) })
  }

  const imageRenderer = useCallback(
    ({ index, left, top, key, photo }) => {
      function setSelected(index) {
        const test = galleryImages
        test[index].selected = !test[index].selected
        setGalleryImages(test)
      }
      return (
        <SelectedImage
          key={key}
          margin={"2px"}
          index={index}
          photo={photo}
          left={left}
          top={top}
          setSelected={setSelected}
        />
      )
    },

    [galleryImages]
  )

  function checkError() {
    if (formError.errors?.titlelength) return TITLE_LENGTH
    return TITLE_NOT_EMPTY
  }

  const checkUniqueness = formError.errors?.titleisUnique && formError.unique.includes(form.title.toLowerCase())
  function nameIsUnique(value) {
    // if (!value) return true // required replaces it !
    return (!checkUniqueness && formError.errors?.titlelength) ?? true
  }

  if (error) return <Error error={error} />

  // IMPORTANT !! Must verify it => wait until hook return resutls
  if (!event) return <Loading type="grow" />

  return (
    <Row>
      <Col xs="12" xl="6">
        <Row>
          <Card style={{ width: "100%" }}>
            <CardHeader>
              <i className="fa fa-align-justify"></i>
              <strong>Event : </strong>Image
            </CardHeader>
            <CardBody>
              <CustomCardImg isForm src={previewImageUrl} />
            </CardBody>
          </Card>
        </Row>
        <Row>
          <Card style={{ width: "100%" }}>
            <CardHeader>
              <i className="fa fa-align-justify"></i>
              <strong>Event : </strong>Gallery
              <h3>Selectionner les images a supprimer</h3>
            </CardHeader>
            <CardBody>
              <Gallery style={{ width: "100%" }} photos={galleryImages} renderImage={imageRenderer} />
            </CardBody>
          </Card>
        </Row>
      </Col>
      <Col xs="12" xl="6">
        <Card>
          <CardHeader>
            <strong>Event : </strong>Modifier
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
                  <FormText color="muted">Titre de l'article à modifier</FormText>
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
                  <Label htmlFor="textarea-input">Date de création</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input
                    type="date"
                    name="createdAt"
                    value={new Date(form.createdAt).toLocaleDateString("en-CA")}
                    onChange={handleInputChange}
                    placeholder="Date de création"
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">url</Label>
                </Col>
                <Col xs="12" md="9">
                  <Button onClick={slugifiedURL}>Générer le lien interne</Button>
                  <Input
                    type="text"
                    name="url"
                    value={form.url || ""}
                    onChange={handleInputChange}
                    placeholder="Url..."
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
                      <CustomOptions options={eventTypes} />
                    </AvInput>
                    <AvFeedback className="text-capitalize">
                      {formError.errors?.typeisEnum ? TYPE_NOT_ENUM : TYPE_NOT_EMPTY}
                    </AvFeedback>
                  </AvGroup>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Contenu</Label>
                </Col>
                <Col xs="12" md="9">
                  {!loading && <RichEditor onStateChanged={isChanged} editorStateInit={form.content || ""} />}
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
                          <div className="rug-handle" style={{ height: "auto!important" }}>
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
