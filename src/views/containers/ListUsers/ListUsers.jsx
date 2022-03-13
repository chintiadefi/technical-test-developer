import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Typography } from "antd";
import { GET_LIST_USERS } from "../../../store/actions/index";
import { GetUsers } from "../../../services/fetch-api";

const { Title } = Typography;

function ListUsers() {
  const dispatch = useDispatch();

  useEffect(() => {
    GetUsers().then((res) => {
      dispatch({ type: GET_LIST_USERS, data: res.data });
    });
  }, [dispatch]);

  return (
	<Title className="description">List Users</Title>
  );
}

export default ListUsers;
