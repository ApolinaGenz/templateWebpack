import React, {Component} from 'react';

export default class Post extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
                <p>{this.props.author} <span>{this.props.date}</span></p>
            </div>
        )

    }
}