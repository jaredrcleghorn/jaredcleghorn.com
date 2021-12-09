import React, { FormEventHandler, useState } from "react"
import { Button, Form } from "react-bootstrap"
import ContactModal from "./contact-modal"
import FormGroup from "./form-group"

type ContactFormProps = { className: string }

export default function ContactForm(props: ContactFormProps) {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [subject, setSubject] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const [showModal, setShowModal] = useState<boolean>(false)
  const [resStatus, setResStatus] = useState<number | null>(null)

  const isValid = [name, email, subject, message].every(x => x !== "")

  const handleSubmit: FormEventHandler = async e => {
    e.preventDefault()

    setShowModal(true)

    const res = await fetch(`${process.env.API_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, subject, message }),
    })

    setResStatus(res.status)
  }

  return (
    <Form className={props.className} onSubmit={handleSubmit}>
      <FormGroup
        label="Name"
        placeholder="John Doe"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <FormGroup
        className="mt-3"
        label="Email"
        placeholder="johndoe@example.com"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <FormGroup
        className="mt-3"
        label="Subject"
        placeholder="Hello"
        value={subject}
        onChange={e => setSubject(e.target.value)}
      />
      <FormGroup
        as="textarea"
        className="mt-3"
        label="Message"
        placeholder="What's up?"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <Button
        className="mt-3"
        disabled={!isValid}
        type="submit"
        variant="danger"
      >
        Submit
      </Button>
      <ContactModal
        resStatus={resStatus}
        show={showModal}
        onExited={() => setResStatus(null)}
        onHide={() => setShowModal(false)}
      />
    </Form>
  )
}
