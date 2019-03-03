import { GET_ISSUES_REQUEST, GET_ISSUES_SUCCESS, GET_ISSUES_FAIL } from './types'

export const getIssues = (repo) => ({
  types: [GET_ISSUES_REQUEST, GET_ISSUES_SUCCESS, GET_ISSUES_FAIL],
  promise: ({ get }) => get(`https://api.github.com/repos/${repo}/issues`),
})
