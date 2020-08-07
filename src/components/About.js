import React, { Component } from 'react'
import Layout from './Layout'

import { content } from './../../static/data'
import Photo from './UI/image'
import Title from './UI/title'

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
        <Title path={name}>/about</Title>

        <section className="about">
          <div className="myinfo">
            <div className="my-photo">
              <Photo fluid={this.props.fluid} />
            </div>

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
                <li>Web development</li>
                <li>Front end</li>
                <li>Back end</li>
              </ul>
            </div>

            <div>
              <h2>Tech Stack </h2>
              <ul>
                <li>React</li>
                <li>Node.js / Express</li>
                <li>MongoDB </li>
                <li>Gatsby </li>
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
