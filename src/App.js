import React, { Component } from 'react'
import ContactPage from './Pages/ContactPage'
import SimpleForm from './Forms/SimpleForm'
import SemanticSimpleForm from './Forms/SemanticSimpleForm'
import { Segment, Divider } from 'semantic-ui-react'

const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {
      // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 100)
  })

class App extends Component {
  // noinspection JSMethodCanBeStatic
  render () {
    return (
      <div>
        <Segment padded>
          <h2>Getting Started Form</h2>
          <ContactPage/>
          <Divider horizontal>Dividing Line</Divider>
          <h2>Simple Form</h2>
          <SimpleForm onSubmit={showResults}/>
          <Divider horizontal>Dividing Line</Divider>
          <SemanticSimpleForm onSubmit={showResults}/>
        </Segment>
      </div>
    )
  }
}

export default App
