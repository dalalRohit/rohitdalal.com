import React from 'react'
import Card from './UI/card'
import Title from './UI/title'
import Layout from './Layout'
import { projects } from './../../static/data'

const Projects = () => {
  const name = 'Projects'

  return (
    <Layout name={name} id={name}>
      <Title path={name}>/projects</Title>

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
