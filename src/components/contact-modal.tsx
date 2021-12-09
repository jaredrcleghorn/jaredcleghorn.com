import {
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Modal, Spinner } from "react-bootstrap"

type ContactModalProps = {
  resStatus: number | null
  show: boolean
  onExited: Function
  onHide: Function
}

export default function ContactModal(props: ContactModalProps) {
  return (
    <Modal
      centered
      contentClassName="bg-dark border-2 border-secondary mx-3"
      show={props.show}
      onExited={props.onExited}
      onHide={props.onHide}
    >
      <Modal.Header
        className="border-secondary"
        closeButton
        closeVariant="white"
      >
        <Modal.Title>Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text-center">
        {props.resStatus === null ? (
          <Spinner animation="border" />
        ) : props.resStatus === 200 ? (
          <FontAwesomeIcon
            className="text-success"
            icon={faCheckCircle}
            size="3x"
          />
        ) : (
          <>
            <FontAwesomeIcon
              className="text-danger"
              icon={faExclamationCircle}
              size="3x"
            />
            <p className="mt-2 mb-0">
              Oops! Something went wrong. Please try again in a moment.
            </p>
          </>
        )}
      </Modal.Body>
    </Modal>
  )
}
