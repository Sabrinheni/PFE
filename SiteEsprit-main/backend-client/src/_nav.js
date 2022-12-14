import { getUserFromToken } from "./utils/getUserFromToken"
const user = getUserFromToken()

const isRdi = "/" + (user.rdi ? user.rdi : "")

const items = [
  {
    title: true,
    name: "ESPRIT ADMINSPACE",
  },
  {
    name: "Dashboard",
    url: "/dashboard" + isRdi,
    icon: "icon-speedometer",
  },
]
const home = {
  name: "Page Accueil",
  icon: "fa fa-home",
  children: [
    {
      name: "Afficher",
      url: "/slider",
      icon: "fa fa-bars",
    },
  ],
}

const club = {
  name: "Club",
  icon: "fa fa-group",
  children: [
    {
      name: "Afficher",
      url: "/club",
      icon: "fa fa-bars",
    },
  ],
}

const unit = {
  name: "Unités d'enseignement",
  icon: "fa fa-group",
  children: [
    {
      name: "Afficher",
      url: "/unit",
      icon: "fa fa-bars",
    },
  ],
}

const production = {
  name: "Productions",
  icon: "fa fa-group",
  children: [
    {
      name: "Afficher",
      url: "/production",
      icon: "fa fa-bars",
    },
  ],
}

const rdi = {
  name: "RDI",
  icon: "fa fa-home",
  children: [
    {
      name: "Afficher",
      url: "/rdi",
      icon: "fa fa-bars",
    },
  ],
}

const faq = {
  name: "FAQ",
  icon: "fa fa-home",
  children: [
    {
      name: "Afficher",
      url: "/faq",
      icon: "fa fa-bars",
    },
  ],
}

const partnership = {
  name: "Partenariat",
  icon: "fa fa-home",
  children: [
    {
      name: "Afficher",
      url: "/partnership",
      icon: "fa fa-bars",
    },
  ],
}

const press = {
  name: "Press",
  icon: "fa fa-newspaper-o",
  children: [
    {
      name: "Afficher",
      url: "/press",
      icon: "fa fa-bars",
    },
  ],
}
const EspritIngenieur = {
  name: "Esprit Ingenieur",
  icon: "fa fa-window-maximize",
  children: [
    {
      name: "Afficher",
      url: "/EspritIngenieur",
      icon: "fa fa-bars",
    },
  ],
}
const ResultatCameroun = {
  name: "Resultat Cameroun",
  icon: "fa fa-check-square",
  children: [
    {
      name: "Afficher",
      url: "/ResultatCameroun",
      icon: "fa fa-bars",
    },
  ],
}

const event = {
  name: "Evénements",
  icon: "fa fa-quote-right",
  children: [
    {
      name: "Afficher",
      url: "/event",
      icon: "fa fa-bars",
    },
  ],
}

const timeTable = {
  name: "Fichiers utiles",
  icon: "fa fa-calendar",
  children: [
    {
      name: "Afficher",
      url: "/timetable",
      icon: "fa fa-bars",
    },
  ],
}

const tefTefaq = {
  name: "Tef & Tefaq",
  icon: "fa fa-calendar",
  children: [
    {
      name: "Afficher",
      url: "/teftefaq",
      icon: "fa fa-bars",
    },
  ],
}

const member = {
  name: "Membre RDI",
  icon: "fa fa-group",
  children: [
    {
      name: "Afficher",
      url: "/member",
      icon: "fa fa-bars",
    },
  ],
}

if (user.roles.includes("admin") || user.roles.includes("createSlider")) {
  home.children.push({
    name: "Ajouter",
    url: "/slider/add",
    icon: "fa fa-plus",
  })
}
if (
  user.roles.includes("admin") ||
  user.roles.includes("deleteSlider") ||
  user.roles.includes("updateSlider") ||
  user.roles.includes("createSlider") ||
  user.roles.includes("handleArchivedSlider")
) {
  items.push(home)
}

if (user.roles.includes("admin") || user.roles.includes("createClub")) {
  club.children.push({
    name: "Ajouter",
    url: "/club/add",
    icon: "fa fa-plus",
  })
}
if (
  user.roles.includes("admin") ||
  user.roles.includes("deleteClub") ||
  user.roles.includes("updateClub") ||
  user.roles.includes("createClub")
) {
  items.push(club)
}

if (user.roles.includes("admin") || user.roles.includes("createFaq")) {
  faq.children.push({
    name: "Ajouter",
    url: "/faq/add",
    icon: "fa fa-plus",
  })
}
if (
  user.roles.includes("admin") ||
  user.roles.includes("deleteFaq") ||
  user.roles.includes("updateFaq") ||
  user.roles.includes("createFaq")
) {
  items.push(faq)
}

if (user.roles.includes("admin") || user.roles.includes("createPartnership")) {
  partnership.children.push({
    name: "Ajouter",
    url: "/partnership/add",
    icon: "fa fa-plus",
  })
}
if (
  user.roles.includes("admin") ||
  user.roles.includes("deletePartnership") ||
  user.roles.includes("createPartnership") ||
  user.roles.includes("updatePartnership")
) {
  items.push(partnership)
}

