import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export class App extends Component {

	constructor(props) {
		super(props);
		//this.state = {currentDate: (new Date('2020-08-08')).toString()};
		this.state = {items: [{id: 0, name: 'foo'}]};
	}  

	getItems = async () => {
		const response = await fetch('/api/items');
		console.log(`getItems: returned from fetch`);
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
		this.setState({ items: res })
		//console.log(`componentDidMount: this.props.currentDate = ${this.props.currentDate}`);
	  })
	  .catch(err => console.log(err));
	}  
  
	render() {	
	
	  return (
		<div className="App">
          <h1 className="Skills-title">Items</h1>
        {
          this.state.items.map((item, ind) => { 
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

export default App;
