import React from 'react';

export default class Details extends React.Component {
    render = () => (
        <section id="bio">
            <div className="image">
                <img src={this.props.details.url} alt='char' />
            </div>
            <div className="info">
                <p>Name: <strong> {this.props.details.name}</strong></p>
                <p>Bio:</p>
                <p>{this.props.details.bio}</p>
            </div>
        </section>
    )
}