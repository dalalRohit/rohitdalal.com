import React from 'react'
import Img from 'gatsby-image'

export default function Image(props) {
  return (
    <div className="image">
      <Img
        alt={'Rohit Dalal | Full Stack Software Developer'}
        title={'Rohit Dalal | Full Stack Software Developer'}
        style={{
          margin: '1.5rem',
          maxWidth: '100%',
          maxHeight: 'calc(60vh - 5rem)',
        }}
        imgStyle={{ objectFit: 'contain' }}
        fluid={props.fluid}
      />
    </div>
  )
}
