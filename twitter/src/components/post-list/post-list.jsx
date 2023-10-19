import React from "react";
import "./post-list";
import PostListItem from "../post-list-item";

const PostList = ({posts = []})=>{
	
	const postElements = posts.map((item, index) =>{
		const {id, ...itemProps} = item;
		return (
			<PostListItem {...itemProps} key={id ?? index}></PostListItem>
		);
	});

	return(
		<ul className="app-list list-group">
			{postElements}
			{/* <PostListItem label = "Going to leart React technology!" important = {false}/>
			<PostListItem label = "Going to study hard!" important />
			<PostListItem label = "Want to improve my english!" important = {false}/> */}
		</ul>
	);
}

export default PostList;