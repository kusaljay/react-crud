import React, { Component } from 'react'
import Table from './components/Table'
import Form from './components/Form'
import './styles/main.css'

class App extends Component {
  state = {
    persons: []
  }

  removePerson = (index) => {
    this.setState({
      persons: this.state.persons.filter((person, i) => {
        return i !== index
      })
    })
  }

  handleSubmit = (person) => {
    this.setState({
      persons: [...this.state.persons, person]
    })
  }

  render() {
    const { persons } = this.state
    return (
      <div className="container">
        <Form
          handleSubmit={this.handleSubmit} />
        <Table 
          personsData={persons} 
          removePerson={this.removePerson} />
      </div>
    )
  }
}

export default App