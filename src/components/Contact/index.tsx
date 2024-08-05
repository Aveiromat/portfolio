import { Social } from './styles'

const Contact = () => (
  <nav>
    <Social>
      <li>
        <a
          href="https://www.instagram.com/aveiromat/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/instagram.svg" alt="logo do Instagram" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/aveiromat/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/linkedin.svg" alt="logo do Linkedin" />
        </a>
      </li>
      <li>
        <a href="https://github.com/Aveiromat" target="_blank" rel="noreferrer">
          <img src="/github.svg" alt="logo do GitHub" />
        </a>
      </li>
      <li>
        <a
          href="mailto:matheusaveirofagundes@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/mail.svg" alt="logo do E-mail" />
        </a>
      </li>
    </Social>
  </nav>
)

export default Contact
