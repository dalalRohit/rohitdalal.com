import React from 'react'

const Card = (props) => {
  const { title, desc, link, github } = props
  return (
    <div className="proj-card" data-aos="fade-in">
      <div className="proj-meta">
        <p>{title}</p>
      </div>

      <p className="proj-desc">{desc}</p>

      <div className="proj-links">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            alt={link}
            title={link}
          >
            Link
          </a>
        ) : null}

        {github ? (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            alt={github}
            title={github}
          >
            Github
          </a>
        ) : null}
      </div>
    </div>
  )
}
export default Card
