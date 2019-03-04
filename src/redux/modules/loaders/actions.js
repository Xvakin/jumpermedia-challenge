import { START_LOADER, END_LOADER } from './types'

export const startLoader = (actionType) => ({
  type: START_LOADER,
  actionType,
})

export const endLoader = (actionType) => ({
  type: END_LOADER,
  actionType,
})
