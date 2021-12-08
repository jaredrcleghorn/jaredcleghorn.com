import React, { ChangeEvent, ElementType } from "react"
import { Form } from "react-bootstrap"

type FormGroupProps = {
  as?: ElementType
  className?: string
  label: string
  placeholder: string
  type?: string
  value: string
  onChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void
}

export default function FormGroup(props: FormGroupProps) {
  return (
    <Form.Group className={props.className}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        as={props.as}
        className="bg-dark border-2 border-secondary text-white"
        placeholder={props.placeholder}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </Form.Group>
  )
}
