import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Issues from '../../components/Issues/Issues'
import {
  getIssues,
  setAssignee,
  setRepo,
} from '../../redux/modules/issues/actions'
import {
  assigneeSelector,
  issuesDataSelector,
  issuesErrorSelector,
  repoSelector,
} from '../../redux/modules/issues/selectors'
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

  handleAssigneeChange = (event) => {
    const assignee = event.target.value
    this.props.setAssignee(assignee)
  }

  handleAssigneeFormSubmit = (event) => {
    event.preventDefault()
    const { assignee, repo } = this.props
    this.props.getIssues(repo, assignee)
  }

  render() {
    const {
      assignee,
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
          <div className="row filters">
            <div className="col-sm">
              <form className="form-inline" onSubmit={this.handleRepoFormSubmit}>
                <label className="mr-3">Repo</label>
                <input
                  className="form-control mr-3"
                  placeholder="Repo"
                  value={repo}
                  onChange={this.handleRepoChange}/>
                <button className="btn btn-primary" type="submit">Get issues</button>
              </form>
            </div>
            <div className="col-sm">
              <form className="form-inline" onSubmit={this.handleAssigneeFormSubmit}>
                <input
                  className="form-control mr-3"
                  placeholder="Assignee"
                  value={assignee}
                  onChange={this.handleAssigneeChange}/>
                <button className="btn btn-light" type="submit">Filter by assignee</button>
              </form>
            </div>
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
  assignee: assigneeSelector(state),
  issues: issuesDataSelector(state),
  issuesError: issuesErrorSelector(state),
  repo: repoSelector(state),
})

const mapDispatchToProps = ({
  getIssues,
  setAssignee,
  setRepo,
})

App.propTypes = {
  issues: PropTypes.array,
  issuesError: PropTypes.string,
  repo: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
