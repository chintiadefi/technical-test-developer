import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Table, Button, Space } from "antd";
import url, { generateDynamicUrl } from "../../../config/url";
import { GET_LIST_USERS } from "../../../store/actions/index";
import { GetUsers } from "../../../services/fetch-api";

const { Column, ColumnGroup } = Table;

function ListUsers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listUsers = useSelector((state) => state.users);

  useEffect(() => {
    GetUsers().then((res) => {
      dispatch({ type: GET_LIST_USERS, data: res.data });
    });
  }, [dispatch]);

  const clickDetail = (userId, post) => {
    const newPath = generateDynamicUrl(post ? url.USER_POSTS.route : url.USER_ALBUMS.route, {
      userId,
    });
    navigate(newPath);
  };

  return (
	<Table
		dataSource={listUsers}
		bordered
		size="middle"
		scroll={{ x: "calc(700px + 50%)", y: "80vh" }}
		rowKey="id"
	>
		<Column title="Name" width={250} dataIndex="name" key="name" fixed="left" />
		<Column title="Username" width={200} dataIndex="username" key="username" />
		<Column title="Email" width={250} dataIndex="email" key="email" />
		<ColumnGroup title="Address">
			<Column title="Street" width={150} dataIndex={["address", "street"]} key="street" />
			<Column title="Suite" width={150} dataIndex={["address", "suite"]} key="suite" />
			<Column title="City" width={150} dataIndex={["address", "city"]} key="city" />
			<Column title="Zipcode" width={150} dataIndex={["address", "zipcode"]} key="zipcode" />
			<ColumnGroup title="Geo">
				<Column title="Lat" width={100} dataIndex={["address", "geo", "lat"]} key="lat" />
				<Column title="Lng" width={100} dataIndex={["address", "geo", "lng"]} key="lng" />
			</ColumnGroup>
		</ColumnGroup>
		<Column title="Phone" width={200} dataIndex="phone" key="phone" />
		<Column title="Website" width={150} dataIndex="website" key="website" />
		<ColumnGroup title="Company">
			<Column title="Name" width={150} dataIndex={["company", "name"]} key="name" />
			<Column title="Catch Phrase" width={300} dataIndex={["company", "catchPhrase"]} key="catchPhrase" />
			<Column title="BS" width={300} dataIndex={["company", "bs"]} key="bs" />
		</ColumnGroup>
		<Column
			title="Action"
			align="center"
			width={250}
			key="action"
			fixed="right"
			render={(item) => (
				<Space size="middle">
					<Button type="primary" onClick={() => clickDetail(item.id, true)}>View Posts</Button>
					<Button type="primary" onClick={() => clickDetail(item.id, false)}>View Albums</Button>
				</Space>
			)}
		/>
	</Table>
  );
}

export default ListUsers;
