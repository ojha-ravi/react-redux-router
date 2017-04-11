import * as React from "react";
import { connect } from "react-redux";

class BookDetail extends React.Component {
	render() {
		if (!this.props.book) {
			return <div>Details will go here</div>;
			
		}
		return <div>
			<h3>Deatils for:</h3>
			<div>{this.props.book ? this.props.book.title : ""}</div>
		</div>;
		
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	}
}

export const BookDetailConnect = connect(mapStateToProps)(BookDetail);
