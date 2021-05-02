import React from 'react';
import 'tachyons';



const Searchinput = (props) => {

	let {searchchange} = props;
	return(

		<div >
			<input

				className = "pa3 ba b--green bg-lightest-blue"
				type="search" 
				placeholder="Search Robots" 
				onChange={searchchange}
				/>
				
		</div>


		);


}


export default Searchinput;