import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Row, Col, List, Button, Divider, Modal, Form, Input, notification, Card,
} from "antd";
import { GET_LIST_COMMENTS, GET_DETAIL_POST } from "../../../store/actions/index";
import {
  GetPostComments, GetDetailPost, addEditComment, deleteComment,
} from "../../../services/fetch-api";

import "./ListComments.scss";

const { Item } = List;
const { Meta } = Item;
const { TextArea } = Input;

function DetailPost() {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const listComment = useSelector((state) => state.comments);
  const detailPost = useSelector((state) => state.detailPost);
  const [modalAddVisible, setModalAddVisible] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [idComment, setIdComment] = useState(null);
  const [payload, setPayload] = useState({
    // eslint-disable-next-line object-shorthand
    postId: postId,
    name: "",
    email: "",
    body: "",
  });

  useEffect(() => {
    GetPostComments(postId).then((res) => {
      dispatch({ type: GET_LIST_COMMENTS, data: res.data });
    });
    GetDetailPost(postId).then((res) => {
      dispatch({ type: GET_DETAIL_POST, data: res.data });
    });
  }, [dispatch]);

  const changeInput = (e) => {
    const { value, name } = e.target;
    setPayload({ ...payload, [name]: value });
  };

  const onEdit = (item) => {
    setIdComment(item.id);
    setPayload({
      ...payload, name: item.name, email: item.email, body: item.body,
    });
    setModalAddVisible(true);
  };

  const onSubmit = () => {
    if (payload.name !== "" && payload.email !== "" && payload.body !== "") {
      if (payload.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        setLoadingSubmit(true);
        addEditComment(payload, idComment).then((res) => {
          setLoadingSubmit(false);
          setModalAddVisible(false);
          setIdComment(null);
          setPayload({
            ...payload, name: "", email: "", body: "",
          });
          if (res && res.status === 201) {
            notification.success({
              message: "Success",
              description: "Success add a new comment!",
            });
          } else if (res && res.status === 200) {
            notification.success({
              message: "Success",
              description: "Success edit your comment!",
            });
          } else {
            notification.error({
              message: "Failed",
              description: "Failed, please try again!",
            });
          }
        });
      } else {
        notification.error({
          message: "Failed",
          description: "Email format does not match!",
        });
      }
    } else {
      notification.error({
        message: "Failed",
        description: "Please, fill in all fields!",
      });
    }
  };

  const onCloseModalAdd = () => {
    setModalAddVisible(false);
    setIdComment(null);
    setPayload({
      ...payload, name: "", email: "", body: "",
    });
  };

  const onDelete = (id) => {
    deleteComment(id).then((res) => {
      if (res && res.status === 200) {
        notification.success({
          message: "Success",
          description: "Success delete your comment!",
        });
      } else {
        notification.error({
          message: "Failed",
          description: "Failed, please try comment!",
        });
      }
    });
  };

  const confirmDelete = (id) => {
    Modal.confirm({
      title: "Are you sure want to delete this comment?",
      okText: "Yes",
      cancelText: "Cancel",
      onOk: () => onDelete(id),
    });
  };

  return (
	<div className="list-comments">
		<Card type="inner" title={detailPost.title}>
			{detailPost.body}
		</Card>
		<Divider />
		<Row justify="end">
			<Col>
				<Button
					type="primary"
					size="large"
					style={{ width: "200px" }}
					onClick={() => setModalAddVisible(true)}
				>
					Add Comment
				</Button>
			</Col>
		</Row>
		<List
			itemLayout="horizontal"
			dataSource={listComment}
			pagination
			renderItem={(item) => (
				<Item
					actions={[
						<Button key={item.id} type="primary" onClick={() => onEdit(item)}>Edit</Button>,
						<Button key={item.id} type="primary" danger onClick={() => confirmDelete(item.id)}>Delete</Button>,
					]}
				>
					<Meta
						title={item.name}
						description={item.email}
					/>
					{item.body}
				</Item>
			)}
		/>

		{/* Modal Add Post */}
		<Modal
			title={idComment ? "Edit Post" : "Add Post"}
			visible={modalAddVisible}
			maskClosable={false}
			onCancel={onCloseModalAdd}
			footer={[<Button key="1" type="primary" loading={loadingSubmit} onClick={onSubmit}>Submit</Button>]}
		>
			<Form name="add-post" labelCol={{ span: 24 }}>
				<Form.Item label="Name">
					<Input name="name" value={payload.name} onChange={(e) => changeInput(e)} />
				</Form.Item>
				<Form.Item label="Email" rules={[{ required: true, type: "email", message: "Please fill in the correct email format!" }]}>
					<Input name="email" value={payload.email} onChange={(e) => changeInput(e)} />
				</Form.Item>
				<Form.Item label="Body">
					<TextArea name="body" value={payload.body} rows={4} onChange={(e) => changeInput(e)} />
				</Form.Item>
			</Form>
		</Modal>
	</div>
  );
}

export default DetailPost;
