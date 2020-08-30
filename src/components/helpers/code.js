import Highlight, { defaultProps } from 'prism-react-renderer'
// import theme from 'prism-react-renderer/themes/github'
import dark from 'prism-react-renderer/themes/vsDark'
import React, { useState } from 'react'
import { copyToClipboard } from './copy-to-clipboard'

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
        <pre className={['code', className].join(' ')} style={style}>
          <button className="copycode" onClick={handleClick}>
            {x}
          </button>
          {tokens.map((line, i) => {
            return (
              <div {...getLineProps({ line, key: i })}>
                <span className="lineno">{i + 1}</span>
                {line.map((token, key) => {
                  return <span {...getTokenProps({ token, key })} />
                })}
              </div>
            )
          })}
        </pre>
      )}
    </Highlight>
  )
}

export default Code
