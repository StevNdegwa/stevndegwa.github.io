import React, { forwardRef } from "react";
import { MdEmail } from "react-icons/md";
import { BsSendSlashFill, BsSendCheckFill } from "react-icons/bs";
import { FaSquarePhone, FaLocationDot } from "react-icons/fa6";
import { Box, Button, Input, TextArea, Text } from "@components/atoms";
import { Section } from "../Section";
import { FlexBox } from "@components/molecules";
import {
  ContactForm,
  ContactInfo,
  Fieldset,
  FormLoader,
  Wrapper,
} from "./styles";

export const ContactMe = forwardRef<HTMLFormElement>(({}, ref) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const isDisabled = !name || !email || !message;

  return (
    <Section>
      <Wrapper
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "tween",
          stiffness: 100,
          duration: 0.5,
          bounce: 0.4,
        }}
      >
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
        <ContactForm gap="md" direction="column">
          <form
            ref={ref}
            method="POST"
            name="contact"
            className="gform"
            action="https://script.google.com/macros/s/AKfycby2VlvSoHyGRzmxPz8v_bWRlvkb5T45vEarCkkETz0iJHiuIu_fG1LRUzZGbRq6oErtuw/exec"
            onSubmit={(e) => {
              e.preventDefault();

              setIsSubmitting(true);

              fetch(e.currentTarget.action, {
                method: e.currentTarget.method,
                body: new URLSearchParams(new FormData(e.currentTarget) as any),
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
              })
                .then((response) => {
                  if (response.ok) {
                    setIsSubmitted(true);
                  } else {
                    setIsSubmitted(false);
                  }
                })
                .catch((error) => {
                  console.error("Error submitting form:", error);
                })
                .finally(() => {
                  setIsSubmitting(false);
                });
            }}
          >
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
                    placeholder="Name"
                    onChange={(evt) => setName(evt.currentTarget.value)}
                  />
                </Box>
                <Box>
                  <Input
                    name="contact"
                    placeholder="Email"
                    type="email"
                    onChange={(evt) => setEmail(evt.currentTarget.value)}
                  />
                </Box>
                <Box>
                  <TextArea
                    name="message"
                    placeholder="Message"
                    onChange={(evt) => setMessage(evt.currentTarget.value)}
                  />
                </Box>
                <Box>
                  <Button
                    type="submit"
                    variant="outline"
                    leftIcon={
                      isDisabled ? (
                        <BsSendSlashFill size={24} />
                      ) : (
                        <BsSendCheckFill size={24} />
                      )
                    }
                    disabled={isDisabled}
                  >
                    Send Message
                  </Button>
                </Box>
              </FlexBox>
            </Fieldset>
          </form>
          {isSubmitted && (
            <FlexBox>
              <Text weight="bold">Message has been sent</Text>
            </FlexBox>
          )}
          <FormLoader $show={isSubmitting}>
            <div className="loader" />
          </FormLoader>
        </ContactForm>
      </Wrapper>
    </Section>
  );
});
