import { path } from 'ramda'
import { createSelector } from 'reselect'

export const assigneeSelector = path(['issues', 'assignee'])

export const issuesDataSelector = path(['issues', 'issuesData', 'data'])

export const issuesErrorSelector = path(['issues', 'issuesError', 'message'])

export const issuesLoadingSelector = path(['issues', 'loading'])

export const repoSelector = path(['issues', 'repo'])

export const paginationSelector = state => {
  if (!state) {
    return null
  }
  const prevPage = parseInt(path(['prev', 'page'], state), 10)
  const nextPage = parseInt(path(['next', 'page'], state), 10)
  const lastPage = parseInt(path(['last', 'page'], state), 10)
  const itemsPerPage = parseInt(path(['first', 'per_page'], state) || path(['last', 'per_page'], state), 10)
  return {
    currentPage: (prevPage + 1) || (nextPage - 1) || 1,
    itemsPerPage,
    totalPages: lastPage || (prevPage + 1),
  }
}

export const issuesPaginationSelector = createSelector(
  path(['issues', 'issuesData', 'pagination']),
  paginationSelector,
)
