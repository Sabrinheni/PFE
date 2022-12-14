import AvForm from "availity-reactstrap-validation/lib/AvForm"
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
import { Error } from "views/components/Error"
import { Loading } from "views/components/Loading"
import { timeTableTitles } from "../../../enums/entities.enum"
import { FILE_ERROR, VALIDATION_ERROR } from "../../../enums/errors.enum"
import { queryApi } from "../../../utils/queryApi"

export default function UpdateTimeTable() {
  const history = useHistory()
  const { id } = useParams()

  const [timeTable, setTimeTable] = useState(null)
  const [showLoader, setShowLoader] = useState(false)
  const [error, setError] = useState(null)

  const [form, setForm] = useState({
    title: "",
  })

  // form for validation errors
  const [formError, setFormError] = useState({
    visible: false,
    errors: {},
    unique: [],
  })

  // get timeTable by id passed in params
  useEffect(() => {
    async function fetchData() {
      const [res, err] = await queryApi("timeTable/" + id)
      if (err) setError(err)
      else {
        setTimeTable(res)
        const { title } = res
        setForm({ ...form, title })
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
    //Update timeTable
    const [, err] = await queryApi("timeTable/" + id, form, "PUT", true)
    if (err) {
      setShowLoader(false)
      setFormError({
        visible: true,
        errors: err.errors,
        unique: err.errors?.titleisUnique && [...formError.unique, form.title.toLowerCase()],
      })
    } else {
      if (timeTable.status === true) history.push("/timeTable")
      else history.push("/timeTable/archived")
    }
  }

  function handleCancel() {
    history.goBack()
  }

  if (error) return <Error error={error} />

  // IMPORTANT !! Must verify it => wait until hook return resutls
  if (!timeTable) return <Loading type="grow" />

  return (
    <Row>
      <Col xs="12" xl="12">
        <Card>
          <CardHeader>
            <strong>Calendrier : </strong>Modifier
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
                  <Label htmlFor="text-input">Type</Label>
                </Col>
                <Col xs="12" md="9">
                  <Label htmlFor="text-input">{timeTableTitles[form.title]}</Label>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="text-input">Fichier</Label>
                </Col>

                <Col xs="12" md="9">
                  <CustomInput
                    id="file"
                    name="file"
                    type="file"
                    accept="application/pdf"
                    onChange={handleInputChange}
                  />
                  {timeTable.file ? (
                    <p className="mb-3">
                      <a href={process.env.REACT_APP_API_URL_UPLOADS + timeTable.file}>{timeTable.file}</a>
                    </p>
                  ) : (
                    <p>Pas de fichier</p>
                  )}

                  {formError.errors?.file && (
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
