import React, { Component } from 'react'
import Input from './Input'
import axios from 'axios'
import { Formik } from 'formik'
import * as Yup from 'yup'

const mailApi = 'https://rohitmailapi.herokuapp.com/send'

class Form extends Component {
  state = {
    status: false,
    process: false,
  }

  handleForm = (values) => {
    this.setState({
      process: true,
    })
    var { name, email, contact, message } = values
    axios
      .post(
        `${mailApi}`,
        { name, email, contact, message },
        {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      )
      .then(() => {
        this.setState({
          status: true,
          process: false,
        })
      })
      .catch(() => {
        this.setState({
          status: false,
          process: false,
        })
        alert('Email sending failed. Try again please ;)')
      })
  }
  render() {
    const data = [
      { id: 1, label: 'Name', name: 'name', type: 'text' },
      { id: 2, label: 'Email', name: 'email', type: 'email' },
      { id: 3, label: 'Contact', name: 'contact', type: 'tel' },
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
      contact: Yup.string().min(10).required('How do I contact you?'),
      message: Yup.string().required('Say Hii atleast ;( '),
    })

    return (
      <Formik
        initialValues={{
          name: '',
          email: '',
          contact: '',
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
