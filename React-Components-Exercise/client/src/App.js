import React, { Component } from 'react';
import './App.css';

import Slider from './components/Slider/Slider';
import Characters from './components/Characters/Characters';

class App extends Component {
    constructor() {
        super()

        this.state = {
            epId: 0
        }

    }

    render = () => (
        <div className="container">
            <h1>React Components</h1>
            <Slider currentEp={this.state.epId} />
            <Characters />
        </div>
    )
}

export default App;
