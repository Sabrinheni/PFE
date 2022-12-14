import AvFeedback from "availity-reactstrap-validation/lib/AvFeedback"
import AvGroup from "availity-reactstrap-validation/lib/AvGroup"
import AvInput from "availity-reactstrap-validation/lib/AvInput"
import React from "react"
import Button from "reactstrap/lib/Button"
import Col from "reactstrap/lib/Col"
import FormGroup from "reactstrap/lib/FormGroup"
import Label from "reactstrap/lib/Label"
import { FIELD_NOT_EMPTY } from "../../../enums/errors.enum"
import AutoCompleteMembers from "./AutoCompleteMembers"

export default function ListOf({ list, setList, buttonText, listName, autocompleteUrl }) {
  function handleMembersChange(e, idx) {
    const updatedList = list
    updatedList[idx] = e.target.value
    setList(updatedList)
  }

  function addInput() {
    setList([...list, ""])
  }

  function deleteInput(idx) {
    const updatedList = list
    updatedList.splice(idx, 1)
    setList(updatedList)
  }

  function addSuggested(suggested, index) {
    const updatedList = list
    if (suggested.customOption) {
      updatedList[index] = suggested.label
    } else {
      updatedList[index] = suggested
    }
    setList(updatedList)
  }

  return (
    <>
      <FormGroup row>
        <Col md="3"></Col>
        <Col xs="12" md="9">
          <Button color="info" onClick={e => addInput(e)}>
            {buttonText}
          </Button>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Col md="3">
          <Label htmlFor="text-input">{listName}</Label>
        </Col>
        <Col xs="12" md="9">
          {list.map((value, idx) => (
            <div className="dynamic-input" key={idx}>
              {value === "" && autocompleteUrl !== "" && (
                <AutoCompleteMembers
                  setValue={addSuggested}
                  index={idx}
                  autocompleteUrl={autocompleteUrl}
                  filter={list}
                />
              )}
              {value !== "" && autocompleteUrl !== "" && (
                <AvGroup>
                  <AvInput
                    required
                    disabled
                    name={"list" + listName.replace(" ", "-") + idx}
                    id={"list" + listName.replace(" ", "-") + idx}
                    onChange={event => handleMembersChange(event, idx)}
                    value={typeof list[idx] === "string" ? list[idx] : list[idx].lastName + " " + list[idx].firstName}
                  />
                  <AvFeedback className="text-capitalize">{FIELD_NOT_EMPTY}</AvFeedback>
                </AvGroup>
              )}
              {autocompleteUrl === "" && (
                <AvGroup>
                  <AvInput
                    required
                    name={"list" + listName.replace(" ", "-") + idx}
                    id={"list" + listName.replace(" ", "-") + idx}
                    onChange={event => handleMembersChange(event, idx)}
                    value={list[idx]}
                  />
                  <AvFeedback className="text-capitalize">{FIELD_NOT_EMPTY}</AvFeedback>
                </AvGroup>
              )}
              <Button color="info" onClick={() => deleteInput(idx)}>
                Supprimer
              </Button>
            </div>
          ))}
        </Col>
      </FormGroup>
    </>
  )
}
