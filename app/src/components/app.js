import * as React from "react";
import * as ReactDOM from "react-dom";
import { BookListConnect } from "../containers/book_list";

export const App = () => {
	return <div>
		<BookListConnect></BookListConnect>
	</div>;
}

