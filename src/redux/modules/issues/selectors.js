import { path } from 'ramda'

export const assigneeSelector = path(['issues', 'assignee'])
export const issuesDataSelector = path(['issues', 'issues'])
export const issuesErrorSelector = path(['issues', 'issuesError', 'message'])
export const repoSelector = path(['issues', 'repo'])
