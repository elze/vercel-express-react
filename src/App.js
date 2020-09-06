import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import {
	stateFromApi
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
          <h1 className="Skills-title">Items</h1>
        {
          this.props.items.map((item, ind) => { 
            return (		  
            <div key={item.id}>
             <button key={item.id} className={'btn btn-info btn-md button-with-margin'} href="none">
              {item.name}
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
	setStateFromApi: (items) => dispatch(stateFromApi(items))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);