import * as React from "react";
import * as ReactDOM from "react-dom";

export class App extends React.Component {
	render() {
		return <div>
			Hello World
			{this.props.children}
		</div>;
	}
}
