import ApiRequest from "./request";
import constants from "../config/constant";

const Login = async (payload = {}) => {
  let result = {};

  await ApiRequest.post(
    `${constants.baseUrl}/${constants.service.login}`,
    { body: payload },
  ).then((res) => {
    result = res;
  })
    .catch((err) => {
      result = err;
    });

  return result;
};

export default Login;
