import React, { Component } from 'react'

import PokemonField from './formFields/PokemonField'
import Input from './formFields/Input'

export default class PokemonForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      image: '',
      info: '',
      data: { pokemonColection: [] }
    }
  }

  submitPokemon = (e) => {
    e.preventDefault();
    let payload = {
      name: this.state.name,
      image: this.state.image,
      info: this.state.info
    }
    this.create(payload)
  }

  create = (payload) => {
    fetch('http://localhost:5000/pokedex/create', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then(res => {
        return res.json()
      })
      .then(d => {
      })
  }

  componentDidMount() {
    fetch('http://localhost:5000/pokedex/pokedex')
      .then(data => {
        return data.json()
      })
      .then(d => {
        console.log(d)
        this.setState(({ data: d }))
      })
  }

  render() {
    let validName = this.state.name !== ''
    let validImage = this.state.image.startsWith('http')
    let validInfo = this.state.info.length > 3 && this.state.info.length < 10

    return (
      <div>
        <form onSubmit={this.submitPokemon}>
          <fieldset className='App'>
            <div style={{ display: 'inline-grid' }}>
              <h2>Logged</h2>
              <Input
                type='text'
                data='name'
                name='Name'
                func={e => {
                  this.setState({ name: e.target.value })
                }}
                valid={validName}
              />

              <Input
                type='url'
                data='image'
                name='Image'
                func={e => {
                  this.setState({ image: e.target.value })
                }}
                valid={validImage}
              />

              <Input
                type='text'
                data='info'
                name='Info'
                func={e => {
                  this.setState({ info: e.target.value })
                }}
                valid={validInfo}
              />

              <input
                style={({ display: (validName && validImage && validInfo) === true ? '' : 'none' })}
                type='submit'
                value='Create'
              />
            </div>
          </fieldset>
        </form>
        <div>
          {this.state.data.pokemonColection.map((p, i) => {
            return <PokemonField key={i} data={p} />
          })}
        </div>
      </div>
    )
  }
}