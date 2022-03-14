import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Table, Button, Avatar, Modal, Grid,
} from "antd";
import { GET_PHOTOS_ALBUM, GET_DETAIL_PHOTO } from "../../../store/actions/index";
import { GetAlbumPhotos, GetDetailPhoto } from "../../../services/fetch-api";

import "./ListPhotos.scss";

const { Column } = Table;

function ListPhotos() {
  const { md } = Grid.useBreakpoint();
  const dispatch = useDispatch();
  const { albumId } = useParams();
  const [modalPhotoVisible, setModalPhotoVisible] = useState(false);
  const listPhotos = useSelector((state) => state.photos);
  const detailPhoto = useSelector((state) => state.detailPhoto);

  useEffect(() => {
    GetAlbumPhotos(albumId).then((res) => {
      dispatch({ type: GET_PHOTOS_ALBUM, data: res.data });
    });
  }, [dispatch]);

  const onDetailPhoto = (photoId) => {
    GetDetailPhoto(photoId).then((res) => {
      dispatch({ type: GET_DETAIL_PHOTO, data: res.data });
    });
    setModalPhotoVisible(true);
  };

  const onCloseModal = () => {
    setModalPhotoVisible(false);
    dispatch({ type: GET_DETAIL_PHOTO, data: {} });
  };

  return (
	<>
		<Table
			dataSource={listPhotos}
			bordered
			size="middle"
			scroll={{ y: "80vh" }}
			rowKey="id"
		>
			<Column title="Title" width={md ? null : 200} dataIndex="title" key="title" />
			<Column
				title="Thumbnail"
				width={md ? 200 : 100}
				align="center"
				key="thumbnailUrl"
				render={(item) => (
					<Avatar shape="square" size={64} src={item.thumbnailUrl} />
				)}
			/>
			<Column
				title="Action"
				width={150}
				align="center"
				key="action"
				render={(item) => (
					<Button type="primary" onClick={() => onDetailPhoto(item.id)}>View Photos</Button>
				)}
			/>
		</Table>

		{/* Modal Detail Photo */}
		<Modal
			title={detailPhoto.title}
			visible={modalPhotoVisible}
			onCancel={onCloseModal}
			footer={null}
		>
			<div className="modal-image" style={{ backgroundImage: `url(${detailPhoto.url})` }} />
		</Modal>
	</>
  );
}

export default ListPhotos;
