import React from "react"
import { Helmet } from "react-helmet"

export default function MetaHelmet({ meta, script, script1 }) {
  return (
    <Helmet>
      <title>Esprit - {meta.title}</title>
      <meta property="og:title" content={meta.title} />
      <meta name="description" content={meta.description} />
      <meta property="og:description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      {meta.url && <meta property="og:url" content={`https://esprit.tn${meta.url}`} />}
      {meta.url ? (
        <link rel="canonical" href={`https://esprit.tn${meta.url}`} />
      ) : (
        <link rel="canonical" href="https://esprit.tn" />
      )}
      <meta property="og:type" content={meta.type ? meta.type : "website"} />
      <meta
        property="og:image"
        content={
          meta.image
            ? `${process.env.REACT_APP_API_URL_UPLOADS}${meta.image}`
            : `${process.env.REACT_APP_API_URL_UPLOADS}Logo_ESPRIT_og.jpg`
        }
      />
      <meta
        property="og:image:url"
        content={
          meta.image
            ? `${process.env.REACT_APP_API_URL_UPLOADS}${meta.image}`
            : "https://esprit.tn/uploads/Logo_ESPRIT_og.jpg"
        }
      />
      <meta
        property="og:image:secure_url"
        content={
          meta.image
            ? `${process.env.REACT_APP_API_URL_UPLOADS}${meta.image}`
            : "https://esprit.tn/uploads/Logo_ESPRIT_og.jpg"
        }
      />
      <meta property="og:locale" content="fr_FR" />
      {script && <script type="text/javascript" src={script}></script>}
      {script1 && <script type="text/javascript" src={script1}></script>}
    </Helmet>
  )
}
