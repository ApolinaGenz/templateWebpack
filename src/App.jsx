import React, {Component} from 'react';
import './style.css';
import Login from "./Login";

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello React!</h1>
                <Login></Login>
            </div>
        );
    }
}

export default App;
