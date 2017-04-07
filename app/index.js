import * as React from "react";
import * as ReactDOM from "react-dom";
import { BookListConnect } from "./src/containers/book_list";

const App = () => {
	return <div>
		<BookListConnect></BookListConnect>
	</div>;
}

ReactDOM.render(<App />, document.querySelector(".container"));
