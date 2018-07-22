import React from 'react';

import Roster from './Roster';
import Details from './Details';
import fetcher from '../../fetcher';

const ROOSTER_ENDPOINT = '/roster';
const DETAILS_ENDPOINT = '/character/';

export default class Characters extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            images: [],
            details: {}
        }
    }

    componentDidMount() {
        fetcher.get(ROOSTER_ENDPOINT, data => {
            this.setState({ images: data })
        })
    }

    fetchDetails = (id) => {
        fetcher.get(DETAILS_ENDPOINT + id, data => {
            this.setState({ details: data })
        })
    }

    render = () => (
        <div>
            <Roster images={this.state.images} select={this.fetchDetails} />
            <Details details={this.state.details} />
        </div>
    )
}