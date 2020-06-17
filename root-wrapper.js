import { MDXProvider } from '@mdx-js/react';
import Code from './src/components/helpers/code';
import './src/styles/templates/elements.scss';
import { ThemeProvider } from "./src/context/context"

import React from 'react';

const components = {

  aside:props => {
    return (
      <aside className="blog-note">
        <h4>Note</h4>
        {props.children}
      </aside>
    );
  },

  pre: ( {children:{ props } } ) => {
    const className = props.className || '';
    const matches = className.match(/language-(?<lang>.*)/);  

    if (props.mdxType === 'code') {
        return (
          <Code
            codeString={props.children.trim()}
            language={
              matches && matches.groups && matches.groups.lang
                ? matches.groups.lang
                : ''
            }
            {...props}
            
          />
        );
    }

}
};

export const wrapRootElement = (obj) => {
  return (
    <ThemeProvider>
        <MDXProvider components={components}>
          {obj.element}
        </MDXProvider>
    </ThemeProvider>
  )
}