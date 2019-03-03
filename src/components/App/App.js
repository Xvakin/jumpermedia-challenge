import React, { Component } from 'react'
import { connect } from 'react-redux'

import logo from './logo.svg'
import './App.css'
import { getIssues } from '../../redux/modules/issues/actions'

export class App extends Component {
  componentDidMount() {
    const { repo } = this.props
    this.props.getIssues(repo)
  }

  render() {
    const { issues } = this.props
    console.log(issues)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
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
    )
  }
}

const mapStateToProps = (state) => ({
  issues: state.issues.issues,
  repo: state.issues.repo,
})

const mapDispatchToProps = ({
  getIssues,
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
