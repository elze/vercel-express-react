import {
	STATE_FROM_API
} from './actions'

const reducer = (state = {}, action) => {	
    switch (action.type) {
      case STATE_FROM_API:
		console.log(`reducer case STATE_FROM_API: state = ${JSON.stringify(state)}`);
         
		let stFromApi = Object.assign({}, {items: action.items});
		console.log(`reducer case STATE_FROM_API: stFromApi = ${JSON.stringify(stFromApi)}`);
			
		return stFromApi;
		
      default:
        return state
    }
}

export default reducer
  