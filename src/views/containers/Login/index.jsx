import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button, Form, Input, notification,
} from "antd";
import "./index.scss";
import Login from "../../../services/fetch-api";

function FormLogin() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (value) => {
    setLoading(true);
    const payload = {
      email: value.email,
      password: value.password,
    };

    Login(payload).then((res) => {
      dispatch({ type: "LOGIN", data: res.data });

      if (res?.data?.error) {
        notification.error({ message: res?.data?.error });
      } else {
        notification.success({
          message: "Login successfully!",
        });
        navigate("/");
      }
    }).catch((err) => {
      notification.error({ message: err });
    });

    setLoading(false);
  };

  return (
	<div className="container-login">
		<div className="card">
			<Form
				form={form}
				name="basic"
				initialValues={{ remember: true }}
				autoComplete="off"
				labelCol={{ span: 4 }}
				onFinish={onSubmit}
			>
				<Form.Item
					label="Email"
					name="email"
					rules={[{ required: true, message: "Please input your email!", typeL: "email" }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label="Password"
					name="password"
					rules={[{ required: true, message: "Please input your password!" }]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit" loading={loading}>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	</div>
  );
}

export default FormLogin;
