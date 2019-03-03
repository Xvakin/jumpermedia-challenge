import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Issues from '../../components/Issues/Issues'
import { getIssues, setRepo } from '../../redux/modules/issues/actions'
import { issuesDataSelector, issuesErrorSelector } from '../../redux/modules/issues/selectors'
import './App.css'

export class App extends Component {
  componentDidMount() {
    const { repo } = this.props
    this.props.getIssues(repo)
  }

  handleRepoChange = (event) => {
    const repo = event.target.value
    this.props.setRepo(repo)
  }

  handleRepoFormSubmit = (event) => {
    event.preventDefault()
    const { repo } = this.props
    this.props.getIssues(repo)
  }

  render() {
    const {
      issues,
      issuesError,
      repo,
    } = this.props
    return (
      <div className="app">
        <div className="container">
          <header>
            <h1>Github Issues</h1>
          </header>
          <div className="filters">
            <form className="form-inline" onSubmit={this.handleRepoFormSubmit}>
              <label>Repo</label>
              <input
                className="form-control mx-sm-3"
                placeholder="Repo"
                value={repo}
                onChange={this.handleRepoChange}/>
              <button className="btn btn-primary" type="submit">Get issues</button>
            </form>
          </div>
          <main>
            <Issues
              issues={issues}
              error={issuesError}
            />
          </main>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  issues: issuesDataSelector(state),
  issuesError: issuesErrorSelector(state),
  repo: state.issues.repo,
})

const mapDispatchToProps = ({
  getIssues,
  setRepo,
})

App.propTypes = {
  issues: PropTypes.array,
  issuesError: PropTypes.string,
  repo: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
