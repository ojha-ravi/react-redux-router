import * as React from "react";

export class BookList extends React.Component {
	render() {
		return <ul className="list-group col-sm-4">
			{this.renderList()}
		</ul>;
	}
	returnList() {
		return this.props.books.map((v) => {
			return <li key={v.title} className="list-group-item">{v.title}</li>;
		})
	}
}
