import React from 'react'
import Card from './UI/card'
import Layout from './layout/Layout'

import { projects } from './../../static/data'

const Projects = () => {
  const name = 'Projects'

  return (
    <Layout name={name} id={name}>
      <h1 className="title">/projects</h1>

      <div className="desc">
        <p>
          Collection of my recently done projects.. <br />
          Many more coming!
        </p>
      </div>
      <section className="all-projects">
        {projects.map((edge) => {
          return (
            <Card
              key={Math.random()}
              title={edge.name}
              tags={edge.tags}
              desc={edge.desc}
              link={edge.link ? edge.link : null}
              github={edge.github ? edge.github : null}
            />
          )
        })}
      </section>
    </Layout>
  )
}

export default Projects
