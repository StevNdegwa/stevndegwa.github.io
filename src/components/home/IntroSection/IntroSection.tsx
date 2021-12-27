import React, { FC, memo } from "react"
import { FormattedMessage } from "react-intl"
import { IntroSectionWrapper, IntroSectionName } from "./styles"

export const IntroSection: FC = memo(() => (
  <IntroSectionWrapper>
    <IntroSectionName>
      <div>
        <div>
          👋 <FormattedMessage id="my_name" />
        </div>
        <div>Stephen Ng’ang’a</div>
      </div>
      <div>
        <FormattedMessage id="I_am" />
      </div>
    </IntroSectionName>
  </IntroSectionWrapper>
))
