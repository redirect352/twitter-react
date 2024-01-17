import React, { useState } from "react";
import "./post-add-form.css";

const PostAddForm = ({onAddPost})=>{
	const [label, setLabel] = useState('');

	const onSubmit = (e) =>{
		e.preventDefault();
		onAddPost(label);
		setLabel('');
	}

	return(
		<form 	className="bottom-pannel d-flex"
				onSubmit={onSubmit}>
			<input 
			type="text"
			placeholder="What's on your mind?"
			className="form-control new-post-label"
			value={label}
			onChange={(e) => setLabel(e.target.value)} 
			/>
			<button 
			type="submit"
			className="btn btn-outline-secondary form-submit "
			>Add post</button>
		</form>
	);
}

export default PostAddForm;