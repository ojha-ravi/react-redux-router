import * as React from "react";
import { connect } from "react-redux";

class BookList extends React.Component {
	returnList() {
		return this.props.books.map((v) => {
			return <li key={v.title} className="list-group-item">{v.title}</li>;
		});
	}

	render() {
		return <ul className="list-group col-sm-4">
			{this.renderList()}
		</ul>;
	}
}

function mapStateToProps(state) {
	// Whatever is returned will show up as props.
	// Inside of BookList
	return {
		books: state.books
	};
}

export const BookListConnect = connect(mapStateToProps)(BookList);
