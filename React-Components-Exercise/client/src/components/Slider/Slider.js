import React from 'react';
import fetcher from '../../fetcher';

const IMAGE_URL = '/episodePreview/';

export default class Slider extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    fetchEpisode = (id) => {
        fetcher.get(IMAGE_URL + id, data => {
            this.setState(data)
        })
    }

    componentDidMount() {
        this.fetchEpisode(this.props.currentEp)
    }

    otherEpisode = (id) => {
        fetcher.get(IMAGE_URL + id, data => {
            this.setState(data)
        })
    }

    render = () => (
        <section id="slider">
            <img
                className="button"
                src="/left.png"
                title="previous"
                alt="nav"
                onClick={() =>
                    this.otherEpisode(
                        Number(this.state.id) - 1 < 0
                            ? 0
                            : Number(this.state.id) - 1
                    )}
            />
            <div className="image-container">
                <img src={this.state.url} alt="episode" />
            </div>
            <img
                className="button"
                src="/right.png"
                title="previous"
                alt="nav"
                onClick={() =>
                    this.otherEpisode(
                        Number(this.state.id) + 1 > 2
                            ? 2
                            : Number(this.state.id) + 1
                    )}
            />
        </section>
    )
}