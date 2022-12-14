import React from "react"

const imgStyle = {
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s",
  objectFit: "contain"
}
const cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative"
}

const SelectedImage = ({ index, photo, margin, direction, top, left }) => {
  if (direction === "column") {
    cont.position = "absolute"
    cont.left = left
    cont.top = top
  }
  return (
    <div key={index} style={{ margin, height: photo.height, width: photo.width, ...cont }}>
      <img alt={photo.title} style={{ ...imgStyle }} {...photo} />
    </div>
  )
}

export default SelectedImage
