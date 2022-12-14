import axios from "axios"
import React, { useState } from "react"
import * as yup from "yup"
import { Formik } from "formik"
import { Container, Row, Col } from "react-bootstrap"
import LinkDuo from "components/utils/LinkDuo"

export default function Contact() {
  const [state, setState] = useState({
    successMsg: "",
  })
  const [loading, setLoading] = useState(false)

  const ContactSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Doit être plus que 3 caractères")
      .max(80, "Ne doit pas dépasser les 80 caractères")
      .required("Champ nom est requis"),
    subject: yup
      .string()
      .min(3, "Doit être plus que 3 caractères")
      .max(80, "Ne doit pas dépasser les 80 caractères")
      .required("Champ sujet est requis"),
    service: yup.string().required("Champ service est requis").oneOf(["admission", "autre"]),
    email: yup.string().email("Doit être un email valide").required("Champ email est requis"),
    message: yup
      .string()
      .min(10, "Doit être plus que 10 caractères")
      .max(2000, "Ne doit pas dépasser les 2000 caractères")
      .required("Champ message est requis"),
    number: yup
      .number("Nombre")
      .positive("Nombre")
      .integer("Nombre")
      .test(
        "len",
        "Doit être entre 8 et 13 chiffres",
        val => val && val.toString().length >= 8 && val.toString().length <= 13
      ),
  })

  const handleForm = (values, { setSubmitting, setErrors, setStatus, resetForm }) => {
    setLoading(true)
    axios
      .post(`${process.env.REACT_APP_API_URL}api/contact`, values, {
        headers: { Accept: "application/json" },
      })
      .then(function (response) {
        resetForm({})
        setStatus({ success: true })
        setLoading(false)
        setState({
          successMsg: "Merci! Nous avons bien reçu votre message",
        })
      })
      .catch(function (error) {
        alert("Une erreur est survenue! Ressayer Plus Tard!")
        setStatus({ success: false })
        setSubmitting(false)
        setErrors({ submit: error.message })
      })
  }

  return (
    <>
      <section id="contact" className="contact-area">
        <Container>
          <Row className="margin-top-60">
            <Col lg={4} md={4}>
              <div className="address-area">
                <div className="addess">
                  <i className="icofont-google-map" />
                  <h4>{defaultProps.AddTitle}</h4>
                  <p>{defaultProps.Address}</p>
                </div>
                <div className="email">
                  <i className="icofont-email" />
                  <h4>{defaultProps.EmailTitle}</h4>
                  <LinkDuo to={defaultProps.EmailLink}>{defaultProps.Email}</LinkDuo>
                </div>
                <div className="phone">
                  <i className="icofont-phone" />
                  <h4>{defaultProps.PhoneTitle}</h4>
                  <p>{defaultProps.Phone}</p>
                </div>
              </div>
            </Col>

            <Col lg={8} md={8}>
              <div className="contact-form">
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    subject: "",
                    number: "",
                    message: "",
                    service: "",
                  }}
                  validationSchema={ContactSchema}
                  onSubmit={handleForm}>
                  {({
                    values,
                    errors,
                    status,
                    isValid,
                    touched,
                    handleChange,
                    handleBlur,
                    handleReset,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit} id="contactForm">
                      <div className="row">
                        <div className="col-lg-6 col-md-12">
                          <div className="form-group">
                            <input
                              name="name"
                              id="name"
                              onBlur={handleBlur}
                              placeholder="Votre Nom..."
                              autoComplete="off"
                              className={`${touched.name && (errors.name ? "is-invalid" : "is-valid")} form-control`}
                              value={values.name}
                              onChange={handleChange}
                            />

                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            <div className="help-block with-errors" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <div className="form-group">
                            <input
                              name="email"
                              id="email"
                              type="email"
                              onBlur={handleBlur}
                              placeholder="Votre Adresse Mail..."
                              autoComplete="off"
                              className={`${touched.email && (errors.email ? "is-invalid" : "is-valid")} form-control`}
                              value={values.email}
                              onChange={handleChange}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            <div className="help-block with-errors" />
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <input
                              name="subject"
                              id="subject"
                              type="text"
                              onBlur={handleBlur}
                              placeholder="Sujet..."
                              autoComplete="off"
                              className={`${
                                touched.subject && (errors.subject ? "is-invalid" : "is-valid")
                              } form-control`}
                              value={values.subject}
                              onChange={handleChange}
                            />
                            {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <input
                              name="number"
                              id="number"
                              type="text"
                              onBlur={handleBlur}
                              placeholder="Numéro de Téléphone..."
                              autoComplete="off"
                              className={`${
                                touched.number && (errors.number ? "is-invalid" : "is-valid")
                              } form-control`}
                              value={values.number}
                              onChange={handleChange}
                            />
                            {errors.number && <div className="invalid-feedback">{errors.number}</div>}
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                          <div className="form-group">
                            <select
                              className={`${
                                touched.service && (errors.service ? "is-invalid" : "is-valid")
                              } form-control`}
                              name="service"
                              onBlur={handleBlur}
                              placeholder="Service..."
                              id="service"
                              value={values.service}
                              onChange={handleChange}>
                              <option value="">Service...</option>
                              <option value="admission">Admission</option>
                              <option value="autre">Autre</option>
                            </select>
                            {errors.service && <div className="invalid-feedback">{errors.service}</div>}
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                          <div className="form-group">
                            <textarea
                              name="message"
                              id="description"
                              onBlur={handleBlur}
                              placeholder="Votre Message..."
                              rows="5"
                              autoComplete="off"
                              className={`${
                                touched.message && (errors.message ? "is-invalid" : "is-valid")
                              } form-control`}
                              value={values.message}
                              onChange={handleChange}
                            />
                            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                          </div>
                        </div>
                      </div>

                      <div className="center-wrap">
                        {!loading ? (
                          <div className="button">
                            <button type="submit">
                              Envoyer <i className="icofont-long-arrow-right" />
                            </button>

                            <div className="mask"></div>
                          </div>
                        ) : (
                          <div className="button">
                            <button type="button" disabled>
                              Envoi en cours...
                            </button>
                            <div className="mask"></div>
                          </div>
                        )}
                      </div>
                      <div className="clearfix" />
                    </form>
                  )}
                </Formik>

                {state.successMsg !== "" ? (
                  <div className="col-md-12">
                    <div id="contact_send_status">
                      <h3 className="contactMsg">{state.successMsg}</h3>
                    </div>
                  </div>
                ) : null}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

//Default Props
const defaultProps = {
  SectionbgTitle: "Contact",
  sectionTitle: "Contactez-nous",
  sectionDescription: "Envoyez vos questions ou vos suggestions pour qu'on puisse rester à votre écoute.",
  AddTitle: "Adresse",
  Address: "1, 2 rue André Ampère - 2083 - Pôle Technologique - El Ghazala.",
  EmailTitle: "Email",
  Email: "contact@esprit.tn",
  EmailLink: "mailto:contact@esprit.tn",
  PhoneTitle: "Téléphone",
  Phone: "T (216) 70 250 000",
}
