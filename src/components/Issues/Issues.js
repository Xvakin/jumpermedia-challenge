import React from 'react'
import PropTypes from 'prop-types'

function Issues({ issues }) {
  return (
    <div>
      <table className="table">
        <thead>
        <tr>
          <th>Title</th>
          <th>Assignee</th>
        </tr>
        </thead>
        <tbody>
        {Array.isArray(issues) && issues.map(issue => (
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
      </table>
    </div>
  )
}

Issues.propTypes = {
  issues: PropTypes.array,
}

export default Issues
