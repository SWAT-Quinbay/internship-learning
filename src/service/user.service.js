import axios from "axios";
import { BASE_EMPLOYEE_URL } from "../constants/url.constant";

export const registerUser = ({ success, error, user }) => {
  axios
    .post(`${BASE_EMPLOYEE_URL}/user/register`, user)
    .then((res) => {
      success && success(res);
    })
    .catch((err) => {
      error && error(err);
    });
};

export const loginUser = ({ success, error, user }) => {
  axios
    .post(`${BASE_EMPLOYEE_URL}/user/login`, user)
    .then((res) => {
      success && success(res);
    })
    .catch((err) => {
      error && error(err);
    });
};



export const updatePassword = ({ success, error, payload }) => {
  axios
    .put(`${BASE_EMPLOYEE_URL}/user/change/password`, payload)
    .then((res) => {
      success && success(res);
    })
    .catch((err) => {
      error && error(err);
    });
};

