import { CustomHrGray } from "components/CustomElements/CustomHrGray"
import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import DownloadButton from "components/DownloadButton"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import file2 from "../../../assets/files/présentation-génie-civil.pdf"
import file1 from "../../../assets/files/Présentation-site-EM.pdf"
import file3 from "../../../assets/files/présentation-TIC.pdf"
import downloadsrc from "../../../assets/img/download.ico"
import breadcrumbbg from "../../../assets/img/esprit-ingenieur.jpg"
import { PresentationIngenieur as meta } from "../FormationsDictionary"

const PresentationIngenieur = () => {
  useEffect(() => {
    window.unibuddySettings = {
      uni_id: "esprit",
      colour: "E20019",
      domain: "https://popcard.unibuddy.co/",
      title: "Unibuddy Popcard",
      align: "right",
      ubLang: "en-GB",
      ubCookieConsent: "necessary",
    }
    console.log(window.unibuddySettings)
    const scriptTag = document.createElement("script")
    scriptTag.id = "unibuddy-popcard"
    scriptTag.src = "https://cdn.unibuddy.co/unibuddy-popcard.js"
    document.body.appendChild(scriptTag)
    console.log(document.getElementById("unibuddy-popcard"))
    return () => {
      const scriptTag = document.getElementById("unibuddy-popcard-iframe")
      scriptTag.remove()
    }
  }, [])

  return (
    <>
      <MetaHelmet meta={meta} />
      <NavBar breadcrumb={breadcrumb} />
      <section className="our-blog extract main-blog dynamic-margin">
        <div className="container">
          <div>
            <Row>
              <Col>
                <h1>Esprit Ingénieur : Pour tout savoir sur nos formations</h1>
                <CustomHrRed />
              </Col>
            </Row>
          </div>
          <div className="margin-top-60">
            <Row style={{ marginBottom: "60px" }}>
              <Col md={4} xs={12}>
                <div style={{ display: "flow-root" }}>
                  <h3 className="text-esprit">Electromecanique</h3>
                  <CustomHrGray />
                </div>
                <br />
                <Row>
                  <Col>
                    <DownloadButton data={download1} />
                  </Col>
                </Row>
              </Col>
              <Col md={4} xs={12}>
                <div style={{ display: "flow-root" }}>
                  <h3 className="text-esprit">Génie civil</h3>
                  <CustomHrGray />
                </div>
                <br />
                <Row>
                  <Col>
                    <DownloadButton data={download2} />
                  </Col>
                </Row>
              </Col>
              <Col md={4} xs={12}>
                <div style={{ display: "flow-root" }}>
                  <h3 className="text-esprit">TIC</h3>
                  <CustomHrGray />
                </div>
                <br />
                <Row>
                  <Col>
                    <DownloadButton data={download3} />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={{ marginBottom: "60px" }}>
              <Col>
                <div className="services-box">
                  <div className="services-box-icon">
                    <div className="services-box-icon-inner">
                      <i className="services-box-fonticon icofont-flash" />
                    </div>
                  </div>
                  <div className="services-box-content">
                    <h4 className="services-box-title">Se former autrement</h4>
                    <div className="services-box-desc">
                      <p>
                        Esprit lors de sa création s’est donnée comme mission principale de former des ingénieurs «
                        autrement ». Pour cela l’école a adopté dès le départ une pédagogie nouvelle, dynamique mettant
                        l’élève au centre de l’apprentissage. L’adoption de l’APP (apprentissage par projet/problème)
                        est venue renforcer cette volonté. Un centre d’innovation pédagogique permet la formation des
                        enseignants à ces nouvelles pratiques pédagogiques qui s’étendent petit à petit à l’ensemble du
                        cursus. L’évaluation des enseignements par les élèves contribue aussi à mettre ce dernier au
                        cœur du processus d’apprentissage. L’élève est acteur de sa formation.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row style={{ marginBottom: "60px" }}>
              <Col>
                <div className="services-box">
                  <div className="services-box-icon">
                    <div className="services-box-icon-inner">
                      <i className="services-box-fonticon icofont-flash" />
                    </div>
                  </div>
                  <div className="services-box-content">
                    <h4 className="services-box-title">Activités supplémentaires</h4>
                    <div className="services-box-desc">
                      <p>
                        Mais former autrement passe aussi par des activités qui dépassent les cours et forment l’élève à
                        ce qu’il sera en tant qu’ingénieur. Cela se fait dans le cadre des activités de Recherche,
                        Développement et Innovation auxquels peuvent être associés des étudiants par la participation
                        conjointe avec des enseignants à des concours internationaux, des challenges, par l’obligation
                        de faire plusieurs stages, par l’accession d’une expérience significative à l’international, par
                        toute forme d’expérience associative.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row style={{ marginBottom: "60px" }}>
              <Col>
                <div className="services-box">
                  <div className="services-box-icon">
                    <div className="services-box-icon-inner">
                      <i className="services-box-fonticon icofont-flash" />
                    </div>
                  </div>
                  <div className="services-box-content">
                    <h4 className="services-box-title">Cursus</h4>
                    <div className="services-box-desc">
                      <p>
                        Actuellement deux cursus d’ingénieur sont proposés ; un cursus en cours du jour et un cursus en
                        cours du soir (formation continue) Proche de la structure du LMD le diplôme d’ingénieur
                        s’acquiert en 5 années : un tronc commun de 3 ans qui permet d’acquérir les bases indispensables
                        et 2 années pour approfondir ses connaissances et se spécialiser. Il est possible d’entrer dans
                        la formation directement en 2ème, 3ème année, chaque niveau ouvre un type de cursus.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row style={{ marginBottom: "60px" }}>
              <Col md={4} xs={12}>
                <div style={{ display: "flow-root" }}>
                  <h3 className="text-esprit">Cursus A </h3>
                  <CustomHrGray />
                </div>
                <br />
                <ul className="qualite-ul">
                  <li>Cursus intégré et progressif de 5 ans post-bac</li>
                  <li>10 semestres, 300 ECTS</li>
                  <li>Admission en 3ème année pour les titulaires d’une licence dans la spécialité</li>
                  <li>Structuration en (3+2) avec des options</li>
                  <li>3 Stages dont 1 Projet de fin d’études (semestre 10)</li>
                </ul>
              </Col>
              <Col md={4} xs={12}>
                <div style={{ display: "flow-root" }}>
                  <h3 className="text-esprit">Cursus B </h3>
                  <CustomHrGray />
                </div>
                <br />
                <ul className="qualite-ul">
                  <li>Cursus intégré de 3 ans post-licence ou bien post-prépa</li>
                  <li>6 semestres, 180 ECTS</li>
                  <li>Structuration en (1+2) avec des options</li>
                  <li>2 ou 3 Stages dont 1 Projet de fin d’études (semestre 10)</li>
                </ul>
              </Col>
              <Col md={4} xs={12}>
                <div style={{ display: "flow-root" }}>
                  <h3 className="text-esprit">Cursus C </h3>
                  <CustomHrGray />
                </div>
                <br />
                <ul className="qualite-ul">
                  <li>Cursus intégré de 4 ans post-licence</li>
                  <li>En cours du soir</li>
                  <li>180 ECTS</li>
                  <li>Projet de fin d’études tout au long de l’année terminale</li>
                </ul>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      {/* <script>
        {
          (window.unibuddySettings = {
            uni_id: "esprit",
            colour: "E20019",
            domain: "https://popcard.unibuddy.co/",
            title: "Unibuddy Popcard",
            align: "right",
            ubLang: "en-GB",
            ubCookieConsent: "necessary",
          })
        }
      </script>
      <script src="https://cdn.unibuddy.co/unibuddy-popcard.js" type="text/javascript"></script> */}
    </>
  )
}

const download1 = {
  link: file1,
  text: "DOWNLOAD",
  src: downloadsrc,
}
const download2 = {
  link: file2,
  text: "DOWNLOAD",
  src: downloadsrc,
}
const download3 = {
  link: file3,
  text: "DOWNLOAD",
  src: downloadsrc,
}
const breadcrumb = {
  src: breadcrumbbg,
  Title: "L’école d’ingénieur",
  Subtitle: "Former les ingénieurs de demain",
}

export default PresentationIngenieur
