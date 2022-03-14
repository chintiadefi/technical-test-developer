import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Breadcrumb, Layout, Typography,
} from "antd";

import "./container.scss";

const { Header, Footer, Content } = Layout;
const { Title } = Typography;
const { Item } = Breadcrumb;

function Container(props) {
  const { title, content, breadCrumb } = props;

  return (
	<Layout className="layout">
		<Header className="pt-2 pb-2">
			<Title className="title">{title}</Title>
		</Header>
		<Content className="content">
			<Breadcrumb style={{ margin: "16px 0" }}>
				{breadCrumb.map((route) => (
					<Item key={route.id}>
						<Link to={route.href}>{route.name}</Link>
					</Item>
				))}
			</Breadcrumb>
			<div className="content-site-layout">{content}</div>
		</Content>

		<Footer style={{ textAlign: "center" }}>
			Chintia Devi ©2022 Created for Kumparan - Frontend Technical Assessment
		</Footer>
	</Layout>
  );
}

Container.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
  breadCrumb: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    href: PropTypes.string,
    name: PropTypes.string,
  })),
};
Container.defaultProps = {
  title: "",
  content: {},
  breadCrumb: [],
};
export default Container;
