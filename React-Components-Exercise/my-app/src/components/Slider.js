import React, { Component } from 'react'

import left from '../resources/left.png'
import right from '../resources/right.png'

class Slider extends Component {
  constructor() {
    super()

    this.state = {
      selectedImg: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:9999/episodePreview/' + this.props.focusedEp)
      .then(data => {
        return data.json()
      })
      .then(parseData => {
        this.setState({
          selectedImg: parseData.url
        })
      })
  }

  componentWillReceiveProps() {
    fetch('http://localhost:9999/episodePreview/' + this.props.focusedEp)
      .then(data => {
        return data.json()
      })
      .then(parseData => {
        this.setState({
          selectedImg: parseData.url
        })
      })
  }

  render() {
    return (
      <div>
        <div className='warper'>
          <img
            alt='nope'
            src={left}
            className='slider-elem slider-button case-left'
            onClick={() =>
              this.props.updateFunc(
                Number(this.props.focusedEp) - 1 < 0
                  ? 0
                  : Number(this.props.focusedEp) - 1
              )}
          />
          <img
            className='sliderImg slider-elem'
            alt='focusedEp'
            src={this.state.selectedImg}
          />
          <img
            alt='nope'
            src={right}
            className='slider-elem slider-button case-right'
            onClick={() =>
              this.props.updateFunc(
                Number(this.props.focusedEp) + 1 > 2
                  ? 2
                  : Number(this.props.focusedEp) + 1
              )}
          />
        </div>
      </div>
    )
  }
}

export default Slider
