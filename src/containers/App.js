import React, { Component } from 'react';
import { connect } from 'react-redux';
import Searchinput from '../components/Searchinput'
import CardList from '../components/CardList';
import Scroll from '../components/Scroll'
import { setSearchField } from './actions.js'
import './App.css'
import 'tachyons'




const mapStateToProps = state => {
	return {
		searchField : state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange : (event) => dispatch(setSearchField(event.target.value))
		}
	}

class App extends Component {

	constructor(){
		super();
		this.state = {
			robots : [],

		}
	}

			componentDidMount() {
				fetch("https://jsonplaceholder.typicode.com/users")
				.then((response) => {return response.json()})
				.then(
					(users) => {
					this.setState({robots: users})
					}
					);
			}

	render()
		{
			let {searchField, onSearchChange} = this.props
			let filteredRobot = this.state.robots.filter((robots)=>{
				return robots.name.toLowerCase().includes(searchField.toLowerCase())
				})
			if (this.state.robots.length === 0){
						return <h1 className="heading tc"> LOADING</h1>
					}
			else {

				return(
					<div className = "tc">
						<h1 className="f1 heading">Robo Friends </h1>
						<Searchinput searchchange = {onSearchChange}/>
							<Scroll>
							<CardList robots={filteredRobot} />
							</Scroll>
					</div> 	
					)
			}


		}


	

}


export default connect(mapStateToProps, mapDispatchToProps)(App);

 


