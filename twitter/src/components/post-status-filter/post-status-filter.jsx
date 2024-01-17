import React, { useState } from "react";
import "./post-status-filter.css";
import { Button } from "reactstrap";

const PostStatusFilter = ({changeDisplayCondition})=>{
	const [filter, changeFilter] = useState('all');
	const filterCliked  = (filterName, condition) => {
		changeFilter(filterName);
		changeDisplayCondition(condition)
	}

	return(
		<div className="btn-group">
			<Button 
					outline = {filter !== 'all'} 
					onClick={() => filterCliked('all', () => post => post)}
					color ="info"
					>
				All
			</Button>
			<Button 
					outline = {filter !== 'liked'}
					onClick={() => filterCliked('liked', () => post => post.liked)}
					color ="info"
					>
				Liked
			</Button>
		</div>
	);
}

export default PostStatusFilter;