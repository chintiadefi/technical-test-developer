import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import configureStore from "./store/ContainterReducers";

import routes from "./config/routes";

import ContainerLayout from "./views/layouts/Container";
import Page404 from "./views/errors/Page404";

import "antd/dist/antd.css";
import "./index.scss";

ReactDOM.render(
	<Provider store={configureStore()}>
		<BrowserRouter>
			<Routes>
				{routes.map((route) => (route.content ? (
					<Route
						key={route.id}
						path={route.path}
						exact={route.exact}
						name={route.name}
						element={(
							<ContainerLayout
								title={route.name}
								breadCrumb={route.breadCrumb}
								content={route.content}
							/>
    )}
					/>
				) : (null)))}
				<Route path="*" element={<Page404 />} />
			</Routes>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root"),
);
