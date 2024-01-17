import "./app.css";
import React, { useState } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import styled from "styled-components";

const AppBlock = styled.div`
	margin: 0 auto;
	max-width: 800px;
`

const App = ()=>{
	const [posts, setPosts] = useState([
		{label : "Going to leart React technology!", important : false, liked : false, display : true, id : 1},
		{label : "Going to study hard!", important : false, liked : false, display : true, id : 2},
		{label : "Want to improve my english!", important : false, liked : false, display : true, id : 3},
		{label : "Start to study spanish!", important : false, liked : false, display : true, id : 4}
	]);
	const [filter, changeFilter] = useState(() =>  (post) =>post);
	const [searchFilter, changeSearchFilter] = useState(() =>  (post) =>post)
	const deletePost = (id) =>{
		setPosts( posts.filter( post => post.id !== id));
	};
	const addPost = (label) => {
		setPosts([...posts, { 	label, 
								important : false, 
								liked : false,
								id : posts.reduce( (prev, item) => prev = prev > item.id ? prev : item.id, 0) + 1}])
	};
	const likePost = (id) =>{
		setPosts(posts.map( post => post.id === id ? {...post, liked : !post.liked} : post))
	};
	const searchPost = (value) => {
		changeSearchFilter(() =>post => post.label.startsWith(value));
	};
	
	return(
		<AppBlock>
			<AppHeader postCount={posts.length} likedCount = {posts.reduce((prev, post)=> prev+= post.liked ? 1 : 0, 0)}/>
			<div className="search-panel d-flex">
				<SearchPanel onSearch={searchPost}/>
				<PostStatusFilter  changeDisplayCondition = {changeFilter}/>
			</div>
			<PostList posts = {posts.filter(filter).filter(searchFilter)} deleteItem={deletePost} onLiked = {likePost} />
			<PostAddForm onAddPost = {addPost}/>
		</AppBlock>
	);
}

export default App;