import React from "react"
import { useIntl, changeLocale } from "gatsby-plugin-react-intl"

import { Lang as Styled } from "../../styles/components"

const Lang: React.FC = () => {
  const intl = useIntl()

  const changeLangHandler = () =>
    changeLocale(intl.locale === "ru" ? "en" : "ru")

  return (
    <Styled className="cursor" onClick={() => changeLangHandler()}>
      <span data-lang={intl.locale === "ru" ? true : undefined}>en</span>
      <span data-lang={intl.locale === "en" ? true : undefined}>ru</span>
    </Styled>
  )
}

export default Lang
