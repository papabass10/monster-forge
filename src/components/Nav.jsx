import React from 'react'
import logo from './logo.png'

const Nav = ({onRouteChange}) => {
	return (
		<div style={{display: 'flex', justifyContent: 'flex-start', backgroundColor: '#7D0103'}} className="bb bw3 b--gold">
			<div>
				<img src={logo} alt="logo" height="120" width="120"></img>
			</div>
			<div className="ph3">
				<div style={{display: 'flex'}}>
					<p onClick={() => onRouteChange('home')} className="gold link dim f2 pl3 mt5 mb0 pointer">Home</p>
					<p onClick={() => onRouteChange('search')} className="gold link dim f2 pl3 mt5 mb0 pointer">Search</p>
					<p onClick={() => onRouteChange('create')} className="gold link dim f2 pl3 mt5 mb0 pointer">Create</p>
				</div>
			</div>
		</div>
	)
}


export default Nav