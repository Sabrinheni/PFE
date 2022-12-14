import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { createRef, useState, useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import { LePlusDEsprit as meta } from "./EspritDictionary"
import { Spinner } from "react-bootstrap"
import LinkDuo from "components/utils/LinkDuo"

export default function Honoris() {
  const [showVideo, setShowVideo] = useState(false)

  const container = createRef()

  const videoObserver = new IntersectionObserver(onVideoIntersection, {
    rootMargin: "100px 0px",
    threshold: 0.25,
  })

  useEffect(() => {
    if (window && "IntersectionObserver" in window) {
      if (container && container.current) {
        videoObserver.observe(container.current)
      }
    } else {
      setShowVideo(true)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [container])

  function onVideoIntersection(entries) {
    if (!entries || entries.length <= 0) {
      return
    }

    if (entries[0].isIntersecting) {
      setShowVideo(true)
      videoObserver.disconnect()
    }
  }

  return (
    <>
      <MetaHelmet meta={meta} />
      <NavBar />
      <section className="our-blog extract main-blog dynamic-margin-simple">
        <div className="container">
          <Row>
            <Col md={12} xs={12}>
              <h1>Honoris United Universities</h1>
              <CustomHrRed />
            </Col>
          </Row>
          <Row style={{ marginBottom: "60px" }}>
            <Col md={12} xs={12}>
              <p>
                Honoris United Universities est le premier réseau panafricain d’enseignement supérieur privé engagé à
                former la nouvelle génération de leaders et de professionnels africains capables d’avoir un impact sur
                leurs sociétés et leurs économies dans un monde globalisé. Intelligence collaborative, agilité
                culturelle et mobilité sont au cœur de la vision d’Honoris en matière d’enseignement supérieur.
              </p>
              <p>
                Honoris United Universities fusionne les savoirs et l’expertise de ses institutions membres pour
                développer un capital humain africain de classe mondiale, compétitif sur des marchés de plus en plus
                numérisés du travail et des start-ups.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={12} xs={12}>
              <h1>Nos Valeurs</h1>
              <CustomHrRed />
            </Col>
          </Row>
          <Row style={{ marginBottom: "60px" }}>
            <Col md={12} xs={12}>
              <p>
                <strong>Intelligence collaborative :</strong>L’intelligence collaborative est au cœur de notre vision
                novatrice de l’enseignement supérieur. Elle permet de fusionner les savoirs et pratiques de plusieurs
                pays pour former une nouvelle génération de leaders opérationnels, capables de transformer les sociétés
                et économies de demain. L’intelligence collaborative inspire nos activités et donne tout son sens à
                notre mission.
              </p>
              <p>
                <strong>Agilité culturelle :</strong>Dans un monde complexe et en perpétuel changement, fait de défis et
                d’opportunités, nous voulons former des professionnels avec de fortes capacités d’adaptation, de
                réflexion et d’engagement. Grâce à leur agilité culturelle, notre corps professoral et nos lauréats
                contribueront à développer l’Afrique et à participer à son rayonnement au niveau régional et
                international.
              </p>
              <p>
                <strong>Mobilité :</strong>Nous travaillons étroitement avec les employeurs pour cerner leurs besoins.
                Nous soutenons l’esprit d’entreprise et croyons fermement que les petites et moyennes entreprises jouent
                un rôle moteur dans les économies du continent Africain. Grâce à la collaboration entre les institutions
                membres de notre plateforme, nous proposons une offre académique différenciée et adaptés aux besoins du
                marché. Nous croyons en un « état d’esprit mobile » pour permettre à nos lauréats une employabilité
                effective à la fois régionale et internationale.
              </p>
              <p>
                <strong>Excellence académique :</strong>Notre engagement à soutenir les aspirations de nos communautés
                repose sur la base d’un environnement rigoureux selon des standards internationaux précis dont notre
                corps académique, nos programmes, nos infrastructures et nos résultats se feront l’écho. Nous sommes
                régulièrement audités par des organismes indépendants qui confirment notre niveau d’exigence élevé.
              </p>
              <p>
                <strong>Vie Etudiante riche :</strong>Nos institutions s’engagent à impliquer l’étudiant dans leur
                gouvernance et à l’accompagner dans leur développement académique, professionnel et personnel.
                Interactions directes ou en ligne, espace de vie et de logement, événements, clubs, networking et
                activités organisées par sur les campus physiques ou digitaux, tout est mis en œuvre pour assurer aux
                étudiants une expérience des plus riches.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={12} xs={12}>
              <h1>Chiffres</h1>
              <CustomHrRed />
            </Col>
          </Row>
          <Row style={{ marginBottom: "60px" }}>
            <Col md={12} xs={12}>
              <ul style={{ listStyle: "circle", marginLeft: "60px", marginBottom: "30px" }}>
                <li>14 institutions d’enseignement supérieur, professionnel et à distance et en ligne</li>
                <li>+70 campus urbains ou résidentiels et centres d’apprentissage ou en ligne</li>
                <li>+ 57 000 étudiants</li>
                <li>10 pays africains</li>
                <li>32 villes</li>
                <li>+40 nationalités</li>
                <li>+85 partenariats avec des universités en Europe et aux Etats-Unis</li>
                <li>
                  Plus de 300 programmes pluridisciplinaires en présentiel ou en ligne dans des domaines tels que la
                  Santé, l’Ingénierie, IT, Business, Droit, Architecture, Arts et Design, Média, Education et Sciences
                  politiques
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col md={12} xs={12}>
              <h1>Découvrez Honoris en image</h1>
              <CustomHrRed />
            </Col>
          </Row>
          <Row style={{ marginBottom: "60px" }}>
            <Col md={12} xs={12}>
              <div style={{ display: "flex", placeContent: "center", height: "400px", alignItems: "center" }}>
                <div ref={container}>
                  {showVideo ? (
                    <iframe
                      className="youtube-video"
                      title="Video esprit"
                      src="https://www.youtube.com/embed/_jcUSSXMIOo?version=3&rel=0&autoplay=1&loop=1&mute=1&controls=0&playlist=_jcUSSXMIOo"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; loop;"
                      allowFullScreen></iframe>
                  ) : (
                    <Spinner
                      animation="border"
                      role="status"
                      variant="danger"
                      style={{ width: "10rem", height: "10rem" }}
                    />
                  )}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} xs={12}>
              <h1>Choisir Honoris</h1>
              <CustomHrRed />
            </Col>
          </Row>
          <Row style={{ marginBottom: "60px" }}>
            <Col md={12} xs={12}>
              <p>
                Ambitieux et responsables, les diplômés du réseau Honoris United Universities possèdent un avantage
                compétitif sur le marché du travail : une expérience académique multiculturelle et une immersion
                professionnelle panafricaine couplées à une vie étudiante aux standards internationaux.
              </p>
              <p>Honoris United Universities s’engage envers ses étudiants et leurs familles à travers:</p>
              <ul style={{ listStyle: "circle", marginLeft: "60px", marginBottom: "30px" }}>
                <li>Une excellence académique reconnue au niveau national et international</li>
                <li>Un corps académique issu des meilleurs professeurs locaux et internationaux </li>
                <li>
                  Des programmes d’échange ou parcours multi-pays en Afrique, en Europe, en Asie ou aux Etats-Unis{" "}
                </li>
                <li>
                  Des partenariats, des programmes d’échanges, doubles diplômes, avec des institutions et des employeurs
                  en Afrique et à l’international
                </li>
                <li>Des programmes en alternance avec l’entreprise </li>
                <li>Une utilisation pertinente des nouvelles technologies </li>
                <li>
                  Une agilité culturelle et des best-practices découlant d’une expertise régionale, continentale et
                  internationale{" "}
                </li>
                <li>Des programmes dédiés pour l’employabilité </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col md={12} xs={12}>
              <h1>Rejoignez la communauté Honoris United sur les plateformes sociales :</h1>
              <CustomHrRed />
            </Col>
          </Row>
          <Row>
            <Col md={12} xs={12}>
              <div style={{ textAlign: "center" }} className="social-icons bottom">
                <ul className="list-inline">
                  <li>{props.socialTitle} </li>
                  <li>
                    <LinkDuo to={props.FacebookLink}>
                      <i className="icofont-facebook" />
                    </LinkDuo>
                  </li>
                  <li>
                    <LinkDuo to={props.InstagramLink}>
                      <i className="icofont-instagram" />
                    </LinkDuo>
                  </li>
                  <li>
                    <LinkDuo to={props.TwitterLink}>
                      <i className="icofont-twitter" />
                    </LinkDuo>
                  </li>
                  <li>
                    <LinkDuo to={props.YoutubeLink}>
                      <i className="icofont-youtube" />
                    </LinkDuo>
                  </li>
                  <li>
                    <LinkDuo to={props.linkedinLink}>
                      <i className="icofont-linkedin" />
                    </LinkDuo>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}
const props = {
  socialTitle: "SUIVEZ-NOUS:",
  FacebookLink: "https://www.facebook.com/HonorisUni/",
  InstagramLink: "https://www.instagram.com/honorisuni/",
  TwitterLink: "https://twitter.com/HonorisUni",
  YoutubeLink: "https://www.youtube.com/channel/UC6cNKYe2bBS2jNz00Sqo83Q?view_as=subscriber",
  linkedinLink: "https://www.linkedin.com/company/honorisuni/",
}
