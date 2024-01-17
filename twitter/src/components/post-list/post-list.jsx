import React from "react";
import "./post-list";
import PostListItem from "../post-list-item";
import { ListGroup } from "reactstrap";

const PostList = ({posts = [], deleteItem, onLiked})=>{
	const postElements = posts.map((item, index) => {
		const {id, display,...itemProps} = item;	
		return (
			<PostListItem 
			{...itemProps} 
			key={id ?? index}
			onDeleteItem = {()=>deleteItem(id)}
			onLiked = {() => onLiked(id)}
			></PostListItem>
		)
	});

	return(
		<ListGroup className="app-list">
			{postElements}
		</ListGroup>
	);
}

export default PostList;