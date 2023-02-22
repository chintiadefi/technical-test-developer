import React from "react";
import {
  Table, Button, Space, Grid,
} from "antd";
import jobList from "../../../data/positions.json";

const { Column } = Table;

function JobList() {
  const { lg } = Grid.useBreakpoint();

  return (
	<Table
		dataSource={jobList}
		bordered
		size="middle"
		scroll={{ x: "calc(700px + 50%)", y: "80vh" }}
		rowKey="id"
	>
		<Column title="Title" width={250} dataIndex="title" key="title" />
		<Column title="Company" width={200} dataIndex="company" key="company" />
		<Column title="Type" width={250} dataIndex="type" key="type" />
		<Column title="Location" width={250} dataIndex="location" key="location" />
		<Column
			title="Action"
			align="center"
			width={250}
			key="action"
			fixed={lg ? "right" : false}
			render={(item) => (
				<Space size="middle">
					<Button type="primary">Detail</Button>
				</Space>
			)}
		/>
	</Table>
  );
}

export default JobList;
