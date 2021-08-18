import React, { forwardRef } from "react"
import { Formik } from "formik"
import { Button, Input, TextArea } from "../../atoms"
import { ContactMeSectionWrapper } from "./styles"

export const ContactMeSection = forwardRef<HTMLDivElement>(({ }, ref) => {
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
        <ContactMeSectionWrapper ref={ref}>
          <section>
            <h2>I need your help with</h2>
            <ul>
              <li>Web design</li>
              <li>Web development</li>
              <li>Data visualization</li>
            </ul>
          </section>
          <section>
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
          </section>
        </ContactMeSectionWrapper>
      )}
    </Formik>
  )
})
