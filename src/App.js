import React, { Component } from 'react';
import Nav from './components/Nav'
import Home from './components/Home'
import Create from './components/Create'
import './App.css';

const initialState = {
	route: 'home',	
}
class App extends Component {
	constructor(){
		super();
		this.state = initialState;
	}

	onRouteChange = (newRoute) => {
		this.setState({route: newRoute});
	}

  render() {
    return (
      <div className="App">
				<header>
					<p className="ma0">
						<Nav onRouteChange={this.onRouteChange} />
					</p>
				</header>
				<body style={{backgroundColor: '#7D0103'}}>
					{ this.state.route === 'home' ? 
						<div>
							<p className='mt0'>
								<Home />
							</p>
						</div> :  this.state.route === 'create' ?
						<div>
							<p className='mt0'>
								<Create />
							</p> 
						</div> : 
						<div>
							<p className='mt0'>Search Page</p>
						</div>}
				</body>
      </div>
    );
  }
}

export default App;
