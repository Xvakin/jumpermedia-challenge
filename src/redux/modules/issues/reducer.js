import { DEFAULT_REPO } from './consts'
import {
  GET_ISSUES_REQUEST,
  GET_ISSUES_SUCCESS,
  GET_ISSUES_FAIL,
  SET_ASSIGNEE,
  SET_REPO,
} from './types'

const initialState = {
  assignee: '',
  issues: null,
  issuesError: null,
  repo: DEFAULT_REPO,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ISSUES_REQUEST:
      return {
        ...state,
        issuesError: null,
        loading: true,
      }
    case GET_ISSUES_SUCCESS:
      return {
        ...state,
        issues: action.result,
        loading: false,
      }
    case GET_ISSUES_FAIL:
      return {
        ...state,
        issues: null,
        issuesError: action.error,
        loading: false,
      }
    case SET_ASSIGNEE:
      return {
        ...state,
        assignee: action.assignee,
      }
    case SET_REPO:
      return {
        ...state,
        repo: action.repo,
      }
    default:
      return state
  }
}
