import React, { forwardRef } from "react"
import { Formik } from "formik"
import { FaRegCheckCircle } from "react-icons/fa"
import { FormattedMessage, useIntl } from "react-intl"
import { Button, Input, TextArea, Checkbox } from "../../atoms"
import { ContactMeSectionWrapper, LeftSide, RightSide } from "./styles"

export const ContactMeSection = forwardRef<HTMLFormElement>(({}, ref) => {
  const intl = useIntl()

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
              <span>
                <FormattedMessage id="I_need" />
              </span>
            </h1>
            <ul>
              <li>
                <Checkbox>
                  <FormattedMessage id="web_design" />
                </Checkbox>
              </li>
              <li>
                <Checkbox>
                  <FormattedMessage id="web_dev" />
                </Checkbox>
              </li>
              <li>
                <Checkbox>
                  <FormattedMessage id="data_viz" />
                </Checkbox>
              </li>
            </ul>
          </LeftSide>
          <RightSide>
            <div>
              <Input
                name="full_name"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={intl.formatMessage({ id: "full_name" })}
                value={values.full_name}
              />
              {errors.full_name}
            </div>
            <div>
              <Input
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={intl.formatMessage({ id: "email" })}
                value={values.email}
              />
              {errors.email}
            </div>
            <div>
              <TextArea
                name="message"
                placeholder={intl.formatMessage({ id: "message" })}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.message}
            </div>
            <Button raised type="submit" disabled>
              <FormattedMessage id="send_message" />
            </Button>
            <Button
              as="a"
              href="mailto:sndegwa.n@outlook.com"
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <FormattedMessage id="send_email" />
            </Button>
          </RightSide>
        </ContactMeSectionWrapper>
      )}
    </Formik>
  )
})
