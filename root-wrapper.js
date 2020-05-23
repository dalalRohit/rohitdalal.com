import { MDXProvider } from '@mdx-js/react';
import Code from './src/components/helpers/code';
import './src/styles/templates/elements.scss';

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
              props.className && props.className.replace('language-', '')
            }
            {...props}
          />
        );
    }

}
};

export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>{element}</MDXProvider>
);