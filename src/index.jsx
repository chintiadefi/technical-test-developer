/* eslint-disable no-mixed-spaces-and-tabs */
import React from "react";
import ReactDOM from "react-dom";
import { useSelector, Provider } from "react-redux";
import {
  BrowserRouter, Routes, Route, Navigate,
} from "react-router-dom";
import configureStore from "./store/ContainterReducers";
import Login from "./views/containers/Login";

import routes from "./config/routes";

import ContainerLayout from "./views/layouts/Container";
import Page404 from "./views/errors/Page404";

import "antd/dist/antd.css";
import "./index.scss";

function App() {
  const user = useSelector((state) => state.login);
  return (
	<BrowserRouter>
		<Routes>
			{routes.map((route) => {
			  if (route.name === "Login") { return <Route path="/login" exact name="Login" element={<Login />} />; }
			  return (
				<Route
					key={route.id}
					path={route.path}
					exact={route.exact}
					name={route.name}
					element={user?.token ? (
						<ContainerLayout
							title={route.name}
							breadCrumb={route.breadCrumb}
							content={route.content}
						/>
					) : <Navigate to="/login" replace />}
				/>
			  );
			})}
			<Route path="*" element={<Page404 />} />
		</Routes>
	</BrowserRouter>
  );
}

ReactDOM.render(
	<Provider store={configureStore()}>
		<App />
	</Provider>,
	document.getElementById("root"),
);
