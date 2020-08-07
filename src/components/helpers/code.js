import Highlight, { defaultProps } from 'prism-react-renderer'
// import theme from 'prism-react-renderer/themes/github'
import dark from 'prism-react-renderer/themes/vsDark'
import React, { useState } from 'react'
import styled from 'styled-components'
import { copyToClipboard } from './copy-to-clipboard'

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow-x: auto;
  border-radius: 3px;

  position: relative;
  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`
const CopyCode = styled.button`
  position: absolute;
  right: 0.25rem;
  cursor: pointer;
  border: 0;
  border-radius: 3px;
  padding: 0.25rem;
  margin: 0;
  opacity: 0.79;
  &:hover {
    opacity: 1;
    background: darkcyan;
  }
`

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`

const Code = ({ codeString, language }) => {
  const [x, setX] = useState('Copy')

  const handleClick = () => {
    setX('Copied')
    copyToClipboard(codeString)
    setTimeout(() => {
      setX('Copy')
    }, 1000)
  }

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={dark}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          <CopyCode onClick={handleClick}>{x}</CopyCode>
          {tokens.map((line, i) => {
            return (
              <div {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                {line.map((token, key) => {
                  return <span {...getTokenProps({ token, key })} />
                })}
              </div>
            )
          })}
        </Pre>
      )}
    </Highlight>
  )
}

export default Code
