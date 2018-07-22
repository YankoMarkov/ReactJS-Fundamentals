import React, { Component } from 'react'
import Char from '../components/Char'

class Bio extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currChar: {}
    }
  }

  componentDidMount() {
    fetch('http://localhost:9999/character/' + this.props.id)
      .then(data => {
        return data.json()
      })
      .then(parseData => {
        console.log(parseData.name)
        this.setState({
          currChar: parseData
        })
      })
  }

  componentWillReceiveProps() {
    fetch('http://localhost:9999/character/' + this.props.id)
      .then(data => {
        return data.json()
      })
      .then(parseData => {
        this.setState({
          currChar: parseData
        })
      })
  }

  render() {
    return (
      <fieldset className='info-field'>
        <p>{this.state.currChar.name}</p>
        <Char params={({ url: this.state.currChar.url })} />
        <p>{this.state.currChar.bio}</p>
      </fieldset>
    )
  }
}

export default Bio