import React, {Component} from 'react';

export default class WelcomeModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true,
        }
    }

    render() {
        return (
            <div>
                <h1>Hello! I'm Kate Moss. This is my blog. Welcome!</h1>
                <button onClick={() => {
                    this.setState({modal: false})
                }}>Go!
                </button>
            </div>
        )
    }
}