import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
	return (

		<header style={{backgroundColor: '#000000',textAlign: 'center' , color: '#fff', padding: '10px'}}>
			<h1 align="center">Todo List</h1>
			<Link style={linkStyle} to="/">Home</Link> | 
			<Link style={linkStyle}  to="/about">About</Link> 
		</header>

		)
		
	
}

const linkStyle={
	color: '#fff', padding: '10px',
	textDecoration:'none'
}

export default Header;