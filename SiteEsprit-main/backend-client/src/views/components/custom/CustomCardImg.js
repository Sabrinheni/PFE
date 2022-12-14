import React, { useState } from "react"
import CardImg from "reactstrap/lib/CardImg"
import { Loading } from "../Loading"
import noimage from "../../../assets/img/noimage.png"

export function CustomCardImg({ image, src, isForm, ...rest }) {
  if (!src) src = image ? `${process.env.REACT_APP_API_URL_UPLOADS}${image}` : noimage
  const [isLoading, setIsLoading] = useState(true)

  function handleLoad() {
    setIsLoading(false)
  }

  return (
    <>
      <div className={isForm ? "image-container-form" : "image-container"} style={isLoading ? { display: "none" } : {}}>
        <CardImg onLoad={handleLoad} src={src} className="item-image" {...rest} />
      </div>
      {isLoading && <Loading color="secondary" />}
    </>
  )
}
