import React, { Component } from 'react'
import Char from '../components/Char'

class Roster extends Component {
  constructor() {
    super()

    this.state = {
      charArr: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:9999/roster')
      .then(data => {
        return data.json()
      })
      .then(parsedData => {
        this.setState({
          charArr: parsedData
        })
      })
  }

  render() {
    return (
      <div>
        {this.state.charArr.map((c, i) => {
          return <Char key={i} params={c} />
        })}
      </div>
    )
  }
}

export default Roster