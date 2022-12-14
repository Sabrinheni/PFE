import React, { useState, useEffect } from "react"

const Checkmark = ({ selected }) => (
  <div style={selected ? { left: "4px", top: "4px", position: "absolute", zIndex: "1" } : { display: "none" }}>
    <svg height="12px" viewBox="0 0 365.71733 365" width="12px">
      <g fill="#f44336">
        <path d="m356.339844 296.347656-286.613282-286.613281c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503906-12.5 32.769532 0 45.25l286.613281 286.613282c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082032c12.523438-12.480468 12.523438-32.75.019532-45.25zm0 0" />
        <path d="m295.988281 9.734375-286.613281 286.613281c-12.5 12.5-12.5 32.769532 0 45.25l15.082031 15.082032c12.503907 12.5 32.769531 12.5 45.25 0l286.632813-286.59375c12.503906-12.5 12.503906-32.765626 0-45.246094l-15.082032-15.082032c-12.5-12.523437-32.765624-12.523437-45.269531-.023437zm0 0" />
      </g>
    </svg>
  </div>
)

const imgStyle = {
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s",
  objectFit: "contain"
}
const selectedImgStyle = {
  transform: "translateZ(0px) scale3d(0.9, 0.9, 1)",
  transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
}
const cont = {
  backgroundColor: "#eee",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative"
}

const SelectedImage = ({ index, photo, margin, direction, top, left, selected, setSelected }) => {
  const [isSelected, setIsSelected] = useState(selected)
  //calculate x,y scale
  const sx = (100 - (30 / photo.width) * 100) / 100
  const sy = (100 - (30 / photo.height) * 100) / 100
  selectedImgStyle.transform = `translateZ(0px) scale3d(${sx}, ${sy}, 1)`

  if (direction === "column") {
    cont.position = "absolute"
    cont.left = left
    cont.top = top
  }

  const handleOnClick = e => {
    setSelected(index)
    setIsSelected(!isSelected)
  }

  useEffect(() => {
    setIsSelected(selected)
  }, [selected])

  return (
    <div
      style={{ margin, height: photo.height, width: photo.width, ...cont }}
      className={!isSelected ? "not-selected" : ""}>
      <Checkmark selected={isSelected ? true : false} />
      <img
        alt={photo.title}
        style={isSelected ? { ...imgStyle, ...selectedImgStyle } : { ...imgStyle }}
        {...photo}
        onClick={handleOnClick}
      />
      <style>{`.not-selected:hover{outline:2px solid #06befa}`}</style>
    </div>
  )
}

export default SelectedImage
