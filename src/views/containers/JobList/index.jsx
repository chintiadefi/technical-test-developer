import React, { useState } from "react";
import {
  Table, Button, Space, Form, Input, Checkbox,
} from "antd";
import { useNavigate } from "react-router-dom";
import url, { generateDynamicUrl } from "../../../config/url";
import jobList from "../../../data/positions.json";
import "./index.scss";

const { Column } = Table;

function JobList() {
  const navigate = useNavigate();
  const [data, setData] = useState(jobList);

  const onSearch = (value) => {
    const title = value.title?.toLowerCase() || "";
    const location = value.location?.toLowerCase() || "";
    const type = value.type?.[0] || "";
    const filterJob = jobList.filter((item) => item.title?.toLowerCase().includes(title))
      .filter((item) => item.location?.toLowerCase().includes(location))
      .filter((item) => item.type?.includes(type));

    setData(filterJob);
  };

  const clickDetail = (id) => {
    const newPath = generateDynamicUrl(url.JOB_DETAIL.route, {
      id,
    });
    navigate(newPath);
  };

  return (
	<div>
		<Form
			className="search-form"
			autoComplete="off"
			onFinish={onSearch}
		>
			<Form.Item name="title">
				<Input placeholder="Job Title" allowClear />
			</Form.Item>
			<Form.Item name="location">
				<Input placeholder="Location" allowClear />
			</Form.Item>
			<Form.Item name="type">
				<Checkbox.Group>
					<Checkbox value="Full Time">Full Time Only</Checkbox>
				</Checkbox.Group>
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">Search</Button>
			</Form.Item>
		</Form>
		<Table
			dataSource={data}
			bordered
			size="middle"
			rowKey="id"
		>
			<Column title="Title" dataIndex="title" key="title" />
			<Column title="Company" dataIndex="company" key="company" />
			<Column title="Type" dataIndex="type" key="type" />
			<Column title="Location" dataIndex="location" key="location" />
			<Column
				title="Action"
				align="center"
				key="action"
				render={(item) => (
					<Space size="middle">
						<Button onClick={() => clickDetail(item.id)} type="primary">Detail</Button>
					</Space>
				)}
			/>
		</Table>
	</div>

  );
}

export default JobList;
