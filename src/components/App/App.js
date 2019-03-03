import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Issues from '../Issues/Issues'
import { getIssues } from '../../redux/modules/issues/actions'
import { issuesDataSelector } from '../../redux/modules/issues/selectors'
import './App.css'

export class App extends Component {
  componentDidMount() {
    const { repo } = this.props
    this.props.getIssues(repo)
  }

  render() {
    const { issues } = this.props
    return (
      <div className="container">
        <Issues issues={issues}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  issues: issuesDataSelector(state),
  repo: state.issues.repo,
})

const mapDispatchToProps = ({
  getIssues,
})

App.propTypes = {
  issues: PropTypes.array,
  repo: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
