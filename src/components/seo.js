import React from 'react'
import Helmet from 'react-helmet'
import { metaData } from './../../static/data'

const SEO = ({ pageTitle, postSEO, postNode, pageDescription }) => {
  let image = metaData.image,
    postURL,
    title,
    description

  if (postSEO) {
    const meta = postNode.frontmatter
    title = meta.title
    description = postNode.excerpt
    image = meta.thumbnail.childImageSharp.fixed.src
    postURL = `${metaData.siteUrl}/blogs/${meta.slug}`
  } else {
    title = metaData.title
    description = pageDescription || metaData.description
  }

  image = `${metaData.siteUrl}${image}`
  //JSONLD
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: metaData.siteUrl,
      name: title,
      alternateName: metaData.author,
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
              image: image,
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
    <Helmet title={pageTitle}>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      <meta property="og:url" content={postSEO ? postURL : metaData.siteUrl} />
      {postSEO && <meta property="og:type" content="article" />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta
        name="twitter:card"
        content={postSEO ? 'summary_large_image' : 'summary'}
      />
      <meta name="twitter:creator" content={metaData.twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

export default SEO
