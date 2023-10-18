import React from "react";
import "./post-list-item.css";

const PostListItem = ()=>{
	return(
		<li className="app-list-item d-flex justify-content-between">
			<span className="app-list-item-label">
				Test data!!!
			</span>
			<div className="d-flex justify-content-center align-item-center">
				<button 
				className="btn-star btn-sm"
				type="button">
					<i className="fa fa-star"></i>
				</button>
				<button 
				type="button"
				className="btn-trash btn-sm">
					<i class="fa fa-trash" ></i>
				</button>
				<i class="fa-solid fa-heart"></i>
			</div>
		</li>
	);
}

export default PostListItem;