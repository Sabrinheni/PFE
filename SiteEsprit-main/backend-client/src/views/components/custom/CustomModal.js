import React from "react"
import Modal from "reactstrap/lib/Modal"
import ModalHeader from "reactstrap/lib/ModalHeader"
import ModalBody from "reactstrap/lib/ModalBody"
import ModalFooter from "reactstrap/lib/ModalFooter"
import Button from "reactstrap/lib/Button"
import parse from "html-react-parser"
/**
 *
 * @param onAbort function to set current modal attributes (from parent useState hook)
 * @param onConfirm function to execute for confirmation case
 *
 * @example
 * //in this case modal must have all the attributes
 * //along with onAbort & onConfirm function
 * <CustomModal {...modal} />
 * //Another case to execute always the same onAbort function
 * <CustomModal {...modal} onAbort={abortFn}/>
 * //Another case to execute always both
 * <CustomModal {...modal} onAbort={abortFn} onConfirm={confirmFn}/>
 */
export function CustomModal({
  isOpen = false,
  title = "",
  body = "",
  confirmBtnTxt = "",
  onAbort = () => {},
  onConfirm = () => {},
}) {
  return (
    <Modal isOpen={isOpen} toggle={onAbort} centered>
      <ModalHeader toggle={onAbort}>{title}</ModalHeader>
      <ModalBody>{parse(body)}</ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={onConfirm}>
          {confirmBtnTxt}
        </Button>
        <Button color="secondary" onClick={onAbort}>
          Annuler
        </Button>
      </ModalFooter>
    </Modal>
  )
}
