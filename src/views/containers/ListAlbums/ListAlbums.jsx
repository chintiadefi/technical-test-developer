import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Table, Button, Grid } from "antd";
import url, { generateDynamicUrl } from "../../../config/url";
import { GET_ALBUMS_USER } from "../../../store/actions/index";
import { GetUserAlbums } from "../../../services/fetch-api";

const { Column } = Table;

function ListAlbums() {
  const { md } = Grid.useBreakpoint();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId } = useParams();
  const listAlbums = useSelector((state) => state.albums);

  useEffect(() => {
    GetUserAlbums(userId).then((res) => {
      dispatch({ type: GET_ALBUMS_USER, data: res.data });
    });
  }, [dispatch]);

  const clickDetail = (albumId) => {
    const newPath = generateDynamicUrl(url.ALBUM_PHOTOS.route, {
      albumId,
    });
    navigate(newPath);
  };

  return (
	<Table
		dataSource={listAlbums}
		bordered
		size="middle"
		scroll={{ y: "80vh" }}
		rowKey="id"
	>
		<Column title="Title" width={md ? null : 200} dataIndex="title" key="title" />
		<Column
			title="Action"
			width={md ? 175 : 150}
			align="center"
			key="action"
			render={(item) => (
				<Button type="primary" onClick={() => clickDetail(item.id)}>View List Photos</Button>
			)}
		/>
	</Table>
  );
}

export default ListAlbums;
