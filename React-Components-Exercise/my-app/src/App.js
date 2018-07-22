import React, { Component } from 'react'
import './App.css'
import Slider from './components/Slider'
import Roster from './components/Roster'
import Bio from './components/Bio'
import observMenu from './utils/observer'

class App extends Component {
  constructor() {
    super()

    this.state = {
      epOnFocus: 0
    }

    this.changeEp = (ep) => {
      this.setState({ epOnFocus: ep })
    }


    this.eventHandler = (newState) => {
      this.setState(newState)
    }
  }

  componentDidMount() {
    observMenu.addObserv('changeFocus', this.eventHandler)
  }

  render() {
    return (
      <div className='App'>
        <Slider updateFunc={this.changeEp} focusedEp={this.state.epOnFocus} />
        <Roster />
        <Bio id={this.state.id === undefined ? this.state.epOnFocus : this.state.id} />
      </div>
    )
  }
}
export default App
