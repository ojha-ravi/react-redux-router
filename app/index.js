import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import RduxPromise from "redux-promise";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "./src/routes";

import { App } from './src/components/app';
import { rootReducer } from './src/reducers/index';

const createStoreWithMiddleware = applyMiddleware(RduxPromise)(createStore);

// There is some issue here,
// according to lesson it should be able to work,
// There was no where told it is being told that we need store

const Greeting = () => {
	return <div>Hey There!!</div>;
}

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(rootReducer)}>
		<Router>
			<div>
				<Route path="/" component={App}></Route>
				<Route path="/greet" component={Greeting}></Route>
			</div>
		</Router>
	</Provider>
	, document.querySelector('.container'));
