import React from 'react';
import { connect } from 'react-redux';
import Footer from '../Components/footer';
import Header from '../Components/header';
import './style.scss';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    handleButtonClick = e => {
        e.preventDefault();
        this.setState(previousState => ({
            counter: previousState.counter + 1,
        }))
    };

    handlerDecrease = e => {
        e.preventDefault();
        this.setState(previousState => ({
            counter: previousState.counter - 1,
        }))
    };


    render() {
        return (
            <div>
                <h4 style={{color: 'red'}}>{this.state.counter}</h4>
                <button style={{color: 'red'}} onClick={this.handlerDecrease}>Decrease</button>
                <button style={{color: 'red'}} onClick={this.handleButtonClick}>Click Me</button>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Counter />
                <Footer />
            </React.Fragment>
        );
    }

}


export default App;ult App;