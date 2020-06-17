import {graphql,useStaticQuery} from 'gatsby';

export const getMetadata=() => {
    const {site}=useStaticQuery(graphql`
        query SITE_METADATA_QUERY {
            site {
                siteMetadata {
                  description
                  title
                  image
                  siteUrl
                  siteLanguage
                  siteLocale
                  twitterUsername
                  author
                }
              }
        }
    `)
    return site.siteMetadata;
}


