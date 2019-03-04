import { startLoader, endLoader } from '../modules/loaders/actions'

export default function clientMiddleware(client) {
  return ({ dispatch, getState }) => {
    return next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState)
      }

      const { promise, types, ...rest } = action
      if (!promise) {
        return next(action)
      }

      const [REQUEST, SUCCESS, FAILURE] = types
      dispatch(startLoader(REQUEST))
      next({ ...rest, type: REQUEST })
      const actionPromise = promise(client)
      actionPromise.then(
        (result) => {
          dispatch(endLoader(REQUEST))
          return next({ ...rest, result, type: SUCCESS })
        },
        (error) => {
          dispatch(endLoader(REQUEST))
          return next({ ...rest, error, type: FAILURE })
        },
      ).catch((error) => {
        console.error('MIDDLEWARE ERROR:', error)
        dispatch(endLoader(REQUEST))
        next({ ...rest, error, type: FAILURE })
      })

      return actionPromise
    }
  }
}
