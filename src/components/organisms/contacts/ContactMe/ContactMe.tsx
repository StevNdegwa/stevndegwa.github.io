import React, { forwardRef } from "react";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone, FaLocationDot } from "react-icons/fa6";
import { Formik } from "formik";
import { Box, Button, Input, TextArea, Text } from "@components/atoms";
import { Section } from "../Section";
import { FlexBox } from "@components/molecules";
import { ContactForm, ContactInfo, Fieldset, Wrapper } from "./styles";

export const ContactMe = forwardRef<HTMLFormElement>(({}, ref) => {
  return (
    <Section>
      <Wrapper>
        <ContactInfo
          initial={{
            background: `linear-gradient(
            135deg,
            var(--primary-color-transparent-7) 0%,
            var(--secondary-color-transparent-7) 10%,
            var(--secondary-color-transparent-7) 100%
          )`,
          }}
          animate={{
            background: [
              `linear-gradient(
              135deg,
              var(--primary-color-transparent-7) 0%,
              var(--primary-color-transparent-7) 60%,
              var(--secondary-color-transparent-7) 95%,
              var(--secondary-color-transparent-7) 100%
            )`,
              `linear-gradient(
              135deg,
              var(--primary-color-transparent-7) 0%,
              var(--primary-color-transparent-7) 80%,
              var(--secondary-color-transparent-7) 95%,
              var(--secondary-color-transparent-7) 100%
            )`,
            ],
          }}
          transition={{
            type: "tween",
            stiffness: 100,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <FlexBox direction="column" gap="sm">
            <Text heading="h3" weight="medium" size="xl">
              Contact Me
            </Text>
            <Text element="p" size="md">
              I am always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </Text>
          </FlexBox>
          <FlexBox direction="column" gap="sm">
            <FlexBox gap="sm" align="center">
              <MdEmail size={32} />
              <Text size="lg" weight="medium">
                sndegwa.n@outlook.com
              </Text>
            </FlexBox>
            <FlexBox gap="sm" align="center">
              <FaSquarePhone size={32} />
              <Text size="lg" weight="medium">
                +254 702 297 962
              </Text>
            </FlexBox>
            <FlexBox gap="sm" align="center">
              <FaLocationDot size={32} />
              <Text size="lg" weight="medium">
                Nairobi, kenya
              </Text>
            </FlexBox>
          </FlexBox>
        </ContactInfo>
        <ContactForm>
          <Formik
            initialValues={{
              email: "",
              message: "",
              full_name: "",
            }}
            onSubmit={({ email, message, full_name }) => {
              console.log("Email", email);
              console.log("Message", message);
              console.log("Full name", full_name);
            }}
          >
            {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
              <form ref={ref} onSubmit={handleSubmit}>
                <Fieldset>
                  <legend>
                    <Text weight="medium" size="lg">
                      Send a message
                    </Text>
                  </legend>
                  <FlexBox direction="column" gap="sm">
                    <Box>
                      <Input
                        name="full_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.full_name}
                        placeholder="Name"
                      />
                      {errors.full_name}
                    </Box>
                    <Box>
                      <Input
                        name="contact"
                        placeholder="Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {errors.email}
                    </Box>
                    <Box>
                      <TextArea
                        name="message"
                        placeholder="Message"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.message}
                    </Box>
                    <FlexBox gap="md">
                      <Button type="submit" variant="outline" disabled>
                        Send Message
                      </Button>
                      <Button
                        href="mailto:sndegwa.n@outlook.com"
                        variant="outline"
                        color="dark"
                      >
                        Send Email
                      </Button>
                    </FlexBox>
                  </FlexBox>
                </Fieldset>
              </form>
            )}
          </Formik>
        </ContactForm>
      </Wrapper>
    </Section>
  );
});
