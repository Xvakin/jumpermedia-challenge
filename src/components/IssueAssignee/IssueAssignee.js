import React from 'react'
import PropTypes from 'prop-types'
import './IssueAssignee.css'

function IssueAssignee({ avatar_url, login, html_url }) {
  return (
    <a className="issue-assignee"
       href={html_url}
       target="_blank"
       rel="noopener noreferrer">
      {avatar_url &&
      <img className="issue-assignee-img" src={avatar_url} alt={login}/>}
      {login}
    </a>
  )
}

IssueAssignee.propTypes = {
  avatar_url: PropTypes.string,
  html_url: PropTypes.string,
  login: PropTypes.string,
}

export default IssueAssignee
