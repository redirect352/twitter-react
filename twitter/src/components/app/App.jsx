import "./app.css";
import React from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";


const App = ()=>{
	const postsData = [
		{label : "Going to leart React technology!", important : false, id : 1},
		{label : "Going to study hard!", important : false, id : 2},
		{label : "Want to improve my english!", important : false, id : 3},
		{label : "Start to study spanish!", important : false, id : 4}
	];

	return(
		<div className="app">
			<AppHeader/>
			<div className="search-panel d-flex">
				<SearchPanel/>
				<PostStatusFilter/>
			</div>
			<PostList posts = {postsData}/>
			<PostAddForm/>
		</div>
	);
}

export default App;