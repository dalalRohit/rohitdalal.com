import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { metaData } from './../../static/data'
function SEO(props) {
  const { meta, image: metaImage, postSEO, postNode, title: pageTitle } = props

  let title
  let description
  let image = ''
  let postURL
  let icon = props.logo

  if (postSEO) {
    const postMeta = postNode.frontmatter

    title = `${postMeta.title} | Rohit Dalal`
    description = postMeta.description ? postMeta.description : postNode.excerpt

    //swap between postImage and icon for '/blogs' and '/' respectively
    image = metaImage.src
    postURL = metaData.siteUrl + `/blogs/${postMeta.slug}`
  } else {
    title = pageTitle ? pageTitle : metaData.title
    description = metaData.description
    image = metaImage ? metaImage.src : icon
  }

  image = `${metaData.siteUrl}${image}`

  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: metaData.siteUrl,
      name: title,
      alternateName: 'Rohit Dalal',
    },
  ]

  if (postSEO) {
    schemaOrgJSONLD.push(
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': postURL,
              name: title,
              image,
            },
          },
        ],
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: postURL,
        name: title,
        alternateName: 'Rohit Dalal',
        headline: title,
        image: {
          '@type': 'ImageObject',
          url: image,
        },
        description,
      }
    )
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={title}
      // titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:url`,
          content: postSEO ? postURL : metaData.siteUrl,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: 'og:type',
          content: postSEO ? 'article' : 'portfolio',
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: 'og:image',
          content: image,
        },

        {
          name: 'keywords',
          content: metaData.keywords.join(','),
        },

        {
          name: `twitter:card`,
          content: postSEO ? `summary_large_image` : `summary`,
        },
        {
          name: 'twitter:site',
          content: metaData.twitterUsername,
        },
        {
          name: `twitter:creator`,
          content: metaData.twitterUsername,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: 'twitter:image',
          content: image,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  name: 'twitter:card',
                  content: 'summary_large_image',
                },
              ]
            : [
                {
                  name: 'twitter:card',
                  content: 'summary_large_image',
                },
              ]
        )
        .concat(meta)}
    >
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  meta: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
  }),
}

export default SEO
