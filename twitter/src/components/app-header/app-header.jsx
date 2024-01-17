import React from "react";
import "./app-header.css";

import styled from "styled-components";

const Header = styled.div`
	display : flex;
	align-items: flex-end;
	justify-content: space-between;
	h1{
		font-size: 26px;
		color: ${props => props.colored ? 'red' : 'black'}
	}
	h2{
		font-size: 1.2rem;
		color: grey;
	}
`

const AppHeader = ({postCount = -1, likedCount = -1})=>{
	return(
		<Header colored = {false}  >
			<h1>Nikita Ponomarev</h1>
			<h2>{postCount} post, {likedCount} likes</h2>
		</Header>
	);
}

export default AppHeader;