if (user.roles.includes("admin") || user.roles.includes("createPress")) {
  press.children.push({
    name: "Ajouter",
    url: "/press/add",
    icon: "fa fa-plus",
  })
}
if (
  user.roles.includes("admin") ||
  user.roles.includes("deletePress") ||
  user.roles.includes("updatePress") ||
  user.roles.includes("createPress") ||
  user.roles.includes("handleArchivedPress")
) {
  items.push(press)
}
if (user.roles.includes("admin") || user.roles.includes("createEspritIngenieur")) {
  EspritIngenieur.children.push({
    name: "Ajouter",
    url: "/EspritIngenieur/add",
    icon: "fa fa-plus",
  })
}
if (
  user.roles.includes("admin") ||
  user.roles.includes("deleteEspritIngenieur") ||
  user.roles.includes("updateEspritIngenieur") ||
  user.roles.includes("createEspritIngenieur") ||
  user.roles.includes("handleArchivedEspritIngenieur")
) {
  items.push(EspritIngenieur)
}
if (user.roles.includes("admin") || user.roles.includes("createResultatCameroun")) {
  ResultatCameroun.children.push({
    name: "Ajouter",
    url: "/ResultatCameroun/add",
    icon: "fa fa-plus",
  })
}
if (
  user.roles.includes("admin") ||
  user.roles.includes("deleteResultatCameroun") ||
  user.roles.includes("updateResultatCameroun") ||
  user.roles.includes("createResultatCameroun") ||
  user.roles.includes("handleArchivedResultatCameroun")
) {
  items.push(ResultatCameroun)
}

if (user.roles.includes("admin") || user.roles.includes("createUnit")) {
  unit.children.push({
    name: "Ajouter",
    url: "/unit/add",
    icon: "fa fa-plus",
  })
}
if (
  user.roles.includes("admin") ||
  user.roles.includes("deleteUnit") ||
  user.roles.includes("createUnit") ||
  user.roles.includes("updateUnit") ||
  user.roles.includes("handleArchivedUnit")
) {
  items.push(unit)
}

if (user.roles.includes("admin") || user.roles.includes("createEvent")) {
  event.children.push({
    name: "Ajouter",
    url: "/event/add",
    icon: "fa fa-plus",
  })
}
if (
  user.roles.includes("admin") ||
  user.roles.includes("createEvent") ||
  user.roles.includes("deleteEvent") ||
  user.roles.includes("updateEvent") ||
  user.roles.includes("handleArchivedEvent")
) {
  items.push(event)
}

if (user.roles.includes("admin") || user.roles.includes("createTimeTable")) {
  timeTable.children.push({
    name: "Ajouter",
    url: "/timetable/add",
    icon: "fa fa-plus",
  })
}
if (
  user.roles.includes("admin") ||
  user.roles.includes("createTimeTable") ||
  user.roles.includes("deleteTimeTable") ||
  user.roles.includes("updateTimeTable") ||
  user.roles.includes("handleArchivedTimeTable")
) {
  items.push(timeTable)
}

if (user.roles.includes("admin") || user.roles.includes("createTefTefaq")) {
  tefTefaq.children.push({
    name: "Ajouter",
    url: "/teftefaq/add",
    icon: "fa fa-plus",
  })
}
if (
  user.roles.includes("admin") ||
  user.roles.includes("createTefTefaq") ||
  user.roles.includes("deleteTefTefaq") ||
  user.roles.includes("updateTefTefaq") ||
  user.roles.includes("handleArchivedTefTefaq")
) {
  items.push(tefTefaq)
}
items.push({
  title: true,
  name: "RDI ADMINSPACE",
})
if (user.roles.includes("admin") || user.roles.includes("createRdi")) {
  rdi.children.push({
    name: "Ajouter",
    url: "/rdi/add",
    icon: "fa fa-plus",
  })
}
if (
  user.roles.includes("admin") ||
  user.roles.includes("deleteRdi") ||
  user.roles.includes("updateRdi") ||
  user.roles.includes("createRdi")
) {
  items.push(rdi)
}

if (user.roles.includes("admin") || user.roles.includes("createMember")) {
  member.children.push({
    name: "Ajouter",
    url: "/member/add",
    icon: "fa fa-plus",
  })
}

if (
  user.roles.includes("admin") ||
  user.roles.includes("deleteMember") ||
  user.roles.includes("updateMember") ||
  user.roles.includes("createMember")
) {
  items.push(member)
}

if (
  user.roles.includes("admin") ||
  user.roles.includes("deleteProduction") ||
  user.roles.includes("updateProduction") ||
  user.roles.includes("createProduction")
) {
  production.children.push({
    name: "Ajouter",
    url: "/production/add",
    icon: "fa fa-plus",
  })
  items.push(production)
}

if (user.roles.includes("admin")) {
  items.push({
    title: true,
    name: "USER ADMINSPACE",
  })
  items.push({
    name: "Gestion Utilisateur",
    url: "/user",
    icon: "fa fa-group",
  })
}

export default { items }
