import React from "react"
import "react-bootstrap-typeahead/css/Typeahead.css"
import { Spinner } from "reactstrap"
import { ClearButton, Typeahead } from "react-bootstrap-typeahead"
import { useState, useEffect } from "react"
import { queryApi } from "../../../utils/queryApi"

export default function AutoCompleteMembers({ setValue, index, autocompleteUrl, filter }) {
  const [options, setOptions] = useState([])
  useEffect(() => {
    async function fetchData() {
      let [res] = await queryApi(autocompleteUrl)
      const filterIds = []
      filter &&
        filter.map(function (item) {
          const itemId = item["_id"]
          if (itemId !== undefined) {
            filterIds.push(item["_id"])
          }
          return true
        })
      if (filterIds.length > 0) {
        res = res.filter(function (el) {
          return filterIds.indexOf(el._id) < 0
        })
      }
      setOptions(res)
    }
    fetchData()
    // eslint-disable-next-line
  }, [])

  function handleChange(prop) {
    setValue(prop[0], index)
  }

  return (
    <Typeahead
      id="onclear-example"
      options={options}
      allowNew
      newSelectionPrefix="Ajouter le membre sans profile: "
      onChange={handleChange}
      labelKey={option => (option.customOption ? `${option.label}` : `${option.lastName} ${option.firstName}`)}
      placeholder="Choose a state...">
      {({ onClear, selected }) => (
        <div className="rbt-aux">
          {!!selected.length && <ClearButton onClick={onClear} />}
          {!selected.length && <Spinner animation="grow" size="sm" />}
        </div>
      )}
    </Typeahead>
  )
}
