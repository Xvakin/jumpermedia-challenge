import React from 'react'
import PropTypes from 'prop-types'

function Issues({ issues, error }) {
  return (
    <div>
      {error &&
      <div className="alert alert-warning">
        {error}
      </div>}
      {!error && Array.isArray(issues) &&
      <div>
        {issues.length === 0 &&
        <div className="alert alert-warning">
          No issues found
        </div>}
        {issues.length > 0 &&
        <table className="table">
          <thead>
          <tr>
            <th>Title</th>
            <th>Assignee</th>
          </tr>
          </thead>
          <tbody>
          {issues.map(issue => (
            <tr key={issue.id}>
              <td>
                <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
                  {issue.title}
                </a>
              </td>
              <td>{issue.assignee ? issue.assignee.login : ''}</td>
            </tr>
          ))}
          </tbody>
        </table>}
      </div>}
    </div>
  )
}

Issues.propTypes = {
  issues: PropTypes.array,
}

export default Issues
