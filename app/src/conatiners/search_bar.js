import * as React from "react";

export class SearchBar extends React.Component {
	render() {
		return <form className="input-group">
			<input type="text" placeholder="enter here"></input>
			<button className="btn">Click Me</button>
		</form>
	}
}

// const SearchBarConnect = 
