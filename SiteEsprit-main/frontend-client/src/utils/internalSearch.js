import { ContactEtInfo, EspritIngenieur, Procedure } from "pages/admission/AdmissionDictionary"

import {
  GouvernanceStrategique,
  LePlusDEsprit,
  MotDuPresident,
  PolitiqueQualite,
  SalleDePresse,
  ValeursEcole,
  ServicesEcole,
} from "pages/esprit/EspritDictionary"

import {
  APTIS,
  EspritEntreprise,
  FormationCertifiante,
  PresentationELC,
  Stages,
  TEFTFAQ,
} from "pages/entreprises/EntreprisesDictionary"

import { Experience, Partenariat, VenirAEsprit } from "pages/international/InternationalDictionary"

import {
  CalendrierExamen,
  CoursDuSoir,
  LanguesEtDev,
  PresentationIngenieur,
  SpecialiteEtOptions,
} from "pages/formations/FormationsDictionary"

import {
  CelluleEcoute,
  Clubs,
  EspritFondation,
  Infrastructure,
  EventsPage,
  LogementRestauration,
  PresentationVieEtudiante,
} from "pages/vieetudiante/VieEtudianteDictionary"

export async function internalSearch(keyword) {
  //Normalize keyword to remove accents
  keyword = normalize(keyword.trim())
  const pagesToSearch = [
    ContactEtInfo,
    EspritIngenieur,
    Procedure,
    GouvernanceStrategique,
    LePlusDEsprit,
    MotDuPresident,
    PolitiqueQualite,
    SalleDePresse,
    ValeursEcole,
    ServicesEcole,
    APTIS,
    EspritEntreprise,
    FormationCertifiante,
    PresentationELC,
    Stages,
    TEFTFAQ,
    CelluleEcoute,
    Clubs,
    EspritFondation,
    Infrastructure,
    EventsPage,
    LogementRestauration,
    PresentationVieEtudiante,
    Experience,
    Partenariat,
    VenirAEsprit,
    CalendrierExamen,
    CoursDuSoir,
    LanguesEtDev,
    PresentationIngenieur,
    SpecialiteEtOptions,
  ]
  let result = []
  pagesToSearch.forEach(page => {
    const regex = new RegExp(keyword.toLowerCase(), "i")
    if (
      normalize(page.content).search(regex) > -1 ||
      normalize(page.title).search(regex) > -1 ||
      normalize(page.subtitle).search(regex) > -1 ||
      normalize(page.keywords).search(regex) > -1
    ) {
      result.push(page)
    }
  })
  return result
}

function normalize(string) {
  return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}
