import React, {Component} from 'react';
import ReactDom from 'react-dom';

import './style.css';
import './src/app/components/Blog';

export default class App extends Component {
    render() {
        let posts = [
            {
                title: 'Heading 1',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati nesciunt praesentium laudantium illum pariatur et consequuntur fugit, corporis cupiditate necessitatibus dolorum earum dolore qui quaerat minus, sed tenetur aliquid culpa est dolorem delectus quas. Soluta amet, incidunt quis rem doloribus aspernatur.',
                author: 'Kate Moss',
                date: '10.10.10'
            },
            {
                title: 'Heading 2',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati nesciunt praesentium laudantium illum pariatur et consequuntur fugit, corporis cupiditate necessitatibus dolorum earum dolore qui quaerat minus, sed tenetur aliquid culpa est dolorem delectus quas. Soluta amet, incidunt quis rem doloribus aspernatur.',
                author: 'Kate Moss',
                date: '11.10.10'
            },
            {
                title: 'Heading 3',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati nesciunt praesentium laudantium illum pariatur et consequuntur fugit, corporis cupiditate necessitatibus dolorum earum dolore qui quaerat minus, sed tenetur aliquid culpa est dolorem delectus quas. Soluta amet, incidunt quis rem doloribus aspernatur.',
                author: 'Kate Moss',
                date: '12.10.10'
            },
            {
                title: 'Heading 4',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati nesciunt praesentium laudantium illum pariatur et consequuntur fugit, corporis cupiditate necessitatibus dolorum earum dolore qui quaerat minus, sed tenetur aliquid culpa est dolorem delectus quas. Soluta amet, incidunt quis rem doloribus aspernatur.',
                author: 'Kate Moss',
                date: '13.10.10'
            },
            {
                title: 'Heading 5',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt obcaecati nesciunt praesentium laudantium illum pariatur et consequuntur fugit, corporis cupiditate necessitatibus dolorum earum dolore qui quaerat minus, sed tenetur aliquid culpa est dolorem delectus quas. Soluta amet, incidunt quis rem doloribus aspernatur.',
                author: 'Kate Moss',
                date: '14.10.10'
            },
        ];

        return(
            <div>
                <Blog content = {posts}/>
            </div>
        )
    }
}

ReactDom.render(<App/>, document.querySelector('#root'));
