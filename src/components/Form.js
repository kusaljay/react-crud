import React, { Component } from 'react'

class Form extends Component {
  initialState = {
    name: '',
    job: ''
  }

  state = this.initialState

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  
  submitForm = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { name, job } = this.state

    return (
      <form>
        <label>Name</label>
        <input 
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        />
        <label>Job</label>
        <input 
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange}
        />
        <button
          onClick={this.submitForm}>
          Submit
        </button>
      </form>
    )
  }
}

export default Form
