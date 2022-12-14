import PropTypes from "prop-types"
import React, { Component } from "react"

import OwlCarousel from "react-owl-carousel"
import { Row, Col } from "react-bootstrap"
import { LazyImage } from "components/utils/LazyImage"

export default class Testimonials extends Component {
  render() {
    //Testimonials loop start
    const testimonialsitem = this.props.testimonialsData.map((testimonials, index) => (
      <div className="single-testimonial-item" key={index}>
        <Row style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
          <Col md={3} style={{ display: "flex", placeContent: "center", alignItems: "center" }}>
            <div className="client-profile">
              <LazyImage src={testimonials.clientImage} alt={testimonials.Name} />
            </div>
          </Col>
          <Col>
            <i className="icofont-quote-left" />
            <p>{testimonials.Content}</p>
            <div className="client-info text-center">
              <h3>{testimonials.Name}</h3>
              <span>{testimonials.Profession}</span>
            </div>
          </Col>
        </Row>
      </div>
    ))
    //Testimonials loop END
    return (
      <>
        <section className="testimonials ptb-100">
          <div className="container">
            <OwlCarousel
              className="owl-theme testimonial-slides"
              items={1}
              nav={true}
              dots={false}
              autoplay={true}
              loop={true}
              autoplayHoverPause={true}
              smartSpeed={1000}
              navText={["<i class='icofont-arrow-left'></i>", "<i class='icofont-arrow-right'></i>"]}>
              {testimonialsitem}
            </OwlCarousel>
          </div>
        </section>
      </>
    )
  }
}

//Props Types
Testimonials.propTypes = {
  testimonialsData: PropTypes.array,
}

//Default Props
Testimonials.defaultProps = {
  testimonialsData: [
    {
      clientImage: require("../../assets/img/alice-crespo.jpg"),
      Content:
        "Ce fut une expérience fondamentale dans mon parcours car bien qu’enrichissante, cela m’a fait découvrir de nouvelles cultures et surtout de nouvelles personnes formidables . J’ai également pu apprendre quelques expressions Tunisiennes . De plus, être présent durant le mois de ramadan a été une période très conviviale. En parallèle, de nombreux travaux collectifs nous ont été proposés ce qui a beaucoup aidé à notre intégration (Stan et moi) et au travail en groupe. Le corps enseignant de notre classe a été très à l’écoute avec nous tout au long du semestre et bien que les cours étaient très centrés sur l’informatique, cela nous a permis de prendre de l’avance dans ce domaine, chose plutôt avantageuse pour nous. ",
      Name: "Alice Crespo",
      Profession: "Étudiante à ESPRIT",
    },
    {
      clientImage: require("../../assets/img/mohamed-ben-ali.jpg"),
      Content:
        "Pour moi, \"Se former autrement\" est plus qu'un slogan. J’ai pu le constater tout au long de mes études grâce à l'approche innovante de l'apprentissage, l'environnement, l'infrastructure et l'excellence du programme d'études de l'école." +
        "Après avoir intégré l'équipe de recherche M.I.N.O.S., j'ai créé un outil de cybersecurité open source appelé \"Cyberscan tool kit\" qui est actuellement utilisé par des entreprises, des laboratoires de recherche et des universités." +
        '  Aussi, j\'ai eu l\'honneur de figurer dans la catégorie "Most amazing people from Cybersecurity field" du célèbre magazine"Hakin9".',
      Name: "Mohamed BEN ALI",
      Profession: "Étudiant à ESPRIT",
    },
    {
      clientImage: require("../../assets/img/nadeje-abib.jpg"),
      Content:
        "Etudiante à Esprit depuis 2015, j'ai directement adopté la pédagogie et la méthodologie de travail appliquées au sein de l’école. Dès la première année, nous élaborons divers projets qui nous permettent d'améliorer nos compétences techniques mais également nos Soft skills. Au fil des années, nous forgeons notre profil d’ingénieur en alimentant nos compétences en entreprenariat, en design, en public speaking… J'ai fondé mon propre club EsprIOT, j'ai également participé à la compétition internationale HultPrize pour la phase régionale et nationale, mais le meilleur accomplissement reste celui avec Enactus Esprit ICT : après avoir remporté la compétition nationale, nous avons représenté la Tunisie et Esprit lors de l'Enactus World Cup à la Silicon Valley en Californie  (Etats-Unis).",
      Name: "Nadeje Tabib",
      Profession: "Étudiante à ESPRIT",
    },
    {
      clientImage: require("../../assets/img/anouchka-taku.jpg"),
      Content:
        "Ce que j’apprécie à ESPRIT ingénieur, c'est le professionnalisme et l'efficacité des enseignants et les employés. La méthode d'enseignement est très efficace et instructive. Les locaux, l'infrastructure et les restaurants nous offrent des conditions favorables pour réussir. ",
      Name: "Anouchka TAKU",
      Profession: "Étudiant à ESPRIT",
    },
    {
      clientImage: require("../../assets/img/desire-parfait-ngah.jpg"),
      Content:
        "Après mon baccalauréat scientifique anglophone au collège Saint-Benoît, j’ai décidé de continuer à ESPRIT. Cette prestigieuse école nous offre encadrement de qualité, une intégration facile et un bon suivi dans nos études. ",
      Name: "Désiré Parfait NGAH",
      Profession: "Étudiante à ESPRIT",
    },
  ],
}
