import axios from "axios";
import { BASE_EMPLOYEE_URL } from "@/constants/url.constant.js";

export const getEmployeeList = ({ success, error }) => {
  axios
    .get(`${BASE_EMPLOYEE_URL}/user/get/details`)
    .then((res) => {
      success && success(res);
    })
    .catch((err) => {
      error && error(err);
    });
};