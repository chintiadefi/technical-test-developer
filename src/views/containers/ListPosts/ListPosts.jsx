import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Row, Col, List, Button, Pagination, Divider, Modal, Form, Input, notification,
} from "antd";
import { GET_POSTS_USER } from "../../../store/actions/index";
import { GetUsersPosts, addEditPost, deletePost } from "../../../services/fetch-api";

const { Item } = List;
const { Meta } = Item;
const { TextArea } = Input;

function ListUsers() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const listPosts = useSelector((state) => state.posts);
  const [page, setPage] = useState(1);
  const [modalAddVisible, setModalAddVisible] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [idPost, setIdPost] = useState(null);
  const [payload, setPayload] = useState({
    // eslint-disable-next-line object-shorthand
    userId: userId,
    title: "",
    body: "",
  });

  useEffect(() => {
    GetUsersPosts(userId).then((res) => {
      dispatch({ type: GET_POSTS_USER, data: res.data });
    });
  }, [dispatch]);

  const changeInput = (e) => {
    const { value, name } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const onEdit = (item) => {
    setIdPost(item.id);
    setPayload({ ...payload, title: item.title, body: item.body });
    setModalAddVisible(true);
  };

  const onSubmit = () => {
    setLoadingSubmit(true);
    addEditPost(payload, idPost).then((res) => {
      setLoadingSubmit(false);
      setModalAddVisible(false);
      setIdPost(null);
      setPayload({ ...payload, title: "", body: "" });
      if (res && res.status === 201) {
        notification.success({
          message: "Success",
          description: "Success add a new post!",
        });
      } else if (res && res.status === 200) {
        notification.success({
          message: "Success",
          description: "Success edit your post!",
        });
      } else {
        notification.error({
          message: "Failed",
          description: "Failed, please try again!",
        });
      }
    });
  };

  const onCloseModalAdd = () => {
    setModalAddVisible(false);
    setIdPost(null);
    setPayload({ ...payload, title: "", body: "" });
  };

  const onDelete = (id) => {
    deletePost(id).then((res) => {
      if (res && res.status === 200) {
        notification.success({
          message: "Success",
          description: "Success delete your post!",
        });
      } else {
        notification.error({
          message: "Failed",
          description: "Failed, please try again!",
        });
      }
    });
  };

  const confirmDelete = (id) => {
    Modal.confirm({
      title: "Are you sure want to delete this post?",
      okText: "Yes",
      cancelText: "Cancel",
      onOk: () => onDelete(id),
    });
  };

  return (
	<>
		<Row justify="end">
			<Col>
				<Button
					type="primary"
					size="large"
					style={{ width: "200px" }}
					onClick={() => setModalAddVisible(true)}
				>
					Add Post
				</Button>
			</Col>
		</Row>
		<Divider />
		<List
			itemLayout="horizontal"
			dataSource={listPosts}
			renderItem={(item) => (
				<Item
					actions={[
						<Button key={item.id} type="primary" onClick={() => onEdit(item)}>Edit</Button>,
						<Button key={item.id} type="primary" danger onClick={() => confirmDelete(item.id)}>Delete</Button>,
					]}
				>
					<Meta
						title={item.title}
						description={item.body}
					/>
				</Item>
			)}
		/>
		<Divider />
		<Pagination current={page} total={listPosts.length} onChange={(e) => setPage(e)} />

		{/* Modal Add Post */}
		<Modal
			title="Add Post"
			visible={modalAddVisible}
			maskClosable={false}
			onCancel={onCloseModalAdd}
			footer={[<Button key="1" type="primary" loading={loadingSubmit} onClick={onSubmit}>Submit</Button>]}
		>
			<Form name="add-post" labelCol={{ span: 24 }}>
				<Form.Item label="Title" rules={[{ required: true }]}>
					<Input name="title" value={payload.title} onChange={(e) => changeInput(e)} />
				</Form.Item>
				<Form.Item label="Body" rules={[{ required: true }]}>
					<TextArea name="body" value={payload.body} rows={4} onChange={(e) => changeInput(e)} />
				</Form.Item>
			</Form>
		</Modal>
	</>
  );
}

export default ListUsers;
