import React from "react"
import { Formik } from "formik"
import { Button, Input, TextArea } from "../../atoms"
import { ContactMeSectionWrapper } from "./styles"

export const ContactMeSection = () => {
  return (
    <ContactMeSectionWrapper>
      <Input name="email" placeholder="Your email" />
      <TextArea name="message" placeholder="Your Message" />
      {/**<Button>
        Send Message
      </Button>**/}
    </ContactMeSectionWrapper>
  )
}
