import {
  GET_ISSUES_REQUEST,
  GET_ISSUES_SUCCESS,
  GET_ISSUES_FAIL,
  SET_REPO,
} from './types'

export const getIssues = (repo) => ({
  types: [GET_ISSUES_REQUEST, GET_ISSUES_SUCCESS, GET_ISSUES_FAIL],
  promise: ({ get }) => get(`https://api.github.com/repos/${repo}/issues`),
})

export const setRepo = (repo) => ({
  type: SET_REPO,
  repo,
})
