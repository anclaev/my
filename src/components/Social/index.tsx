import React from "react"

import VK from "../../assets/svg/vk.svg"
import Github from "../../assets/svg/github.svg"
import Instagram from "../../assets/svg/instagram.svg"
import Telegram from "../../assets/svg/telegram.svg"

import { Social as Styled, SocialLink } from "../../styles/components"

const Social: React.FC<{custom?: boolean}> = ({custom = false}) => (
  <Styled custom={custom}>
    <SocialLink
      href="https://instagram.com/anclaev"
      target="_blank"
      rel="noreferrer"
      className="cursor"
    >
      <img src={Instagram} alt="Icon: Instagram" className="cursor" />
    </SocialLink>
    <SocialLink
      href="https://github.com/anclaev"
      target="_blank"
      rel="noreferrer"
      className="cursor"
    >
      <img src={Github} alt="Icon: Github" className="cursor" />
    </SocialLink>
    <SocialLink
      href="https://t.me/anclaev"
      target="_blank"
      rel="noreferrer"
      className="cursor"
    >
      <img src={Telegram} alt="Icon: Telegram" className="cursor" />
    </SocialLink>
    <SocialLink
      href="https://vk.com/anclaev"
      target="_blank"
      rel="noreferrer"
      className="cursor"
    >
      <img src={VK} alt="Icon: VK" className="cursor" />
    </SocialLink>
  </Styled>
)

export default Social
