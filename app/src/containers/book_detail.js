import * as React from "react";
import { connect } from "react-redux";

class BookDetail extends React.Component {
	render() {
		if (!this.props.book) {
			return <div>Select a book to get started</div>;
		}
		return <div>
			<h3>Deatils for:</h3>
			<div>{this.props.book.title}</div>
			<div>Pages: {this.props.book.pages}</div>
		</div>;
		
	}
}

function mapStateToProps(state) {
	return {
		book: state.activeBook
	}
}

export const BookDetailConnect = connect(mapStateToProps)(BookDetail);
