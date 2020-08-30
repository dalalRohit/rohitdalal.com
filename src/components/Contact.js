import React, { Component } from 'react'
import Layout from './layout/Layout'

import Form from './UI/Form'
import {
  FaLinkedinIn,
  FaTwitter,
  FaMediumM,
  FaGithub,
  FaInstagram,
} from 'react-icons/fa'

export default class Contact extends Component {
  render() {
    const name = 'Contact'

    const data = [
      {
        name: 'LinkedIn',
        icon: <FaLinkedinIn size={40} />,
        href: 'https://www.linkedin.com/in/rohit-dalal-61330116b/',
      },
      {
        name: 'Instagram',
        icon: <FaInstagram size={40} />,
        href: 'https://www.instagram.com/rohit__dalal/',
      },
      {
        name: 'Github',
        icon: <FaGithub size={40} />,
        href: 'https://github.com/dalalRohit',
      },
      {
        name: 'Twitter',
        icon: <FaTwitter size={40} />,
        href: 'https://twitter.com/dalal__rohit',
      },
      {
        name: 'Medium',
        icon: <FaMediumM size={40} />,
        href: 'https://medium.com/@rohit_dalal',
      },
    ]
    return (
      <Layout name={name} id={name}>
        <h1 className="title">/contact</h1>

        <div className="contact">
          <div className="form">
            <div className="msg">
              <p>Can discuss Work, Football, Coffee ;)</p>
              <p>
                Shoot mail if you want to collaborate{' '}
                <span
                  role="img"
                  aria-label="rocket"
                  title={`rocket`}
                  alt={`rocket`}
                >
                  🚀
                </span>{' '}
              </p>
            </div>

            <Form />
          </div>

          <div className="social">
            <h2>Social</h2>
            <p>You can reach to me here</p>
            <div className="icons">
              {data.map((link) => {
                return (
                  <span key={Math.random()}>
                    <a
                      rel="noopener noreferrer"
                      title={`${link.name} | Rohit Dalal`}
                      alt={`Rohit Dalal | ${link.name}`}
                      href={link.href}
                      target="_blank"
                    >
                      {link.icon}
                    </a>
                  </span>
                )
              })}
            </div>

            <div className="built">
              <p>
                Built with{' '}
                <a
                  href="https://www.gatsbyjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gatsby
                </a>
                , hosted on{' '}
                <a
                  href="https://www.netlify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Netlify
                </a>{' '}
              </p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
