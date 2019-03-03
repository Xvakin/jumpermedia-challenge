import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import { dummyAction } from '../../actions/dummy';

export class App extends Component {
  render() {
    const { dummyAction, dummyFlag } = this.props;
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    dummyFlag: state.dummy.dummyFlag
})

const mapDispatchToProps = (dispatch) => ({
  dummyAction: () => dispatch(dummyAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
