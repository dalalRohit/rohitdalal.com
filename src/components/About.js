import React, { Component } from 'react'
import Layout from './layout/Layout'

import { content } from './../../static/data'
import Photo from './UI/image'

export default class About extends Component {
  render() {
    const name = 'About'
    const icons = [
      { name: 'Football', icon: '⚽' },
      { name: 'Coffee', icon: '☕' },
      { name: 'Sleep', icon: '💤' },
      { name: 'Chess', icon: '♟️' },
      { name: 'Music', icon: '🎧' },
    ]
    return (
      <Layout name={name} id={name}>
        <h1 className="title">/about</h1>

        <section className="about">
          <div className="myinfo">
            <Photo />

            <div className="my-desc">
              <p
                dangerouslySetInnerHTML={{
                  __html: content.about,
                }}
              ></p>
            </div>
          </div>

          <div className="my-skills">
            <div>
              <h2>What I do?</h2>
              <ul>
                <li>Websites / Web-apps</li>
                <li>Full Stack Apps</li>
                <li>Web Design</li>
              </ul>
            </div>

            <div>
              <h2>Tech Stack </h2>
              <ul>
                <li>React</li>
                <li>Node.js / Express</li>
                <li>MongoDB / PostgreSQL</li>
                <li>Gatsby / Next.js</li>
              </ul>
            </div>
            <div>
              <h2>Non-work </h2>
              <ul>
                {icons.map((icon) => {
                  return (
                    <li
                      key={Math.random()}
                      role="img"
                      aria-label={icon.name}
                      alt={icon.name}
                      title={icon.name}
                    >
                      {icon.name} {icon.icon}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
