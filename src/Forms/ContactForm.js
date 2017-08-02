import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ContactForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

// reduxForm() takes configuration object and returns a new function;
// use it to wrap your form component and bind user interaction to dispatch of Redux actions

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)
// ***********************************************
// If the ()() syntax seems confusing, you can always break it down into two steps:
// ***********************************************
// create new, "configured" function
// >>---> step 1:
// createReduxForm = reduxForm({ form: 'contact' })

// evaluate it for ContactForm component
// >>---> step 2:
// ContactForm = createReduxForm( ContactForm )
// ***********************************************

export default ContactForm;
