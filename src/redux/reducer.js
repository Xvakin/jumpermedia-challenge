import { combineReducers } from 'redux'

import issues from './modules/issues/reducer'
import loaders from './modules/loaders/reducer'

export default combineReducers({
  issues,
  loaders,
})
