require("@babel/register")({
  extends: "./.babelrc",
})
require("dotenv").config()

const router = require("./sitemap-router").default
const Sitemap = require("react-router-sitemap").default
const axios = require("axios").default
const fs = require("fs")
const xml2js = require("xml2js")

async function generateSiteMap() {
  const parser = new xml2js.Parser()

  const filterConfig = {
    isValid: false,
    rules: [/\/admin/, /\*/],
  }

  await axios
    .post(process.env.BASE_URL + "api/636c6561726361636865736563726574657370726974726f757465")
    .then(() => {
      console.log("Axios Clear Cache Success")
    })
    .catch(err => {
      console.log("Axios Clear Cache Error")
      console.log(err)
    })

  //GENERATE IDS ARRAY
  console.log("Start id maps 1")
  const idMapEvents = await mapGeneratorUrl("api/events/esprit", "/actualite/")
  console.log("Start id maps 2")
  const idMapEventsPrepa = await mapGeneratorUrl("api/events/prepa", "/actualite/")
  console.log("Start id maps 3")
  const idMapEventsRdi = await mapGeneratorUrl("api/events/rdi", "/actualite/")
  console.log("Start id maps 4")
  const idMapRdis = await mapGeneratorSlug("api/rdis")
  console.log("Start id maps 5")
  const idMapMembers = await mapGeneratorSlug("api/members")
  const paramsConfig = {
    "/actualite/:slug": idMapEvents,
    "/rdi/actualite/:slug": idMapEventsRdi,
    "/prepa/actualite/:slug": idMapEventsRdi,
    "/rdi/equipe/:slug": idMapRdis,
    "/rdi/membre/:slug": idMapMembers,
  }
  console.log("Saving SourceMap")

  new Sitemap(router)
    .filterPaths(filterConfig)
    .applyParams(paramsConfig)
    .build(process.env.BASE_URL, { limitCountPaths: 5000 })
    .save("../frontend-client/public/sitemap.xml", "/public/")
  console.log("Reading sitemap.xml")
  let toCache = []
  const jsonIndex = []
  await fs.readFile("../frontend-client/public/sitemap.xml", async function (err, data) {
    await parser.parseString(data, async function (err, result) {
      const urls = result.urlset.url
      urls.forEach(u => toCache.push(u.loc[0]))
      console.log("Starting cache update ...")
      for (let index = 0; index < toCache.length; index++) {
        const url = toCache[index]
        console.log(url + " : starting ...")
        await axios
          .get(url, { headers: { "User-Agent": "EspritBot" } })
          .then(res => {
            if (!url.includes("/actualite/") && !url.includes("/equipe/") && !url.includes("/membre/")) {
              result = res.data
              result.content = result.content.replace("\n", " ").replace(/\n/g, " ")
              const toIndex = { url, content: result }
              jsonIndex.push(toIndex)
            }
            console.log(url + " : done")
          })
          .catch(err => console.error(err.message))
      }
      fs.writeFileSync("../esprit-backend/public/index.json", JSON.stringify(jsonIndex))
    })

    console.log("Server Cache Updated")
  })
}

async function mapGeneratorUrl(apiUrl, startsWith) {
  let idMap = []
  //CALL API
  console.log("Starting SourceMap " + apiUrl)
  console.log("Starting Axios Get")
  try {
    await axios
      .get(process.env.BASE_URL + apiUrl)
      .then(res => {
        res.data.map(ev => {
          if (ev.url && ev.url.startsWith(startsWith)) {
            console.log(ev.slug)
            idMap.push({ slug: ev.slug })
          }
        })
        console.log("Axios Get Success")
      })
      .catch(err => {
        console.log(err)
        console.log("Axios Get Error")
      })
  } catch (error) {
    console.log(error)
  }

  return idMap
}

async function mapGeneratorSlug(apiUrl) {
  let idMap = []
  //CALL API
  console.log("Starting SourceMap " + apiUrl)
  console.log("Starting Axios Get")
  await axios
    .get(process.env.BASE_URL + apiUrl)
    .then(res => {
      res.data.map(ev => {
        idMap.push({ slug: ev.slug })
      })
      console.log("Axios Get Success")
    })
    .catch(err => {
      console.log("Axios Get Error")
      console.log(err)
    })

  return idMap
}

generateSiteMap()
