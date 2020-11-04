import React, { Component } from 'react'

class Api extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/posts'

    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        this.setState({
          data: result.map((obj) => {
            return Object.values(obj)
          })
        })
      })
      .catch((err) => {
        console.log(err)
      })

  }

  render() {
    const { data } = this.state
    const result = data.map((entry, index) => {
      return (
        <li key={index}>
          {entry}
        </li>
      )
    })

    return (
      <>
        <ul>{result}</ul>
      </>
    )
  }
}

export default Api
