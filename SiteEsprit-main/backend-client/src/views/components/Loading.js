import React from "react"
import Spinner from "reactstrap/lib/Spinner"

export function Loading({
  className = "text-center",
  style = { width: "140px", height: "140px" },
  color = "info",
  ...rest
}) {
  return (
    <div className={className}>
      <Spinner color={color} style={style} {...rest} />
    </div>
  )
}
