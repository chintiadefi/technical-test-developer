import React from "react";
import { Typography, Row, Col } from "antd";

import "./Page404.scss";

const { Title } = Typography;

function Page404() {
  return (
	<Row className="Page404" align="middle">
		<Col span={24}>
			<Title className="title">404</Title>
			<Title className="description">Not Found</Title>
		</Col>
	</Row>
  );
}

export default Page404;
