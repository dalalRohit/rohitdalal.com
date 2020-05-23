import { wrapRootElement as wrap } from './root-wrapper';

export const wrapRootElement = wrap;

// https://github.com/gatsbyjs/gatsby/issues/21120
export const onRouteUpdate = ( {location} ) => {
    if (location && location.hash) {
        // const item = document.querySelector(`${location.hash}`).offsetTop
        const item = document.querySelector(`${location.hash}`).offsetTop
    
        window.scrollTo({
          top: item ,
        //   behavior: "smooth",
        })
      }
    
      return true
}
