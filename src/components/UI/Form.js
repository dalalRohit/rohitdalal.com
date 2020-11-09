import React, { Component } from 'react'
import Input from './Input'
import { Formik } from 'formik'
import * as Yup from 'yup'

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class Form extends Component {
  state = {
    status: false,
    process: false,
  }

  handleForm = (values) => {
    this.setState({
      process: true,
    })
    var { name, email, message } = values
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then(() => {
        this.setState({ process: false })
        alert('Success!')
      })
      .catch((error) => alert(error))
  }
  render() {
    const data = [
      { id: 1, label: 'Name', name: 'name', type: 'text' },
      { id: 2, label: 'Email', name: 'email', type: 'email' },
      {
        id: 4,
        label: 'Message',
        name: 'message',
        type: 'text',
        multiline: true,
      },
    ]

    const schema = Yup.object().shape({
      name: Yup.string().required('How do I call you?'),
      email: Yup.string().email('Invalid email').required('No E-mail?'),
      message: Yup.string().required('Say Hii atleast ;( '),
    })

    return (
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        validationSchema={schema}
        onSubmit={(values) => {
          this.handleForm(values)
        }}
      >
        {(formProps) => {
          const { errors } = formProps
          return (
            <>
              {this.state.status ? (
                <div className="sent">
                  <p>Email sent succesfully!</p>
                  <p>You will be contacted soon.</p>
                </div>
              ) : null}
              <div className="form-div" data-aos="zoom-in">
                <form
                  name="contact-form"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="main-form"
                  onSubmit={formProps.handleSubmit}
                  autoComplete="off"
                >
                  <div style={{ textAlign: 'center' }}>
                    {data.map((input) => {
                      return (
                        <Input
                          key={input.id}
                          name={input.name}
                          type={input.type}
                          value={formProps.values[input]}
                          label={input.label}
                          blur={formProps.handleBlur}
                          inputChange={formProps.handleChange}
                          multiline={input.multiline}
                          error={errors[input]}
                        />
                      )
                    })}
                    <input
                      type="hidden"
                      name="form-name"
                      value="contact-form"
                    />

                    <button
                      type="submit"
                      className="button"
                      onClick={formProps.handleSubmit}
                      disabled={
                        Object.keys(errors).length || this.state.process
                          ? true
                          : false
                      }
                    >
                      {this.state.process === true
                        ? 'Sending... '
                        : 'Shoot mail'}
                    </button>
                  </div>
                </form>
              </div>
            </>
          )
        }}
      </Formik>
    )
  }
}

export default Form
