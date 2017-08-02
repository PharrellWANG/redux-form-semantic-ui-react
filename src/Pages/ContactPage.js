import React from 'react'
import ContactForm from '../Forms/ContactForm'
import { store } from '../store'

class ContactPage extends React.Component {
  submit = (values) => {
    // print the form values to the console
    console.log(values)
    console.log(store.state)
  }

  render() {
    return (
      <ContactForm onSubmit={this.submit} />
    )
  }
}

export default ContactPage
