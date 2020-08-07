import React from 'react'
import { ErrorMessage } from 'formik'

function Input(props) {
  const { value, name, label, type, inputChange, blur } = props

  return (
    <div className="input-wrapper">
      <label className="label" htmlFor={name} id={name}>
        {label ? label : 'label'}
      </label>

      <div className="input-box">
        <input
          className="input"
          required={true}
          autoComplete="off"
          aria-label={label}
          aria-required="true"
          type={type}
          value={value}
          id={name}
          name={name}
          onChange={inputChange}
          onBlur={blur}
          placeholder={`Enter your ${name} here..`}
        />
        <ErrorMessage
          name={name}
          render={(msg) => <span className="field-error">{msg}</span>}
        />
      </div>
    </div>
  )
}

export default Input
