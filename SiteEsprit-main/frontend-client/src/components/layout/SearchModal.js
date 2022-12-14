import React from "react"
import { Form, Modal } from "react-bootstrap"

import { useState } from "react"
import { useHistory } from "react-router-dom"

export default function SearchModal() {
  const [show, setShow] = useState(false)
  const [keyword, setKeyword] = useState("")
  const history = useHistory()

  function handleClose() {
    setShow(false)
  }
  function handleChange(e) {
    setKeyword(e.target.value)
  }

  function handleShow() {
    setShow(true)
  }

  function handleSubmit(e) {
    e.preventDefault()
    history.push("/recherche/" + keyword)
  }

  return (
    <>
      <button onClick={handleShow} className="search-toggle">
        <i className="icofont-search-1" />
      </button>

      <Modal show={show} onHide={handleClose} className="search-modal text-center modal fade">
        <Modal.Body>
          <div className="modal-content">
            <div className="modal-body">
              <div className="header-search-form">
                <Form onSubmit={handleSubmit}>
                  <input type="text" onChange={handleChange} placeholder="Recherche" />
                  <button>
                    <i className="icofont-search-1" />
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
