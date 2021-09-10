import React from "react"
import { SectionContainer } from "../../SectionContainer"
import { FooterWrapper, FooterTop, FooterBottom } from "./styles"

const Footer = () => {
  return (
    <FooterWrapper>
      <SectionContainer style={{ marginBottom: "0px" }}>
        <FooterTop></FooterTop>
        <FooterBottom>
          <p>Copyright @ {new Date().getFullYear()}</p>
        </FooterBottom>
      </SectionContainer>
    </FooterWrapper>
  )
}

export default Footer
