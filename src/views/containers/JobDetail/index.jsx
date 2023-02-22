import React from "react";
import { useParams } from "react-router-dom";
import {
  Card, Typography, Row, Col, Image,
} from "antd";
import jobList from "../../../data/positions.json";

const { Title, Paragraph } = Typography;

function JobDetail() {
  const { id } = useParams();
  const data = jobList.find((item) => item.id === id);

  return (
	<Card>
		<Row justify="space-between">
			<Col>
				<Title level={3}>{data.title}</Title>
				<Title level={5}>{data.company}</Title>
			</Col>
			<Col>
				<Image alt={data.title} height={150} width={150} src={data.company_logo} />
			</Col>
		</Row>
		<Title level={5}>Job Description</Title>
		<Paragraph>
			<div
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{ __html: data.description }}
			/>
		</Paragraph>
		<Title level={5}>How to Apply</Title>
		<Paragraph>
			<div
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{ __html: data.how_to_apply }}
			/>
		</Paragraph>
	</Card>
  );
}

export default JobDetail;
