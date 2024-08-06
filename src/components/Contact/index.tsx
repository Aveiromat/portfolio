import React from 'react'
import { Social } from './styles'

type Props = {
  tema: 'light' | 'dracula'
}

const Contact = ({ tema }: Props) => {
  return (
    <nav>
      <Social>
        <li>
          <a
            href="https://www.instagram.com/aveiromat/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={
                tema === 'light'
                  ? '/instagramLight.svg'
                  : '/instagramDracula.svg'
              }
              alt="logo do Instagram"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/aveiromat/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={
                tema === 'light' ? '/linkedinLight.svg' : '/linkedinDracula.svg'
              }
              alt="logo do Linkedin"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Aveiromat"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={tema === 'light' ? '/githubLight.svg' : '/githubDracula.svg'}
              alt="logo do GitHub"
            />
          </a>
        </li>
        <li>
          <a
            href="mailto:matheusaveirofagundes@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={tema === 'light' ? '/mailLight.svg' : '/mailDracula.svg'}
              alt="logo do E-mail"
            />
          </a>
        </li>
      </Social>
    </nav>
  )
}

export default Contact
