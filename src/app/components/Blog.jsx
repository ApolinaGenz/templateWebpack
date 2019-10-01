import React, {Component} from 'react';

import Post from './Post';
import WelcomeModal from './WelcomeModal';

export default class Blog extends Component{
    render() {
        const items = this.props.content.map((item, index) =>{
            return <Post
                key = {index}
                title = {item.title}
                text = {item.text}
                author = {item.author}
                date = {item.date}
                />
        });

        return(
            <div>
                {this.componentDidMount()}
                {items}
            </div>
        )
    }

    componentDidMount() {
        return <WelcomeModal/>
    }
}