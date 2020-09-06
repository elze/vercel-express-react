import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import {
	stateFromApi,
	toggleButton
} from './actions'

export class App extends Component {

	static defaultProps = { items: []};
	
	constructor(props) {
		super(props);
		//this.state = {items: [{id: 0, name: 'foo'}]};
	}  

	getItems = async () => {
		const response = await fetch('/api/items');
		const body = await response.json();
		console.log(`getItems: got response.json() ; response.status = ${response.status}`);
		if (response.status !== 200) {
			throw Error(body.message);
		}
		return body;
	};	

	componentDidMount() {
		this.getItems()
			.then(res => {
				console.log(`componentDidMount: res = ${res}`);
				//this.setState({ items: res })
				this.props.setStateFromApi(res);
		})
		.catch(err => console.log(err));
	}  
  
	render() {	
	
	  return (
		<div className="App">
          <h1 className="Items-Title">Items</h1>
        {
          this.props.items.map((item, index) => { 
			let buttonClassName = 'btn btn-info btn-md button-with-margin ';
            return (		  
            <div key={item.id}>
             <button className={buttonClassName} href="none"
			 onClick={() => this.props.toggleSelected(index)}>
              {item.name} &nbsp;
				  { item.selected ? 
					<FontAwesomeIcon icon={faCheck} />
					: ""
				  }
             </button>
			</div>
		    )
           }
          )
        }
       </div>
	  );
	}
}

//export default App;

const mapStateToProps = state => {
  return {
	items: state.items
  }
}

function mapDispatchToProps(dispatch) {
  return {
	setStateFromApi: (items) => dispatch(stateFromApi(items)),
	toggleSelected: (index) => dispatch(toggleButton(index))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);