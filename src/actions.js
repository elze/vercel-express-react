export const STATE_FROM_API = 'STATE_FROM_API'
export const TOGGLE_BUTTON = 'TOGGLE_BUTTON'

export function stateFromApi(items) {    
  return { type: STATE_FROM_API, items: items }
}

export function toggleButton(ind) {    
  return { type: TOGGLE_BUTTON, id: ind}
}