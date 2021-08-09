import React, { FC } from "react"
import { Formik } from "formik"
import { Button, Input, TextArea } from "../../atoms"
import { ContactMeSectionWrapper } from "./styles"

export const ContactMeSection: FC = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        message: "",
      }}
      onSubmit={({ email, message }) => {
        console.log("Email", email)
        console.log("Message", message)
      }}
    >
      {({ values, errors, handleChange, handleBlur }) => (
        <ContactMeSectionWrapper>
          <Input
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your email"
            value={values.email}
          />
          {errors.email}
          <TextArea
            name="message"
            placeholder="Your Message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message}
          <Button raised>Send Message</Button>
        </ContactMeSectionWrapper>
      )}
    </Formik>
  )
}
