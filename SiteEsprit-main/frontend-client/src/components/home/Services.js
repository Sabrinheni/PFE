import PropTypes from "prop-types"
import React, { Component } from "react"
import ScrollAnimation from "react-animate-on-scroll"

export default class Services extends Component {
  render() {
    //Service loop start
    const servicedata = this.props.servicesData.map((service, index) => (
      <div className="col-md-6 col-lg-4 text-center" key={index}>
        <div className="service-item">
          <div className="glyph">
            <i className={service.icon} />
          </div>
          <h3>{service.heading}</h3>
          <p>{service.description}</p>
        </div>
      </div>
    ))
    //Service loop END
    return (
      <>
        <section id="services" className="services ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <ScrollAnimation animateIn="fadeInUp">
                  <div className="section-title">
                    <h2>{this.props.sectionTitle}</h2>
                    <p>{this.props.sectionDescription}</p>
                    <span className="section-title-bg">{this.props.SectionbgTitle}</span>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
            <div className="row">{servicedata}</div>
          </div>
        </section>
      </>
    )
  }
}

//Props Types
Services.propTypes = {
  SectionbgTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
  servicesData: PropTypes.array,
}

//Default Props
Services.defaultProps = {
  SectionbgTitle: "ESPRIT",
  sectionTitle: "LES PLUS D'ESPRIT",
  sectionDescription: "ESPRIT est plus qu'une école, c'est un portail vers un avenir meilleur.",

  servicesData: [
    {
      icon: "icofont-education",
      heading: "Une pédagogie innovante",
      description: "L’APP (Apprentissage Par Projets/Problèmes) rend l’étudiant pleinement acteur de sa formation.",
    },
    {
      icon: "icofont-certificate-alt-2",
      heading: "Une reconnaissance internationale des formations d’ingénieur",
      description:
        "En septembre 2017, l'ensemble des formations d'Esprit ont obtenu l’accréditation d'EUR-ACE fournie par l'organisation française CTI (Comité des titres d’ingénieurs)",
    },
    {
      icon: "icofont-search-job",
      heading: "Le suivi de l'employabilité de nos étudiants à travers l'enquête 1er emploi",
      description: "Chaque année pour une adaptation continuelle de nos formations aux besoins des entreprises.",
    },
    {
      icon: "icofont-globe-alt ",
      heading: "Une grande mobilité à l'international",
      description: "Plus de 40 possibilités d'avoir une expérience de vie dans un milieu multiculturel",
    },
    {
      icon: "icofont-graduate-alt",
      heading: "Le développement des qualités humaines des étudiants",
      description: "A travers les enseignements de langue, de culture générale, l'engagement associatif...",
    },
    {
      icon: "icofont-rocket-alt-1",
      heading: "La valorisation des compétences opérationnelles",
      description: "Des activités effectivement réalisées par des ingénieurs en situation professionnelle.",
    },
  ],
}
