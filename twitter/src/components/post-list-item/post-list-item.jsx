import React, { Component } from "react";
import "./post-list-item.css";

export default class PostListItem extends Component{
	state = {
		important : this.props.important,
		liked : false
	}
	
	onImportant = ()=>{
		this.setState( ({important}) =>({important: !important}));
	}
	onLiked = ()=>{
		this.setState( ({liked}) =>({liked: !liked}));
	}

	render(){
		const {label} = this.props;
		const {important, liked} = this.state;
 		let classNames = "app-list-item d-flex justify-content-between";
		if(important){
			classNames += " important";
		}
		if (liked){
			classNames += " like";
		}
		return(
			<li className={classNames}>
				<span 
				className="app-list-item-label"
				onClick={this.onLiked}>
					{label}
				</span>
				<div className="d-flex justify-content-center align-item-center">
					<button 
					className="btn-star btn-sm"
					type="button"
					onClick={this.onImportant}>
						<i className="fa fa-star"></i>
					</button>
					<button 
					type="button"
					className="btn-trash btn-sm">
						<i className="fa fa-trash" ></i>
					</button>
					<i className = "fa-solid fa-heart"></i>
				</div>
			</li>
		);
	}
}

