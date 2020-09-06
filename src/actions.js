export const STATE_FROM_API = 'STATE_FROM_API'

export function stateFromApi(items) {    
  return { type: STATE_FROM_API, items: items }
}
