import React, {Component} from 'react';
import './style.css';
import Login from "./Login";
import Menu from "./Menu";

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello React!</h1>
                <Menu></Menu>
                <Login></Login>
            </div>
        );
    }
}

export default App;
