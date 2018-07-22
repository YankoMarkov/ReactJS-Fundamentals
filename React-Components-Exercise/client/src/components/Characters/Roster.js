import React from 'react';

export default class Roster extends React.Component {
    render = () => (
        <section id="roster">
            <div className='roster-image-container'>
                {this.props.images.map(c => {
                    return <img
                        key={c.id}
                        src={c.url}
                        alt='char'
                        onClick={() => { this.props.select(c.id) }}
                    />
                })}
            </div>
        </section>
    )
}
