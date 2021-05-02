import React from 'react';
import 'tachyons';



const Scroll = (props) => {

	return(
			<div className = "ma4" style={{overflowY: 'scroll', height:'500px' }}>
				{props.children}
			</div>
		)
		
};


export default Scroll
