import {
	STATE_FROM_API,
	TOGGLE_BUTTON
} from './actions'

const reducer = (state = {}, action) => {	
    switch (action.type) {
      case STATE_FROM_API:
		console.log(`reducer case STATE_FROM_API: state = ${JSON.stringify(state)}`);
         
		let stFromApi = Object.assign({}, {items: action.items});
		console.log(`reducer case STATE_FROM_API: stFromApi = ${JSON.stringify(stFromApi)}`);
			
		return stFromApi;
		
      case TOGGLE_BUTTON:
		console.log(`reducer case TOGGLE_BUTTON: state = ${JSON.stringify(state)}`);
		let newItem = Object.assign({}, state.items[action.id], {selected: !state.items[action.id].selected});
		let newItems = Object.assign([...state.items], {[action.id]: newItem});
         
		let newState = Object.assign({}, {items: newItems} );
		console.log(`reducer case TOGGLE_BUTTON: newState = ${JSON.stringify(newState)}`);
			
		return newState;		
		
      default:
        return state
    }
}

export default reducer
  