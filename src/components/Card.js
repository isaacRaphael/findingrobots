import React from 'react';
import 'tachyons';


const Card = (props) => {
	let {name, id, email} = props;
	return(
		
		<div className ="bg-light-green dib br3 pa3 ma3 tc grow bw2 shadow-5">
			<img alt="robots" src={`https://robohash.org/${id}?200x200`} />
			<h1>{name}</h1>
			<p>{email}</p>
		</div>

		);
}


export default Card