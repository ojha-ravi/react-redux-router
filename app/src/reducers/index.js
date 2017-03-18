import { combineReducers } from "redux";
import { BooksReducer } from "./reducer_books" 

export const rootReducer = combineReducers({
	books: BooksReducer
});
