import React, { FC, memo } from "react"
import { FormattedMessage } from "react-intl"
import { IntroSectionWrapper, IntroSectionNameNew } from "./styles"

export const IntroSection: FC = memo(() => (
  <IntroSectionWrapper>
    <IntroSectionNameNew>
      <div>
        <div>
          👋 <FormattedMessage id="my_name" />
        </div>
        <div>Stephen Ng’ang’a</div>
      </div>
      <div>
        <FormattedMessage id="I_am" />
      </div>
    </IntroSectionNameNew>
  </IntroSectionWrapper>
))
