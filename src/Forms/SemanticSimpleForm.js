import React, { Component } from 'react'
import { Form, Grid, Button } from 'semantic-ui-react'
import { Field, reduxForm } from 'redux-form'
import classnames from 'classnames'

class SemanticSimpleForm extends Component {

  static renderField ({input, label, type, meta: {touched, error}}) {
    return (
      <Form.Field className={classnames({err: touched && error})}>
        <label>{label}</label>
        <input {...input} placeholder={label} type={type}/>
        {touched && error && <span className="error">{error.message}</span>}
      </Form.Field>
    )
  }

  render () {
    const {handleSubmit, pristine, submitting, loading} = this.props
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          {/*<h1 style={{marginTop: "1em"}}>{this.props.contact._id ? 'Edit Contact' : 'Add New Contact'}</h1>*/}
          <Form onSubmit={handleSubmit} loading={loading}>
            <Form.Group widths="equal">
              <Field name="name.first" type="text" component={SemanticSimpleForm.renderField} label="First Name"/>
              <Field name="name.last" type="text" component={SemanticSimpleForm.renderField} label="Last Name"/>
            </Form.Group>
            <Field name="phone" type="text" component={SemanticSimpleForm.renderField} label="Phone"/>
            <Field name="email" type="text" component={SemanticSimpleForm.renderField} label="Email"/>
            <Button primary type="submit" disabled={pristine || submitting}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

const validate = (values) => {
  const errors = {name: {}}
  if (!values.name || !values.name.first) {
    errors.name.first = {
      message: 'First Name is needed'
    }
  } else if (!values.name.last) {
    errors.name.last = {
      message: 'Last name is needed'
    }
  }
  if (!values.phone) {
    errors.phone = {
      message: 'Phone number is needed'
    }
  }
  if (!values.email) {
    errors.email = {
      message: 'Email address is needed'
    }
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = {
      message: 'Invalid email address'
    }
  }
  return errors
}

export default reduxForm({form: 'contact', validate})(SemanticSimpleForm)