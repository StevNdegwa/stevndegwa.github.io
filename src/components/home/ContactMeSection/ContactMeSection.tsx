import React, { forwardRef } from "react"
import { Formik } from "formik"
import { FaRegCheckCircle } from "react-icons/fa"
import { Button, Input, TextArea, Checkbox } from "../../atoms"
import { ContactMeSectionWrapper, LeftSide, RightSide } from "./styles"

export const ContactMeSection = forwardRef<HTMLFormElement>(({}, ref) => {
  return (
    <Formik
      initialValues={{
        email: "",
        message: "",
        full_name: "",
      }}
      onSubmit={({ email, message, full_name }) => {
        console.log("Email", email)
        console.log("Message", message)
        console.log("Full name", full_name)
      }}
    >
      {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
        <ContactMeSectionWrapper ref={ref} onSubmit={handleSubmit}>
          <LeftSide>
            <h1>
              <span>
                <FaRegCheckCircle /> &nbsp;
              </span>
              <span>I need help with</span>
            </h1>
            <ul>
              <li>
                <Checkbox>Web design</Checkbox>
              </li>
              <li>
                <Checkbox>Web development</Checkbox>
              </li>
              <li>
                <Checkbox>Data visualization</Checkbox>
              </li>
            </ul>
          </LeftSide>
          <RightSide>
            <div>
              <Input
                name="full_name"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your full name"
                value={values.full_name}
              />
              {errors.full_name}
            </div>
            <div>
              <Input
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your email"
                value={values.email}
              />
              {errors.email}
            </div>
            <div>
              <TextArea
                name="message"
                placeholder="Your Message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.message}
            </div>
            <Button raised type="submit">
              Send Message
            </Button>
          </RightSide>
        </ContactMeSectionWrapper>
      )}
    </Formik>
  )
})
