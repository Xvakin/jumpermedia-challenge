import {
  START_LOADER,
  END_LOADER,
} from './types'

const initialState = {
  actions: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case START_LOADER:
      return {
        ...state,
        actions: {
          ...state.actions,
          [action.actionType]: true,
        },
      }
    case END_LOADER:
      return {
        ...state,
        actions: {
          ...state.actions,
          [action.actionType]: false,
        },
      }
    default:
      return state
  }
}
