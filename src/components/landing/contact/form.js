import React from "react"
import styles from "./index.module.css"
import Formol, { Field } from "formol";
import "formol/lib/default.css";
const handleSubmit = async values => {
  console.log(values);

  // process submission (e.g., send to API)...
};

const Form = () => (
  <Formol onSubmit={handleSubmit}>
    <Field required>First name</Field>
    <Field required>Last name</Field>
    <Field required type="email">E-mail</Field>
    <Field required>Message</Field>
  </Formol>
)

export default Form;