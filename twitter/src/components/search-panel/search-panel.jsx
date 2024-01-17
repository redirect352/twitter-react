import React, { useState } from "react";
import "./search-panel";

const SearchPanel = ({onSearch})=>{
	const [searchValue, changeSearchValue] = useState('');

	const onChanged = (e) => {
		changeSearchValue(e.target.value);
		onSearch(e.target.value);
	}

	return(
		<input className="form-control search-input"
		type="text"
		placeholder="Search post"
		value={searchValue}
		onChange={onChanged} 
		/>
	);
}

export default SearchPanel;