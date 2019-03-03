import { path } from 'ramda'

export const issuesDataSelector = path(['issues', 'issues'])
export const issuesErrorSelector = path(['issues', 'issuesError', 'message'])
