import React from "react"
import uuid from "react-uuid"

/**
 *
 * @param {Object} options object of types to add to select options
 */
export function CustomOptions({ options = {} }) {
  return (
    <>
      {Object.keys(options).map(type => (
        <option key={uuid()} value={type}>
          {options[type]}
        </option>
      ))}
    </>
  )
}
